const gulp = require('gulp');
const pug  = require('gulp-pug-3');
const sass = require('gulp-sass');

gulp.task('pug', function(){
    return gulp.src('src/pug/*.pug')
            .pipe(pug())
            .pipe(gulp.dest('public'));
}); 

gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('public/sass'));
}); 

gulp.task('default', function(){
    gulp.watch('src/pug/*', gulp.series('pug'));
    gulp.watch('src/sass/*', gulp.series('sass'));
    return
});