export default function Summary({ systems }) {
  const total = systems.length
  const critical = systems.filter(s => s.status === 'Critical').length
  const avgCPU = systems.reduce((sum, s) => sum + parseFloat(s.cpu), 0) / (total || 1)

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-slate-800 p-4 rounded-xl">Total: {total}</div>
      <div className="bg-red-600 p-4 rounded-xl">Critical: {critical}</div>
      <div className="bg-blue-600 p-4 rounded-xl">Avg CPU: {avgCPU.toFixed(1)}%</div>
    </div>
  )
}