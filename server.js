// const WebSocket = require('ws');

// module.exports = (server) => {
//   const wss = new WebSocket.Server({ server });

//   wss.on('connection', (ws) => {
//     console.log('Client connected');
//     ws.send('Welcome to the WebSocket server');

//     // Send a message to the client every 3 seconds
//     const interval = setInterval(() => {
//       if (ws.readyState === WebSocket.OPEN) {
//         ws.send(new Date().toTimeString());
//       }
//     }, 3000);

//     ws.on('close', () => {
//       console.log('Client disconnected');
//       clearInterval(interval);
//     });
//   });
// };
