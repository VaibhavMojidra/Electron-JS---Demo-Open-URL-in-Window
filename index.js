const { app, BrowserWindow } = require('electron')

let browserWindow

const createWindow = () => {
    browserWindow = new BrowserWindow({
        width: 540,
        height: 960,
        title: "My Website"
    })
    browserWindow.loadURL('https://vaibhavmojidra.github.io/site/')
}

app.on('ready', createWindow)