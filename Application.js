'use strict';
export class Application {

    constructor() {
        // expressjs framework
        this.express = require('express');
        // path module for working with filenames and directories
        this.path = require('path');
        // js utility module
        this._ = require('lodash');
        // body-parser middleware for parsing incoming http requests
        this.bodyparser = require('body-parser');
        // cookie-parser middleware for parsing and populating cookie headers
        this.cookieparser = require('cookie-parser');
        // http request logger middleware for node.js
        this.logger = require('morgan');

        this.app = this.express();

        console.log("Application constructed");
    }

    start() {
        var port = process.env.PORT || 8080;
        this.app.listen(port,
            function() {
                console.log("Server started in port " + port);
            }).on('close', function () {
                console.log("Server Shutdown");
            });
    }

    stop() {
        this.app.close();
    }
}
