'use strict';

const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

const app = 'myapp';

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    
    //this.log('Initializing...');
    this.createFolderStructure();
  }
  
  createFolderStructure() {
    var folders = [
      'src/build/' + app + '/controllers',
      'src/build/' + app + '/views',
      'src/build/' + app + '/styles',
      'src/build/' + app + '/images',
      'src/build/' + app + '/services'
    ];
    folders.forEach(function(folder) {
      mkdirp(folder);
    });
  }
  
  /*start() {
    this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Enter a name for the new component (i.e.: myNewComponent): '
      }
    ]).then( (answers) => {
      // create destination folder
      this.destinationRoot(answers.name);
    });
  }*/
};