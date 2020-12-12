const path = require('path')
const {app, BrowserWindow, webviewTag} = require('electron')

const debug = /--debug/.test(process.argv[2])

// if (process.mas) app.setName('Electron APIs')

let mainWindow = null


function initialize () {
  makeSingleInstance()

  function createWindow () {
    const windowOptions = {
      width: 600,
      // minWidth: 680,
      height: 400,
      resizable: false,
      frame: false,
      title: app.getName(),
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        webviewTag:true
      }
    }

    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))

    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }

  app.on('ready', () => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

function makeSingleInstance () {
  if (process.mas) return

  app.requestSingleInstanceLock()

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}


initialize()