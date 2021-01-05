const { ipcRenderer, remote, shell } = require('electron');
const { dialog } = remote;
const setApplicationMenu = require('./menu');

const form = document.querySelector('form');

const inputs = {
    source: form.querySelector('input[name="source"]'),
    destination: form.querySelector('input[name="destination"]'),
    name: form.querySelector('input[name="name"]'),
    fps: form.querySelector('input[name="fps"]'),
};
