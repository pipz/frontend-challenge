"use strict";

const gulp        = require("gulp");
const server      = require("./tasks/server");

/*
** @name: dev
** @description: build used for development
*/
gulp.task("server", gulp.series(
  server.up
));
