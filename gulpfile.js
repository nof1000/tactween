const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('default', function() {
    return gulp.src('./src/tactween.js')
        .pipe(gulp.dest('./dist'))
        .pipe(rename('./tactween.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.watch('./src/*.js', function(event) {
    gulp.run('default');
});
