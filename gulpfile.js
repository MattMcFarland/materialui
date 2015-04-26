
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash').assign;

var options = {
  entries: ['./src/main.js'],
  debug: true
};

var watchOpts = assign({}, watchify.args, options);
var b = browserify(options);

gulp.task('bundle', bundle);
gulp.task('watch', watch);
gulp.task('default', greet);

function watch() {
  b = watchify(browserify(watchOpts));
  bundle();
}

function greet() {
  gutil.log('hello');
}

function bundle() {
  b.on('update', bundle);
  b.on('log', gutil.log);

  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./public/js'));
}


