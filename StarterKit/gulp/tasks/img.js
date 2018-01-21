module.exports = function() {

    $.gulp.task('img', () => {
        return $.gulp.src('./dev/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('U4RTY4AqMEE1pTtnOpmD8nETPXrUmy3e'))
            .pipe($.gulp.dest('./build/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/img/symbol/sprite.svg')
            .pipe($.gulp.dest('./build/img/symbol/'));
    });

};
