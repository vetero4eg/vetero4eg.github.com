module.exports = function() {

  let libs = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/svg4everybody/dist/svg4everybody.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    //'./dev/libs/**/*.js'
  ];

    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(libs)
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./dev/js/'));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(libs)
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/js/'));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src(['./dev/js/main.js'])
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/js/main.js'])
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/js/'));
    });
};
