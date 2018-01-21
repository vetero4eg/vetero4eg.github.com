module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./dev/_pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./dev/_data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./dev/_data/content.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./dev/'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('html:copy', ()=>  {
        return $.gulp.src('./dev/*.html')
          .pipe($.gulp.dest('./build'))
    });
};
