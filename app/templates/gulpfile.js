var gulp=require('gulp');
var mocha=require('gulp-mocha');
var jshint=require('gulp-jshint');

var onError=function(err){
	console.log(err.toString());
	this.emit('end');
}

//Leaving this task commented out until install fix
gulp.task('default',function(){
	return gulp.src(['./server/**/*.js','./test/**/*.js'])
	.pipe(jshint().on('error',onError))
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'))
});

gulp.task('mocha',function(){
	return gulp.src(['./test/*.js'])
	.pipe(mocha({reporter:'nyan'}).on('error',onError));
})

var mochaWatcher=gulp.watch(['./server/**/*.js','./test/*.js'],['default','mocha']);
