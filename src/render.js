const {app, remote} = require('electron');
const {PythonShell} =  require("python-shell");

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
    const path = require("path");
    var p  = path.join(__dirname,'/../py')
    console.log(p)
    options={
        scriptPath: path.join(__dirname, '/../py'),
        args:[p]
    }
    var msg = new PythonShell('gd.py',options)
    msg.on('message', function(message){
        var p  = path.join(__dirname,'/../py/a.html')
        const win = new BrowserWindow({minHeight:300,height:300, maxHeight:600, minWidth: 620, width:620,maxWidth:621, title: 'Current Data',autoHideMenuBar:true, webPreferences: {nodeIntegration: true}})
        win.loadFile(p)
    })
}

function inpData(name,age,email) {
    const path = require("path");

        const win = new BrowserWindow({height:400, width: 500, title: 'Input Data',autoHideMenuBar:true, webPreferences:{nodeIntegration: true, enableRemoteModule:true}})
        var f  = path.join(__dirname,'/inp.html')
        win.loadFile(f)
}