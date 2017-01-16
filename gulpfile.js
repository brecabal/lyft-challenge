var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

gulp.task('script' , function(){
  gulp.src('public/src/js/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));

});

gulp.task('style' , function(){
  gulp.src(['public/src/sass/main.scss', 'public/src/css/*.css'])
    .pipe(sass().on('error' , sass.logError))
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css/'));
    
});

gulp.task('webserver', function() {
  gulp.src('public/')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default' , ['script','style' , 'webserver']);