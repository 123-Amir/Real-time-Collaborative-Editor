// backend/server.js

const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const socketHandler = require('./socket'); // 👈 Import kiya socket.js

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve frontend files
app.use(express.static(path.join(__dirname, '../public')));

// Use socket logic
socketHandler(io);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
