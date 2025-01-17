const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process');

let mainWindow;

// Function to create the Electron window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Make sure React app is built before loading it
  mainWindow.loadURL('http://localhost:3000'); // React frontend URL if running in development mode
  // Or, load production build
  // mainWindow.loadFile(path.join(__dirname, 'frontend', 'build', 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Start the Node.js backend server
exec('node backend/server.js', (err, stdout, stderr) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log('Backend server started:', stdout);
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
