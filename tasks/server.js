"use strict";

const gulp        = require("gulp");
const webserver   = require("gulp-webserver");

gulp.task("server.up", function () { 
  return gulp.src('.')
    .pipe(webserver({
      open: '/#!/contacts'
    }));
});

gulp.task("server.dev", function () {
  return gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: '/#!/main'
    }));
});
