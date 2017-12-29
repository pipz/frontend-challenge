"use strict";

const gulp        = require("gulp");
const webserver   = require("gulp-webserver");

function up() {
  return gulp.src('.')
    .pipe(webserver({
      open: '/#!/contacts'
    }));
}

function dev() {
  return gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: '/#!/main'
    }));
}

exports.up  = up;
exports.dev = dev;
