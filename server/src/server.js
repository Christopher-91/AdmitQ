import app from './app.js';
import config from './config/index.js';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║                                                   ║
║     🎓 AdmitQ API Server                         ║
║     Environment: ${config.env.padEnd(32)}║
║     Port: ${String(PORT).padEnd(39)}║
║     API: http://localhost:${PORT}/api${' '.repeat(15)}║
║     Health: http://localhost:${PORT}/health${' '.repeat(12)}║
║                                                   ║
╚═══════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\\nSIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\\nSIGINT received. Shutting down...');
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
