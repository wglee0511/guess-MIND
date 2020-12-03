import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from  "gulp-csso";
import del from "del";
import bro from "gulp-browserify";
import babel from "babelify";

const path = {
    style : {
        src : "assets/scss/styles.scss",
        dest : "src/static/styles",
        watch : "assets/scss/**/*.scss"
    },
    js : {
        src : "assets/js/main.js",
        dest : "src/static/js",
        watch : "assets/js/**/*.js"
    }
}

const clean = () => del("src/static");

const styles = () => gulp.src(path.style.src)
.pipe(sass())
.pipe(autoprefixer({
    cascade: false
}))
.pipe(minifyCSS())
.pipe(gulp.dest(path.style.dest));


const js = () => gulp.src(path.js.src)
.pipe(bro({
    transform : [
        babel.configure({
        presets: ["@babel/preset-env"]
      })
    ]
}))
.pipe(gulp.dest(path.js.dest));


const watchFiles = () => {
    gulp.watch(path.style.watch, styles),
    gulp.watch(path.js.watch, js)
};

const dev = gulp.series(clean, styles, js, watchFiles)

export const build = gulp.series(clean, styles, js);

export default dev;