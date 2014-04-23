'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Generating Module ' + this.name + ' for you.');
  },

  files: function () { 
	  var spath='server/modules/'+this.name;
	  this.mkdir(spath);
	  this.template('index.js',spath+'/index.js');
	  this.directory('test',spath+'/test/');
  }
});

module.exports = ModuleGenerator;
