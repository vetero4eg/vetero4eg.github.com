module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/**/*.sass', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch(['./dev/js/main.js'], $.gulp.series('js:dev'));
    });
};
