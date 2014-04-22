'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the module subgenerator with the argument ' + this.name + '.');
  },

  files: function () { 
	  var spath='server/modules/'+this.name;
	  this.mkdir(spath);
	  this.template('index.js',spath+'/index.js')
    

  }
});

module.exports = ModuleGenerator;
