import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { GoogleGenAI } from "@google/genai";

dotenv.config({ path: "./backend/.env" });
console.log(
  "Gemini API key loaded:",
  !!process.env.GEMINI_API_KEY
);

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
});

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "EcoAI backend is running 🚀",
  });
});

// AI Waste Analysis
app.post("/api/waste/analyze", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No image uploaded",
      });
    }

    const prompt = `
You are EcoSort AI, an AI waste segregation assistant.

Analyze the uploaded image and identify the main waste item.

Choose exactly ONE category from these four values:

- organic
- dry
- recyclable
- hazardous

Classification rules:

ORGANIC:
Food waste, leftover food, vegetables, fruits, fruit/vegetable peels,
green chillies, cooked food, leaves, flowers and other biodegradable
kitchen or garden waste.

DRY:
Paper, cardboard, tissues, cloth, packaging and other non-wet
non-recyclable dry waste.

RECYCLABLE:
Plastic bottles, clean plastic containers, glass bottles,
metal cans and other materials commonly sent for recycling.

HAZARDOUS:
Batteries, electronics, electronic accessories, chemicals,
medical waste and other hazardous/e-waste items.

IMPORTANT:
- Never return "wet recyclable", "wet waste", "food waste",
  "e-waste", or any other category name.
- Food and vegetable waste MUST be classified as "organic".
- Return ONLY one of the four exact category values:
  organic, dry, recyclable, hazardous.

Use these compartment numbers:
1 = organic/wet
2 = dry
3 = recyclable
4 = hazardous

Return ONLY valid JSON in exactly this format:

{
  "item": "name of item",
  "category": "organic/dry/recyclable/hazardous",
  "confidence": 0.0,
  "compartment": 1,
  "recommendation": "short disposal recommendation"
}

Confidence must be between 0 and 1.

If the image is unclear, give a lower confidence score and recommend manual verification.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: req.file.mimetype,
                data: req.file.buffer.toString("base64"),
              },
            },
          ],
        },
      ],
    });

    let text = response.text.trim();

    // Remove markdown code fences if Gemini adds them
    text = text.replace(/^```json\s*/i, "");
    text = text.replace(/^```\s*/i, "");
    text = text.replace(/\s*```$/i, "");

    const result = JSON.parse(text);

    res.json(result);
  } catch (error) {
    console.error("Gemini error:", error);

    res.status(500).json({
      error: "AI analysis failed",
      details: error.message,
    });
  }
});
// AI Energy Analysis
app.post("/api/energy/analyze", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No appliance image uploaded",
      });
    }

    const hours = Number(req.body.hours) || 0;
    const quantity = Number(req.body.quantity) || 1;
    const tariff = Number(req.body.tariff) || 8;

    const prompt = `
You are EcoAudit AI, an AI-powered appliance energy auditor.

Analyze the uploaded appliance image and identify the main appliance.

Estimate its typical electrical power consumption in watts based on the visible appliance type.

User-provided information:
- Usage hours per day: ${hours}
- Number of appliances: ${quantity}
- Electricity tariff: ₹${tariff} per kWh

Calculate:

dailyKwh = (powerWatts × hours × quantity) / 1000

monthlyKwh = dailyKwh × 30

monthlyCost = monthlyKwh × tariff

annualCost = monthlyCost × 12

Estimate monthly CO2 emissions using:
0.7 kg CO2 per kWh

Calculate an ecoScore from 0 to 100 based on the estimated energy efficiency.
This is an estimate, not a measurement.

Return ONLY valid JSON in exactly this format:

{
  "appliance": "name of appliance",
  "powerWatts": 0,
  "dailyKwh": 0,
  "monthlyKwh": 0,
  "monthlyCost": 0,
  "annualCost": 0,
  "co2Kg": 0,
  "ecoScore": 0,
  "recommendations": [
    "recommendation 1",
    "recommendation 2",
    "recommendation 3"
  ]
}

Use numbers for all numeric values.

Do not claim that the power consumption is an exact measurement.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: req.file.mimetype,
                data: req.file.buffer.toString("base64"),
              },
            },
          ],
        },
      ],
    });

    let text = response.text.trim();

    text = text.replace(/^```json\s*/i, "");
    text = text.replace(/^```\s*/i, "");
    text = text.replace(/\s*```$/i, "");

    const result = JSON.parse(text);

    res.json(result);

  } catch (error) {
    console.error("Energy AI error:", error);

    res.status(500).json({
      error: "Energy analysis failed",
      details: error.message,
    });
  }
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`EcoAI backend running on http://localhost:${PORT}`);
});