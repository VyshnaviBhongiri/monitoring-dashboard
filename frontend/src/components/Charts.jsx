import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

export default function Charts({ data }) {
  return (
    <div className="h-40 mt-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cpu" stroke="#38bdf8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}