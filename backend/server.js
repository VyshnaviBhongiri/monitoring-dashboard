const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');

const app = express();
app.use(cors());

const systems = [
  { id: 'vm-1', type: 'VM' },
  { id: 'vm-2', type: 'VM' },
  { id: 'container-1', type: 'Container' },
  { id: 'container-2', type: 'Container' }
];

let history = {};

function generateMetrics() {
  return systems.map(sys => {
    const cpu = Math.random() * 100;
    const memory = Math.random() * 100;
    const disk = Math.random() * 100;

    const health = Math.max(0, 100 - (cpu * 0.4 + memory * 0.3 + disk * 0.3));

    let status = 'Healthy';
    if (health < 50) status = 'Critical';
    else if (health < 80) status = 'Warning';

    let alerts = [];
    if (cpu > 85) alerts.push({ type: 'CPU High', priority: 'High' });
    if (memory > 75) alerts.push({ type: 'Memory High', priority: 'Medium' });
    if (disk > 90) alerts.push({ type: 'Disk Critical', priority: 'Critical' });

    if (!history[sys.id]) history[sys.id] = [];
    history[sys.id].push({ cpu, memory, disk, time: Date.now() });

    if (history[sys.id].length > 20) {
      history[sys.id].shift();
    }

    return {
      ...sys,
      cpu: cpu.toFixed(2),
      memory: memory.toFixed(2),
      disk: disk.toFixed(2),
      health: health.toFixed(2),
      status,
      alerts,
      history: history[sys.id]
    };
  });
}

// HTTP (optional)
app.get('/metrics', (req, res) => {
  res.json(generateMetrics());
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log("Server running");
});

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Client connected');

  const interval = setInterval(() => {
    const data = generateMetrics();
    ws.send(JSON.stringify(data));
  }, 2000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});