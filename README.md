# 🧑‍💻 Real-time Collaborative Code Editor

A real-time collaborative code editor built with **Node.js**, **Socket.IO**, and **Monaco Editor**. Users can write code live together with multiple language support, dark/light mode, and more.

🌐 **Frontend (Vercel)**: [https://real-time-collaborative-editor.vercel.app](https://real-time-collaborative-editor.vercel.app)  
🔌 **Backend (Render)**: [https://real-time-collaborative-editor-rmi1.onrender.com](https://real-time-collaborative-editor-rmi1.onrender.com)

---

## ✨ Features

- 🔄 Real-time code syncing using **Socket.IO**
- 🧠 **Monaco Editor** (VS Code-like experience in browser)
- 🌗 Theme toggle — Dark / Light
- 🌍 Language selector (JavaScript)
- 👥 See who is connected in real-time
- ✍️ Typing indicator when someone is writing
- 💾 Save code (localStorage-based for now)
- 🚀 Deployment on **Vercel** + **Render**


---

## 🔧 Tech Stack

| Tool            | Use                                |
|-----------------|-------------------------------------|
| Node.js         | Backend runtime                     |
| Express         | Server framework                    |
| Socket.IO       | Real-time communication             |
| Monaco Editor   | In-browser code editor              |
| HTML/CSS/JS     | Basic frontend                      |
| Vercel          | Frontend deployment                 |
| Render          | Backend deployment                  |

---

## 🚀 Run Locally

### 🛠️ Prerequisites

- Node.js (v14 or above)
- Internet connection (for Monaco CDN)

### 📦 Installation

```bash
git clone https://github.com/123-Amir/Real-time-Collaborative-Editor.git
cd Real-time-Collaborative-Editor
npm install
node server.js
Open in browser at: http://localhost:3000
