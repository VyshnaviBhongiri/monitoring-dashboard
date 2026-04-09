export default function AlertsPanel({ systems }) {
  const alerts = systems.flatMap(sys =>
    sys.alerts.map((a, i) => ({
      ...a,
      id: sys.id + i,
      system: sys.id
    }))
  )

  return (
    <div className="mt-8 bg-red-900 p-4 rounded-xl">
      <h2 className="text-xl font-bold">⚠️ Alerts</h2>

      {alerts.length === 0 && <p>No alerts</p>}

      {alerts.map(alert => (
        <div key={alert.id}>
          {alert.system} → {alert.type} ({alert.priority})
        </div>
      ))}
    </div>
  )
}