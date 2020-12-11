const {BrowserWindow,app, remote} = require('electron')

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
    swal.fire({
        html: '<h1>Hello<b> world</b></h1>'
    })
}