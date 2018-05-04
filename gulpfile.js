var gulp=require("gulp");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var minifyCSS=require("gulp-minify-css");
var imagemin=require("gulp-imagemin");
gulp.task("scripts",function () {
    var srcArr=[];
    srcArr.push("./js/lib/jquery.js");
    srcArr.push("./js/lib/jquery-ui.min.js");
    srcArr.push("./js/lib/jquery.fullPage.js");
    // srcArr.push("./js/lib/echarts-all-3.js");
    // srcArr.push("./js/lib/china.js");
    srcArr.push("./js/lib/chalk.js");
    srcArr.push("./js/H5ComponentBase.js");
    srcArr.push("./js/H5.js");
    srcArr.push("./js/H5ComponentPoint.js");
    srcArr.push("./js/H5ComponentFlag.js");
    srcArr.push("./js/H5ComponentCatalog.js");
    srcArr.push("./js/index.js");
    gulp.src(srcArr)
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./dist/js"))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
})
gulp.task("css",function () {
    gulp.src(["./css/H5.css","./css/H5ComponentPoint.css"])
        .pipe(concat("all.css"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(rename("all.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist/css"))
})
gulp.task("img",function () {
    gulp.src(["./img/bg1.png","./img/page_caption_bg.png"])
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img"))
})
gulp.task("watch",function () {
    gulp.watch('./js/*.js',['scripts']);
    gulp.watch('./css/*.css',['css']);
})
gulp.task("default",["scripts","css",'img']);