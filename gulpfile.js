"use strict";

const gulp        = require("gulp");
const requireDir  = require("require-dir");

requireDir("./tasks");

/*
** @name: dev
** @description: task used for development
*/
gulp.task("server", ["server.up"]);