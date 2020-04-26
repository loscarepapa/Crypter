const { src, dest, watch } = require('gulp');
var stylus = require('gulp-stylus');

function html(){
    return src('src/*.html')
        .pipe(dest('public/'));
}

function css(){
    return src('styles/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(dest('public/styles'));
}

exports.default = function() {
    watch('src/*.html', html);
    // Or a composed task
    watch('styles/*.styl', css);
}