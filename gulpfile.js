var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var minifyJS = require('gulp-minify');
var tasks = [];

var PIZZA_IMG_MIN_TASK = 'pizza_images_min';
gulp.task(PIZZA_IMG_MIN_TASK, function () {
  gulp.src('src/images/cam/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))

  gulp.src('src/images/pizzeria/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/views/images'))
});
tasks.push(PIZZA_IMG_MIN_TASK);

var PIZZA_THUMBNAIL_TASK = 'pizza_thumbnail';
gulp.task(PIZZA_THUMBNAIL_TASK, function () {
  gulp.src('src/images/pizzeria/pizzeria.jpg')
    .pipe(imageResize({
      width : 100,
      imageMagick: true
    }))
    .pipe(imagemin())
    .pipe(rename(function (path) {
      path.basename += '-thumbnail';
    }))
    .pipe(gulp.dest('dist/views/images/'));
});
tasks.push(PIZZA_THUMBNAIL_TASK);

var PIZZA_RESIZE_TASK = 'pizza_resize';
var sizes = [360, 720];
var taskName;
sizes.forEach(function (size) {
  taskName = PIZZA_THUMBNAIL_TASK + size;
  gulp.task(taskName, function () {
    gulp.src('src/images/pizzeria/pizzeria.jpg')
      .pipe(imageResize({
        width : size,
        imageMagick: true
      }))
      .pipe(imagemin())
      .pipe(rename(function (path) {
        path.basename += '-' + size;
      }))
      .pipe(gulp.dest('dist/views/images/'));
  });
  tasks.push(taskName);
});

var MINIFY_JS = 'minify_js';
gulp.task(MINIFY_JS, function () {
  gulp.src('src/js/main/*.js')
    .pipe(minifyJS({
        ext:{
            min:'-min.js'
        },
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('dist/js'))

  gulp.src('src/js/pizza/*.js')
    .pipe(minifyJS({
        ext:{
            min:'-min.js'
        },
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('dist/views/js'))
});
tasks.push(MINIFY_JS);

var MINIFY_CSS = 'minify_css';
gulp.task(MINIFY_CSS, function () {
  gulp.src('src/css/main/*.css')
    .pipe(
      cleanCSS({
        compatibility: 'ie8'}
      )
    )
    .pipe(rename(function (path) {
      path.basename += '-min';
    }))
    .pipe(gulp.dest('dist/css'));

  gulp.src('src/css/pizza/*.css')
    .pipe(
      cleanCSS({
        compatibility: 'ie8'}
      )
    )
    .pipe(rename(function (path) {
      path.basename += '-min';
    }))
    .pipe(gulp.dest('dist/views/css'));
});
tasks.push(MINIFY_CSS);


gulp.task('optimize', tasks);
