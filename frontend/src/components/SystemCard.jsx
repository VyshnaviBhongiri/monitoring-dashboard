export default function SystemCard({ system }) {
  const getColor = () => {
    if (system.status === 'Critical') return 'border-2 border-red-500 animate-pulse'
    if (system.status === 'Warning') return 'border-2 border-yellow-500'
    return 'border border-green-500'
  }

  return (
    <div className={`bg-slate-800 p-5 rounded-2xl shadow ${getColor()}`}>
      <div className="flex justify-between">
        <h2>{system.id}</h2>
        <span>{system.status}</span>
      </div>

      <p>{system.type}</p>
      <p>CPU: {system.cpu}%</p>
      <p>Memory: {system.memory}%</p>
      <p>Disk: {system.disk}%</p>
      <p>Health: {system.health}</p>
    </div>
  )
}