module.exports = function() {

    $.gulp.task('img', () => {
        return $.gulp.src('./dev/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('__APIKey__'))
            .pipe($.gulp.dest('./build/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/img/symbol/sprite.svg')
            .pipe($.gulp.dest('./build/img/symbol/'));
    });

};
