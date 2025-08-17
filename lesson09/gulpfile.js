const gulp = require('gulp');
const  sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compile SCSS into CSS
function style() {
    return gulp.src('scss/style.scss') // 1. main scss file
    .pipe(sass().on('error', sass.logError)) // 2. compile scss to css & log error
    .pipe(gulp.dest('css')) // 3. save output css to css folder
    .pipe(browserSync.stream()); // 4. stream changes to browserSync
}

// Serve files with browserSync and watch
function serve() {
    browserSync.init({
        server: {
            baseDir: './' // serve files from project root
        },
        port: 3000     // server runs at http://localhost:3000
    });
    gulp.watch('scss/**/*.scss', style); // watch all scss files
    gulp.watch('*html').on('change', browserSync.reload) // watch html files & reload browser on changes
}

// runs on npx gulp
exports.default = gulp.series(style, serve);

//summary 
//1. style : compile SCSS to Css + live inject CSS
//2. serve : run a dev server & watch files for live reload
//3. default : run both in sequence to automate workflow