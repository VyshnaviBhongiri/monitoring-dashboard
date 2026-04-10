import { useEffect, useState } from "react";
import { exportReport } from "./utils/exportPDF";
import SystemCard from "./components/SystemCard";
import AlertsPanel from "./components/AlertsPanel";
import Summary from "./components/Summary";

export default function App() {
  const [systems, setSystems] = useState([]);
  const [connected, setConnected] = useState(false); // ✅ added

  useEffect(() => {
    let ws;

    const connect = () => {
      ws = new WebSocket("wss://monitoring-dashboard-eph9.onrender.com");

      ws.onopen = () => {
        console.log("Connected");
        setConnected(true); // ✅ when connected
      };

      ws.onmessage = (event) => {
        setSystems(JSON.parse(event.data));
      };

      ws.onclose = () => {
        console.log("Reconnecting...");
        setConnected(false); // ✅ when disconnected
        setTimeout(connect, 3000); // ✅ retry after 3 sec
      };
    };

    connect();

    return () => ws && ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">
        🚀 Monitoring Dashboard
      </h1>

      {/* ✅ NEW: Connection status message */}
      {!connected && (
        <p className="text-yellow-400 mb-4">
          Connecting to server... please wait ⏳
        </p>
      )}

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