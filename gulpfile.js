var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
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
      path.basename += '-thumbnail'
    }))
    .pipe(gulp.dest('dist/views/images/'));
});
tasks.push(PIZZA_THUMBNAIL_TASK);

gulp.task('optimize', tasks);
