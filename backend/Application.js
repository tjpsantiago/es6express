'use strict';
// expressjs framework
import express from 'express';
// js utility module
import _ from 'lodash';
// path module for working with filenames and directories
import path from 'path';
// http request logger middleware for node.js
import logger from 'morgan';
// body-parser middleware for parsing incoming http requests
import bodyparser from 'body-parser';
// cookie-parser middleware for parsing and populating cookie headers
import cookieparser from 'cookie-parser';

export class Application {

    constructor() {

        console.log("Application constructed");
    }

    init() {
        this.app = express();

        this.app.use(logger('dev'));
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended:true}));

        this.app.use(cookieparser());

        // set application's 'views' root folder
        this.app.set('views', path.join(__dirname, '../../frontend/views'));
        // set view engine for the application
        this.app.set('view engine', 'jade');

        // middleware function to render jade files to html files
        this.app.use(function (req, res, next) {
            if (req.url.endsWith('.html')) {
                res.render(
                    path.join.apply(
                        path,
                        _.rest(
                            req.url.replace(/\.html$/, ".jade").split("/")
                        )
                    )
                );
            } else {
                next();
            }
        });

        this.app.get('/', function(req, res) {
            res.render('home/index', {title : "Express JS on ES6"});
        });

        this.app.get('/login', function(req, res) {
            res.render('login/index', {title : "Express JS Login"});
        });

        this.app.post('/login/:username/:password', function(req, res) {
            console.log("username ")
        });

        this.app.use(function(req, res, next) {
            let err = new Error('Not Found');
            err.status = 404;
            next(err);
        })

        // error handlers
        if (this.app.get('env') === 'development') {
            // development code will print stack traces
            this.app.use(function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message : err.message,
                    error : err
                });
            });
        } else {
            // production code error handler
            // no stacktraces leaked to users
            this.app.use(function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message : err.message,
                    error : {}
                });
            });
        }
    }

    start() {
        let port = process.env.PORT || 8080;
        this.server = this.app.listen(port,
            function() {
                console.log("Server started in port " + port);
            }).on('close', function() {
                console.log("Server Shutdown.");
            });
    }

    stop() {
        this.server.close();
    }
}
