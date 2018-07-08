import { Application } from './Application.js';

var app = new Application

app.init();
app.start();

process.on('SIGINT', function() {
    app.stop()
});
