// backend/socket.js

function socketHandler(io) {
    io.on('connection', (socket) => {
        console.log('👤 User connected: ' + socket.id);

        // Jab user kuch likhe
        socket.on('text-change', (data) => {
            // Sab dusre users ko bhejo
            socket.broadcast.emit('text-change', data);
        });

        socket.on('disconnect', () => {
            console.log('❌ User disconnected: ' + socket.id);
        });
    });
}

module.exports = socketHandler;
