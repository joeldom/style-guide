var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var browserSync = require("browser-sync");
var useref = require("gulp-useref");
var beautify = require("gulp-beautify");
var prettify = require("gulp-prettify");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var swig = require("gulp-swig");
var del = require("del");
var runSequence = require("run-sequence");

//THIS NEEDS ADJUSTED
//var config = require('./config.json');

// Basic Gulp task syntax
gulp.task("hello", function() {
  console.log(
    "//////////////////////////////////////////////////////////   Started"
  );
});
gulp.task("bye", function() {
  console.log(
    "//////////////////////////////////////////////////////////   Finished"
  );
});

// Development Tasks
// -----------------

// Start browserSync server
gulp.task("browserSync", function() {
  browserSync({
    server: {
      //baseDir: "style-guide",
      baseDir: "./",
      directory: true,
      index: "index.html"
    }
  });
});

//Run SASS preprocess
gulp.task("sass", function() {
  //return gulp.src('style-guide/sass/**/*.scss') // Gets all files ending with .scss in style-guide/scss and children dirs
  return (
    gulp
      //.src("style-guide/sass/global.scss") // Gets specific file
      .src("./sass/global.scss") // Gets specific file
      // .pipe(sourcemaps.init())
      // .pipe(sourcemaps.write("."))
      .pipe(sass().on("error", sass.logError)) // Passes it through a gulp-sass, log errors to console
      .pipe(gulp.dest("./css")) // Outputs it in the css folder
      .pipe(
        browserSync.reload({
          // Reloading with Browser Sync
          stream: true
        })
      )
  );
});

gulp.task("prettify", function() {
  gulp
    .src("style-guide/**/*.html")
    .pipe(prettify({ indent_size: 2 }))
    .pipe(gulp.dest("dist"));
});

// Watchers
gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
  gulp.watch("./*.html", browserSync.reload);
  gulp.watch("./pages/**/*.html", browserSync.reload);
  gulp.watch("./js/**/*.js", browserSync.reload);
});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task("useref", function() {
  return gulp
    .src("./*.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("dist"));
});

// Optimizing Images
gulp.task("images", function() {
  return (
    gulp
      .src("style-guide/images/**/*.+(png|jpg|jpeg|gif|svg)")
      // Caching images that ran through imagemin
      .pipe(
        cache(
          imagemin({
            interlaced: true
          })
        )
      )
      .pipe(gulp.dest("dist/images"))
  );
});

// Copying fonts
gulp.task("fonts", function() {
  return gulp.src("style-guide/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

// Cleaning
gulp.task("clean", function() {
  return del.sync("dist").then(function(cb) {
    return cache.clearAll(cb);
  });
});

gulp.task("clean:dist", function() {
  return del.sync(["dist/**/*", "!dist/images", "!dist/images/**/*"]);
});

// Build Sequences
// ---------------

// run gulp
gulp.task("default", function(callback) {
  runSequence(
    ["hello", "sass", "prettify", "browserSync", "bye"],
    "watch",
    callback
  );
});

// run build
gulp.task("build", function(callback) {
  runSequence(
    "hello",
    "clean:dist",
    "prettify",
    "sass",
    //'compile',
    ["useref", "images", "fonts"],
    "browserSync",
    "bye",
    callback
  );
});

gulp.task("dev", function(callback) {
  runSequence(
    ["hello", "clean:dist", "prettify", "sass", "browserSync", "bye"],
    "watch",
    callback
  );
});
