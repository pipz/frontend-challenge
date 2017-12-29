"use strict";

const gulp        = require("gulp");
const server      = require("./tasks/server");

/*
** @name: dev
** @description: task used for development
*/
gulp.task("server", gulp.series(
  server.up
));
