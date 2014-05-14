'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Generating Module ' + this.name + ' for you.');


    this.on('end',function(){
	    // Install Npm Packages
	    if(!this.options['skip-install']){
		    var npmdir=process.cwd()+'/server/modules/'+this.name;
		    console.log(npmdir);
		    process.chdir(npmdir);

		    this.installDependencies({bower:false,npm:true});

		    console.log('Navigate to this modules directory and rrn "npm test" to test out this module');
	    }
    })
  },

  files: function () { 
	  var spath='server/modules/'+this.name;
	  this.mkdir(spath);
	  this.template('index.js',spath+'/index.js');
	  this.mkdir(spath+'/test/');
	  this.template('test/mocha.opts',spath+'/test/mocha.opts');
	  this.template('test/spec.js',spath+'/test/'+this.name+'Spec.js');
	  this.template('package.json',spath+'/package.json');
	  this.template('README.md',spath+'/README.md');
  }
});

module.exports = ModuleGenerator;
