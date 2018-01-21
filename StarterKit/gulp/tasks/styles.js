module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./dev/_base/main.sass')
            .pipe($.gp.bulkSass())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 5 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/css/'))
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/_base/main.sass')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.bulkSass())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'SASS',
                    message: error.message
                };
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 5 version']
            }))
            .pipe($.gulp.dest('./dev/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
