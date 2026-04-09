# 🚀 Unified Monitoring Dashboard (VMs & Containers Simulation)

## 📌 Overview
This project is a real-time monitoring dashboard that simulates multiple systems (Virtual Machines and Containers). It tracks system performance metrics, generates alerts, and visualizes trends over time.

---

## 🎯 Features

### 🖥️ System Simulation
- Simulates multiple systems (VMs and Containers)
- Dynamic generation of system data

### 📊 Performance Monitoring
- Tracks:
  - CPU usage (%)
  - Memory usage (%)
  - Disk usage (%)

### ⚡ Real-Time Updates
- Uses WebSocket for live data streaming
- Instant updates without page refresh

### ❤️ Health Scoring
- Calculates system health based on:
  - CPU (40%)
  - Memory (30%)
  - Disk (30%)
- Status categories:
  - 🟢 Healthy
  - 🟡 Warning
  - 🔴 Critical

### 🚨 Alerts System
- Generates alerts based on thresholds:
  - CPU > 85% → High
  - Memory > 75% → Medium
  - Disk > 90% → Critical
- Displays alerts in real-time

### 📈 Trend Visualization
- Stores historical data
- Displays CPU trends using charts

### 📄 Export Report (PDF)
- Generates downloadable system report
- Includes system metrics and health status

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts (Charts)
- WebSocket (real-time)

### Backend
- Node.js
- Express
- WebSocket (ws)

---

## 📁 Project Structure
# 🚀 Unified Monitoring Dashboard (VMs & Containers Simulation)

## 📌 Overview
This project is a real-time monitoring dashboard that simulates multiple systems (Virtual Machines and Containers). It tracks system performance metrics, generates alerts, and visualizes trends over time.

---

## 🎯 Features

### 🖥️ System Simulation
- Simulates multiple systems (VMs and Containers)
- Dynamic generation of system data

### 📊 Performance Monitoring
- Tracks:
  - CPU usage (%)
  - Memory usage (%)
  - Disk usage (%)

### ⚡ Real-Time Updates
- Uses WebSocket for live data streaming
- Instant updates without page refresh

### ❤️ Health Scoring
- Calculates system health based on:
  - CPU (40%)
  - Memory (30%)
  - Disk (30%)
- Status categories:
  - 🟢 Healthy
  - 🟡 Warning
  - 🔴 Critical

### 🚨 Alerts System
- Generates alerts based on thresholds:
  - CPU > 85% → High
  - Memory > 75% → Medium
  - Disk > 90% → Critical
- Displays alerts in real-time

### 📈 Trend Visualization
- Stores historical data
- Displays CPU trends using charts

### 📄 Export Report (PDF)
- Generates downloadable system report
- Includes system metrics and health status

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts (Charts)
- WebSocket (real-time)

### Backend
- Node.js
- Express
- WebSocket (ws)

---

## 📁 Project Structure
monitoring-dashboard/
│
├── backend/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── components/
│ │ ├── utils/exportPDF.js
│ │ └── styles/
│ ├── package.json
│ └── index.html
│
└── README.md


---

## 🚀 Installation & Setup

### 1️⃣ Backend Setup
```bash
cd backend
npm install
node server.js

2️⃣Frontend Setup
cd frontend
npm install
npm run dev

🔄 How It Works
Backend simulates system metrics
WebSocket sends live data to frontend
Frontend updates dashboard in real-time
Alerts and health scores are calculated dynamically
Users can export system reports as PDF

🔮 Future Improvements
Integration with real cloud monitoring APIs
Authentication system
Historical data storage (database)
Advanced analytics dashboard