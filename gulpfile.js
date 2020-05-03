const { src, dest, watch } = require('gulp');
var stylus = require('gulp-stylus');

function html(){
    return src('src/*.html')
        .pipe(dest('public/'))
}

function css(){
    return src('styles/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(dest('public/styles/'))
}

function watchFiles(){
    watch('src/*.html', html);
    watch('styles/*.styl', css);
}
exports.html = html;
exports.css = css;
exports.default = function() {
    html();
    css();
    watchFiles();
}