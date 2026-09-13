import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [page, setPage] = useState("Home");

  const pages = [
  "Home",
  "EcoSort AI",
  "EcoAudit AI",
  "Dashboard",
  "Map",
  "History",
];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-5 hidden md:block">
        <h1 className="text-2xl font-bold text-emerald-400 mb-2">
          🌱 EcoAudit AI
        </h1>

        <p className="text-xs text-slate-400 mb-8">
          AI Energy Waste Auditor
        </p>

        <nav className="space-y-2">
          {pages.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`w-full text-left px-4 py-3 rounded-xl ${
                page === item
                  ? "bg-emerald-500 text-slate-950 font-bold"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1">
        <header className="border-b border-slate-800 px-6 py-5">
          <p className="text-sm text-slate-400">
            Environment & Resources
          </p>
          <h2 className="text-xl font-bold">{page}</h2>
        </header>

        <section className="p-6 md:p-10">
          {page === "Home" && <Home setPage={setPage} />}
          {page === "EcoSort AI" && <Audit />}
          {page === "EcoAudit AI" && <EcoAudit />}
          {page === "Dashboard" && <Dashboard />}
          {page === "Map" && <Map />}
          {page === "History" && <History />}
        </section>
      </main>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <div className="min-h-screen w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-16">

        {/* Background glow */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            AI-Powered Environmental Intelligence
          </div>

          {/* Main heading */}
          <div className="mt-7 max-w-5xl">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Make smarter choices
              <br />

              <span className="text-emerald-400">
                for a greener future.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
              EcoAI combines artificial intelligence with environmental
              intelligence to help you understand energy consumption,
              segregate waste, and make better everyday decisions.
            </p>

          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <button
              onClick={() => setPage("EcoSort AI")}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/20"
            >
              ♻️ Try EcoSort AI
            </button>

            <button
              onClick={() => setPage("EcoAudit AI")}
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-900 text-white font-semibold transition-all duration-200"
            >
              ⚡ Audit Your Energy
            </button>

          </div>

          {/* Trust / deployment line */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>✓ AI-powered analysis</span>
            <span>•</span>
            <span>✓ Instant insights</span>
            <span>•</span>
            <span>✓ Working MVP</span>
          </div>


          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">

            {/* EcoSort */}
            <button
              onClick={() => setPage("EcoSort AI")}
              className="group text-left bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl">
                ♻️
              </div>

              <h3 className="text-lg font-semibold mt-5">
                EcoSort AI
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Identify waste using AI and discover the correct
                disposal category and compartment.
              </p>

              <span className="inline-block mt-4 text-emerald-400 text-sm font-medium">
                Analyze waste →
              </span>

            </button>


            {/* EcoAudit */}
            <button
              onClick={() => setPage("EcoAudit AI")}
              className="group text-left bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-2xl">
                ⚡
              </div>

              <h3 className="text-lg font-semibold mt-5">
                EcoAudit AI
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Analyze appliances and estimate energy usage,
                cost, CO₂ impact, and efficiency.
              </p>

              <span className="inline-block mt-4 text-emerald-400 text-sm font-medium">
                Audit appliance →
              </span>

            </button>


            {/* Dashboard */}
            <button
              onClick={() => setPage("Dashboard")}
              className="group text-left bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl">
                📊
              </div>

              <h3 className="text-lg font-semibold mt-5">
                Eco Dashboard
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Track waste scans, energy audits, environmental
                impact, and your Eco Score.
              </p>

              <span className="inline-block mt-4 text-emerald-400 text-sm font-medium">
                View impact →
              </span>

            </button>


            {/* Smart Map */}
            <button
              onClick={() => setPage("Map")}
              className="group text-left bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl">
                🗺️
              </div>

              <h3 className="text-lg font-semibold mt-5">
                Smart Disposal Map
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Find recommended disposal locations based on
                your detected waste category.
              </p>

              <span className="inline-block mt-4 text-emerald-400 text-sm font-medium">
                Explore map →
              </span>

            </button>

          </div>


          {/* HOW IT WORKS */}
          <div className="mt-20">

            <div className="text-center max-w-2xl mx-auto">

              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
                How EcoAI works
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                From image to environmental action
              </h2>

              <p className="text-slate-400 mt-4">
                AI transforms everyday environmental problems into
                simple, actionable insights.
              </p>

            </div>


            <div className="grid md:grid-cols-3 gap-6 mt-10">

              {/* Step 1 */}
              <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-7">

                <div className="text-emerald-400 text-sm font-bold">
                  01
                </div>

                <div className="text-3xl mt-4">
                  📸
                </div>

                <h3 className="text-xl font-semibold mt-4">
                  Capture
                </h3>

                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Upload a waste item or appliance image and
                  provide the required information.
                </p>

              </div>


              {/* Step 2 */}
              <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-7">

                <div className="text-emerald-400 text-sm font-bold">
                  02
                </div>

                <div className="text-3xl mt-4">
                  🤖
                </div>

                <h3 className="text-xl font-semibold mt-4">
                  Analyze with AI
                </h3>

                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Gemini analyzes the image and generates
                  environmental insights in seconds.
                </p>

              </div>


              {/* Step 3 */}
              <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-7">

                <div className="text-emerald-400 text-sm font-bold">
                  03
                </div>

                <div className="text-3xl mt-4">
                  🌱
                </div>

                <h3 className="text-xl font-semibold mt-4">
                  Take Action
                </h3>

                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Get recommendations, track your impact,
                  and make smarter environmental decisions.
                </p>

              </div>

            </div>

          </div>


          {/* IMPACT SECTION */}
          <div className="mt-20 bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/20 rounded-3xl p-8 md:p-12">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
                  One platform. Two problems.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                  Turning awareness into action.
                </h2>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  EcoAI brings energy efficiency and waste segregation
                  together in one intelligent platform — helping users
                  understand their environmental impact and act on it.
                </p>

              </div>


              <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800">
                  <div className="text-2xl">♻️</div>
                  <p className="font-semibold mt-3">
                    Smarter Sorting
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Better waste segregation
                  </p>
                </div>

                <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800">
                  <div className="text-2xl">⚡</div>
                  <p className="font-semibold mt-3">
                    Energy Awareness
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Understand consumption
                  </p>
                </div>

                <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800">
                  <div className="text-2xl">🌍</div>
                  <p className="font-semibold mt-3">
                    Environmental Impact
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Track meaningful metrics
                  </p>
                </div>

                <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800">
                  <div className="text-2xl">🤖</div>
                  <p className="font-semibold mt-3">
                    AI Intelligence
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Instant visual analysis
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* FOOTER MESSAGE */}
          <div className="text-center mt-16 pb-8">

            <p className="text-slate-500 text-sm">
              🌱 EcoAI — Technology for a cleaner, smarter future.
            </p>

            <p className="text-slate-600 text-xs mt-2">
              AI-generated environmental insights are estimates and
              should be used as decision-support information.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}
      function Audit() {
        const [image, setImage] = useState(null);
        const [selectedFile, setSelectedFile] = useState(null);
        const [loading, setLoading] = useState(false);
        const [result, setResult] = useState(null);
        const [error, setError] = useState("");
        const handleImageChange = (event) => {
          const file = event.target.files[0];
          if (file) {
            setSelectedFile(file);
            setImage(URL.createObjectURL(file));
            setResult(null);
            setError("");
          }};

  const analyzeWithAI = async () => {
    if (!selectedFile) {
      setError("Please choose a waste image first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch(
        "https://ecoai-backend-ankit.onrender.com/api/waste/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "AI analysis failed");
      }
      localStorage.setItem(
        "lastWasteCategory",
        data.category
      );
      const record = {
        id: Date.now(),
        date: new Date().toISOString(),
        item: data.item,
        category: data.category,
        confidence: data.confidence,
        compartment: data.compartment,
        recommendation: data.recommendation,
      };
      const existingHistory = JSON.parse(
        localStorage.getItem("ecoSortHistory") || "[]"
      );
      localStorage.setItem(
        "ecoSortHistory",
        JSON.stringify([record, ...existingHistory])
      );
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryInfo = (category) => {
    const value = category?.toLowerCase();

    if (value === "organic") {
      return {
        icon: "🥬",
        name: "Organic / Wet Waste",
        bin: "Compartment 1",
      };
    }

    if (value === "dry") {
      return {
        icon: "📦",
        name: "Dry Waste",
        bin: "Compartment 2",
      };
    }

    if (value === "recyclable") {
      return {
        icon: "♻️",
        name: "Recyclable Waste",
        bin: "Compartment 3",
      };
    }

    return {
      icon: "⚠️",
      name: "E-Waste / Hazardous",
      bin: "Compartment 4",
    };
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">♻️ EcoSort AI</h1>

      <p className="text-slate-400 mt-2">
        Upload a waste image and let Gemini AI identify the correct
        waste category and compartment.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* Upload */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

          {image ? (
            <img
              src={image}
              alt="Selected waste"
              className="w-full h-64 object-contain rounded-xl mb-5"
            />
          ) : (
            <>
              <div className="text-6xl">♻️</div>

              <h2 className="text-xl font-bold mt-4">
                Upload Waste Image
              </h2>

              <p className="text-slate-400 mt-2">
                Plastic, paper, food waste, electronics, etc.
              </p>
            </>
          )}

          <label className="inline-block mt-6 bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-bold cursor-pointer">
            {image ? "Change Image" : "Choose Waste Image"}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* AI Analysis */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-xl font-bold mb-5">
            🤖 AI Waste Analysis
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-slate-950 rounded-xl p-4">
              <p className="text-slate-500 text-sm">Bin 1</p>
              <p className="font-bold">🥬 Organic</p>
            </div>

            <div className="bg-slate-950 rounded-xl p-4">
              <p className="text-slate-500 text-sm">Bin 2</p>
              <p className="font-bold">📦 Dry</p>
            </div>

            <div className="bg-slate-950 rounded-xl p-4">
              <p className="text-slate-500 text-sm">Bin 3</p>
              <p className="font-bold">♻️ Recyclable</p>
            </div>

            <div className="bg-slate-950 rounded-xl p-4">
              <p className="text-slate-500 text-sm">Bin 4</p>
              <p className="font-bold">⚠️ E-Waste</p>
            </div>
          </div>

          <button
            onClick={analyzeWithAI}
            disabled={loading}
            className="w-full bg-emerald-500 text-slate-950 py-3 rounded-xl font-bold disabled:opacity-50"
          >
            {loading
              ? "🤖 Gemini is analyzing..."
              : "🔍 Analyze Waste with AI"}
          </button>

          {error && (
            <p className="text-red-400 mt-4">
              ❌ {error}
            </p>
          )}

          {result && (
            <div className="mt-6 bg-slate-950 border border-emerald-500/30 rounded-2xl p-5">

              {(() => {
                const info = getCategoryInfo(result.category);

                return (
                  <>
                    <div className="text-center mb-5">
                      <div className="text-5xl">
                        {info.icon}
                      </div>

                      <h3 className="text-2xl font-bold mt-2">
                        {result.item}
                      </h3>

                      <p className="text-emerald-400 font-semibold mt-1">
                        {info.name}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">

                      <div className="bg-slate-900 rounded-xl p-4">
                        <p className="text-slate-500 text-sm">
                          Confidence
                        </p>

                        <p className="text-xl font-bold">
                          {Math.round(result.confidence * 100)}%
                        </p>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-4">
                        <p className="text-slate-500 text-sm">
                          Destination
                        </p>

                        <p className="text-xl font-bold">
                          {info.bin}
                        </p>
                      </div>

                    </div>

                    <div className="mt-4 bg-slate-900 rounded-xl p-4">
                      <p className="text-slate-500 text-sm">
                        💡 Disposal Recommendation
                      </p>

                      <p className="mt-1 text-slate-200">
                        {result.recommendation}
                      </p>
                    </div>
                  </>
                );
              })()}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
function Dashboard() {
  const wasteHistory = JSON.parse(
    localStorage.getItem("ecoSortHistory") || "[]"
  );

  const energyHistory = JSON.parse(
    localStorage.getItem("ecoAuditHistory") || "[]"
  );

  // -----------------------------
  // WASTE STATISTICS
  // -----------------------------

  const totalWaste = wasteHistory.length;

  const organic = wasteHistory.filter(
    (item) => item.category === "organic"
  ).length;

  const dry = wasteHistory.filter(
    (item) => item.category === "dry"
  ).length;

  const recyclable = wasteHistory.filter(
    (item) => item.category === "recyclable"
  ).length;

  const hazardous = wasteHistory.filter(
    (item) => item.category === "hazardous"
  ).length;

  // -----------------------------
  // ENERGY STATISTICS
  // -----------------------------

  const totalEnergyAudits = energyHistory.length;

  const totalMonthlyKwh = energyHistory.reduce(
    (sum, item) => sum + Number(item.monthlyKwh || 0),
    0
  );

  const totalMonthlyCost = energyHistory.reduce(
    (sum, item) => sum + Number(item.monthlyCost || 0),
    0
  );

  const totalMonthlyCO2 = energyHistory.reduce(
    (sum, item) => sum + Number(item.co2Kg || 0),
    0
  );

  const averageEcoScore =
    totalEnergyAudits === 0
      ? 0
      : Math.round(
          energyHistory.reduce(
            (sum, item) => sum + Number(item.ecoScore || 0),
            0
          ) / totalEnergyAudits
        );

  return (
    <div className="p-8 w-full">

      {/* HEADER */}

      <h1 className="text-3xl font-bold">
        📊 EcoAI Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Unified environmental intelligence for waste and energy management.
      </p>


      {/* MAIN STATISTICS */}

      <div className="grid md:grid-cols-4 gap-5 mt-8">

        <Card
          title="Waste Scans"
          value={totalWaste}
          icon="♻️"
        />

        <Card
          title="Energy Audits"
          value={totalEnergyAudits}
          icon="⚡"
        />

        <Card
          title="Monthly Energy"
          value={`${totalMonthlyKwh.toFixed(1)} kWh`}
          icon="🔋"
        />

        <Card
          title="Monthly Cost"
          value={`₹${totalMonthlyCost.toFixed(0)}`}
          icon="💰"
        />

      </div>


      {/* ENVIRONMENTAL IMPACT */}

      <div className="grid md:grid-cols-3 gap-5 mt-6">

        <Card
          title="Monthly CO₂"
          value={`${totalMonthlyCO2.toFixed(1)} kg`}
          icon="🌍"
        />

        <Card
          title="Average Eco Score"
          value={`${averageEcoScore}/100`}
          icon="🌱"
        />

        <Card
          title="Recyclable Items"
          value={recyclable}
          icon="♻️"
        />

      </div>


      {/* WASTE DISTRIBUTION */}

      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-semibold">
          ♻️ Waste Distribution
        </h2>

        <div className="mt-6 space-y-4">

          <ProgressBar
            label="🌱 Organic"
            value={organic}
            total={totalWaste}
          />

          <ProgressBar
            label="🗑️ Dry"
            value={dry}
            total={totalWaste}
          />

          <ProgressBar
            label="♻️ Recyclable"
            value={recyclable}
            total={totalWaste}
          />

          <ProgressBar
            label="⚠️ Hazardous / E-Waste"
            value={hazardous}
            total={totalWaste}
          />

        </div>

      </div>


      {/* ENERGY IMPACT */}

      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-semibold">
          ⚡ Energy Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-5">

          <div className="bg-slate-950 rounded-xl p-5">

            <p className="text-slate-500 text-sm">
              Monthly Consumption
            </p>

            <p className="text-2xl font-bold mt-2">
              {totalMonthlyKwh.toFixed(1)} kWh
            </p>

          </div>


          <div className="bg-slate-950 rounded-xl p-5">

            <p className="text-slate-500 text-sm">
              Estimated Monthly Cost
            </p>

            <p className="text-2xl font-bold mt-2">
              ₹{totalMonthlyCost.toFixed(0)}
            </p>

          </div>


          <div className="bg-slate-950 rounded-xl p-5">

            <p className="text-slate-500 text-sm">
              Estimated CO₂
            </p>

            <p className="text-2xl font-bold mt-2">
              {totalMonthlyCO2.toFixed(1)} kg
            </p>

          </div>

        </div>


        <p className="text-xs text-slate-500 mt-5">
          ⚠️ Energy and CO₂ values are AI-based estimates,
          not direct electrical measurements.
        </p>

      </div>


      {/* RECENT WASTE SCANS */}

      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-semibold">
          ♻️ Recent AI Waste Scans
        </h2>


        {wasteHistory.length === 0 ? (

          <p className="text-slate-500 mt-4">
            No waste scans yet.
          </p>

        ) : (

          <div className="mt-4 space-y-3">

            {wasteHistory.slice(0, 5).map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between bg-slate-800 rounded-xl p-4"
              >

                <div>

                  <p className="font-medium">
                    {item.item}
                  </p>

                  <p className="text-sm text-slate-400">
                    {item.category}
                  </p>

                </div>


                <span className="text-green-400 font-semibold">
                  {Math.round(
                    Number(item.confidence || 0) * 100
                  )}
                  %
                </span>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* RECENT ENERGY AUDITS */}

      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-semibold">
          ⚡ Recent Energy Audits
        </h2>


        {energyHistory.length === 0 ? (

          <p className="text-slate-500 mt-4">
            No energy audits yet. Go to EcoAudit AI and analyze an appliance.
          </p>

        ) : (

          <div className="mt-4 space-y-3">

            {energyHistory.slice(0, 5).map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between bg-slate-800 rounded-xl p-4"
              >

                <div>

                  <p className="font-medium">
                    {item.appliance}
                  </p>

                  <p className="text-sm text-slate-400">
                    {Number(item.monthlyKwh || 0).toFixed(1)}
                    {" "}
                    kWh/month
                  </p>

                </div>


                <span className="text-emerald-400 font-semibold">
                  ₹{Number(item.monthlyCost || 0).toFixed(0)}
                </span>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* DISCLAIMER */}

      <div className="mt-8 mb-4 text-center">

        <p className="text-xs text-slate-500">
          EcoAI combines AI-powered waste classification and
          energy analysis to support smarter environmental decisions.
        </p>

      </div>

    </div>
  );
}


function ProgressBar({ label, value, total }) {

  const percentage =
    total === 0
      ? 0
      : Math.round((value / total) * 100);

  return (
    <div>

      <div className="flex justify-between text-sm mb-1">

        <span>
          {label}
        </span>

        <span className="text-slate-400">
          {value} ({percentage}%)
        </span>

      </div>


      <div className="w-full bg-slate-800 rounded-full h-3">

        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}
function Map() {
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [route, setRoute] = useState([]);
  const [routeLoading, setRouteLoading] = useState(false);

  const [wasteCategory, setWasteCategory] = useState(
    localStorage.getItem("lastWasteCategory") || ""
  );

  const center = userLocation || [16.3067, 80.4365];
const getUserLocation = () => {
  if (!navigator.geolocation) {
    alert("Location is not supported by this browser.");
    return;
  }

  setLocationLoading(true);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserLocation([
        position.coords.latitude,
        position.coords.longitude,
      ]);

      setLocationLoading(false);
    },
    () => {
      alert("Location permission was denied.");
      setLocationLoading(false);
    }
  );
};
  const getRoute = async (destination) => {
  try {
    setRouteLoading(true);

    const start = center;

    const url =
      `https://router.project-osrm.org/route/v1/driving/` +
      `${start[1]},${start[0]};` +
      `${destination[1]},${destination[0]}` +
      `?overview=full&geometries=geojson`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.routes || data.routes.length === 0) {
      throw new Error("Route not found");
    }

    const coordinates =
      data.routes[0].geometry.coordinates.map(
        ([longitude, latitude]) => [latitude, longitude]
      );

    setRoute(coordinates);
  } catch (error) {
    console.error(error);
    alert("Unable to find route.");
  } finally {
    setRouteLoading(false);
  }
};

