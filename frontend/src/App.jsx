import { useEffect, useState } from "react";
import { exportReport } from "./utils/exportPDF";
import SystemCard from "./components/SystemCard";
import AlertsPanel from "./components/AlertsPanel";
import Summary from "./components/Summary";

export default function App() {
  const [systems, setSystems] = useState([]);


  useEffect(() => {
    const ws = new WebSocket("wss://monitoring-dashboard-eph9.onrender.com");

    ws.onmessage = (event) => {
      setSystems(JSON.parse(event.data));
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">
        🚀 Monitoring Dashboard
      </h1>

      <button
        onClick={() => exportReport(systems)}
        className="bg-blue-600 px-4 py-2 rounded mb-4"
      >
        Export Report (PDF)
      </button>

      <Summary systems={systems} />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {systems.map((sys) => (
          <SystemCard key={sys.id} system={sys} />
        ))}
      </div>

      <AlertsPanel systems={systems} />
    </div>
  );
}