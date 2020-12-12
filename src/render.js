const {app, remote} = require('electron');
const {PythonShell} =  require("python-shell");
const {path} = require("path");
const { BrowserWindow } = require('electron').remote

function clWin(){
    var window = remote.getCurrentWindow();
    window.close()
}

document.getElementById('pp').innerText = 'PyTron';

function minWin(){
    var window = remote.getCurrentWindow();
    window.minimize()
}

function cWin(){
    // var window = remote.getCurrentWindow();
    // window.isMaximized() ? window.unmaximize() : window.maximize()
}

function getData() {
    var msg = new PythonShell('gd.py')
    msg.on('message', function(message){
        const win = new BrowserWindow({minHeight:300,height:300, maxHeight:600, minWidth: 620, width:620,maxWidth:621, title: 'Current Data',autoHideMenuBar:true, webPreferences: {nodeIntegration: true}})
        win.loadFile('a.html')
        
    })
}

function inpData(name,age,email) {
        const win = new BrowserWindow({height:400, width: 500, title: 'Input Data',autoHideMenuBar:true, webPreferences:{nodeIntegration: true, enableRemoteModule:true}})
        win.loadFile('src/inp.html')
}