const collectionPoints = [
  {
    id: 1,
    name: "Recycling Collection Center",
    position: [16.3105, 80.4420],
    type: "Recyclable Waste",
    category: "recyclable",
  },
  {
    id: 2,
    name: "E-Waste Collection Center",
    position: [16.3015, 80.4295],
    type: "E-Waste",
    category: "hazardous",
  },
  {
    id: 3,
    name: "Organic Waste Center",
    position: [16.3140, 80.4300],
    type: "Organic Waste",
    category: "organic",
  },
];
  return (
    <div className="w-full p-8">

      <h1 className="text-3xl font-bold">
        🗺️ Smart Waste Collection Map
      </h1>

      <p className="text-slate-400 mt-2">
        Find nearby waste collection and recycling centers.
      </p>
      <button
       onClick={getUserLocation}
       className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
       >
        {locationLoading
        ? "Finding Location..."
        : "📍 Use My Location"}
        </button>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">

        {/* Map */}
        <div className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden border border-slate-800">

          <MapContainer
            center={center}
            zoom={14}
            scrollWheelZoom={true}
            className="h-full w-full"
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {userLocation && (
              <Marker position={userLocation}>
                <Popup>
                  📍 Your current location
                  </Popup>
                  </Marker>
                )}
            {route.length > 0 && (
              <Polyline positions={route} />
            )}
            {collectionPoints.map((point) => (
              <Marker key={point.id} position={point.position}>
                <Popup>
                  <strong>{point.name}</strong>
                  <br />
                  {point.type}
                  {wasteCategory === point.category && (
                    <>
                    <br />
                    <br />
                    ⭐ <strong>Recommended for your waste</strong>
                    </>
                  )}
                  </Popup>
                  </Marker>
                ))}

          </MapContainer>

        </div>

        {/* Collection Points */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <h2 className="text-xl font-semibold">
            ♻️ Collection Points
          </h2>

          <div className="mt-5 space-y-4">

            {collectionPoints.map((point) => (
              <div
                key={point.id}
                className="bg-slate-800 rounded-xl p-4"
              >

                <h3 className="font-semibold">
                  {point.name}
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  {point.type}
                </p>

                <button
                  className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm"
                  onClick={() => getRoute(point.position)}
                  
                >
                  🚗 Get Route
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

function History() {
  const history = JSON.parse(
    localStorage.getItem("ecoSortHistory") || "[]"
  );

  const getCategoryInfo = (category) => {
    if (category === "organic") {
      return { icon: "🌱", name: "Organic / Wet Waste" };
    }

    if (category === "dry") {
      return { icon: "🗑️", name: "Dry Waste" };
    }

    if (category === "recyclable") {
      return { icon: "♻️", name: "Recyclable Waste" };
    }

    return { icon: "⚠️", name: "Hazardous / E-Waste" };
  };

  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-bold">🕘 Scan History</h1>

      <p className="text-slate-400 mt-2">
        View your previous AI waste classification results.
      </p>

      {history.length === 0 ? (
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
          <p className="text-slate-400">
            No scans yet.
          </p>

          <p className="text-slate-500 mt-2">
            Analyze some waste using EcoSort AI to see your history here.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {history.map((item) => {
            const category = getCategoryInfo(item.category);

            return (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {category.icon} {item.item}
                    </h2>

                    <p className="text-slate-400 mt-1">
                      {category.name}
                    </p>

                    <p className="text-sm text-slate-500 mt-2">
                      {new Date(item.date).toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-green-400 font-bold">
                      {Math.round(item.confidence * 100)}%
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Confidence
                    </p>

                    <p className="text-sm text-slate-400 mt-2">
                      Bin {item.compartment}
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-slate-800 rounded-xl p-3">
                  <p className="text-sm text-slate-300">
                    💡 {item.recommendation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Card({ value, title }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-3xl font-bold text-emerald-400">
        {value}
      </p>

      <p className="text-slate-400 mt-2">
        {title}
      </p>
    </div>
  );
}
function EcoAudit() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hours, setHours] = useState(8);
  const [quantity, setQuantity] = useState(1);
  const [tariff, setTariff] = useState(8);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      setImage(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const analyzeAppliance = async () => {
    if (!selectedFile) {
      alert("Please upload an appliance image first.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("image", selectedFile);
      formData.append("hours", hours);
      formData.append("quantity", quantity);
      formData.append("tariff", tariff);

      const response = await fetch(
        "https://ecoai-backend-ankit.onrender.com/api/energy/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Energy analysis failed");
      }

      setResult(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-bold">
        ⚡ EcoAudit AI
      </h1>

      <p className="text-slate-400 mt-2">
        Analyze appliance energy consumption and discover ways to reduce
        electricity waste.
      </p>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">

        {/* Upload */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">
            📷 Upload Appliance
          </h2>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-5 block w-full text-sm text-slate-400"
          />

          {image && (
            <img
              src={image}
              alt="Appliance preview"
              className="mt-5 w-full h-64 object-contain bg-slate-800 rounded-xl"
            />
          )}
        </div>

        {/* Inputs */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">
            ⚙️ Usage Information
          </h2>

          <label className="block mt-5 text-sm text-slate-400">
            Usage hours per day
          </label>

          <input
            type="number"
            min="0"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="mt-2 w-full bg-slate-800 rounded-lg p-3"
          />

          <label className="block mt-4 text-sm text-slate-400">
            Number of appliances
          </label>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-2 w-full bg-slate-800 rounded-lg p-3"
          />

          <label className="block mt-4 text-sm text-slate-400">
            Electricity tariff (₹ / kWh)
          </label>

          <input
            type="number"
            min="0"
            value={tariff}
            onChange={(e) => setTariff(e.target.value)}
            className="mt-2 w-full bg-slate-800 rounded-lg p-3"
          />

          <button
            onClick={analyzeAppliance}
            disabled={loading}
            className="mt-6 w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 rounded-lg py-3 font-semibold"
          >
            {loading ? "🤖 Analyzing..." : "⚡ Analyze Energy Usage"}
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-2xl font-bold">
            ⚡ Energy Analysis
          </h2>

          <p className="text-slate-400 mt-2">
            {result.appliance}
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-6">

            <Card
              title="Power"
              value={`${result.powerWatts} W`}
              icon="🔌"
            />

            <Card
              title="Monthly Usage"
              value={`${result.monthlyKwh} kWh`}
              icon="⚡"
            />

            <Card
              title="Monthly Cost"
              value={`₹${result.monthlyCost}`}
              icon="💰"
            />

            <Card
              title="Eco Score"
              value={`${result.ecoScore}/100`}
              icon="🌱"
            />

          </div>

          <div className="mt-6 bg-slate-800 rounded-xl p-5">
            <h3 className="font-semibold">
              🌍 Estimated CO₂
            </h3>

            <p className="text-2xl font-bold mt-2">
              {result.co2Kg} kg/month
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              💡 AI Recommendations
            </h3>

            <ul className="mt-3 space-y-2">
              {result.recommendations?.map((tip, index) => (
                <li
                  key={index}
                  className="bg-slate-800 rounded-lg p-3 text-slate-300"
                >
                  💡 {tip}
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;