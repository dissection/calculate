var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    return gulp.src("./calculate.js")
        .pipe(rename({basename: "calculate",suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});