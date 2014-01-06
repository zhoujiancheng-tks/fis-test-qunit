/*
 * qunit test  
 * http://fis.baidu.com/
 * @author jason.zhou
 */

'use strict';
var grunt = require('grunt'),
    flag = 1,
    gconf = {},
    projectRoot = process.cwd(),
    task = grunt.task;

// 覆盖grunt.task.init方法, 去掉的gruntfile文件
grunt.task.init = function(tasks, options) {
  if (!options) { options = {}; }

  // Were only init tasks specified?
  var allInit = tasks.length > 0 && tasks.every(function(name) {
    var obj = task._taskPlusArgs(name).task;
    return obj && obj.init;
  });

  // Get any local Gruntfile or tasks that might exist. Use --gruntfile override
  // if specified, otherwise search the current directory or any parent.
  
  var gruntfile = allInit ? null : grunt.option('gruntfile') ||
    grunt.file.findup('Gruntfile.{js,coffee}', {nocase: true});

  var msg = 'Reading "' + (gruntfile ? path.basename(gruntfile) : '???') + '" Gruntfile...';
  /*if (gruntfile && grunt.file.exists(gruntfile)) {
    grunt.verbose.writeln().write(msg).ok();
    // Change working directory so that all paths are relative to the
    // Gruntfile's location (or the --base option, if specified).
    process.chdir(grunt.option('base') || path.dirname(gruntfile));
    // Load local tasks, if the file exists.
    loadTasksMessage('Gruntfile');
    loadTask(gruntfile);
  } else if (options.help || allInit) {
    // Don't complain about missing Gruntfile.
  } else if (grunt.option('gruntfile')) {
    // If --config override was specified and it doesn't exist, complain.
    grunt.log.writeln().write(msg).error();
    grunt.fatal('Unable to find "' + gruntfile + '" Gruntfile.', grunt.fail.code.MISSING_GRUNTFILE);
  } else if (!grunt.option('help')) {
    grunt.verbose.writeln().write(msg).error();
    grunt.log.writelns(
      'A valid Gruntfile could not be found. Please see the getting ' +
      'started guide for more information on how to configure grunt: ' +
      'http://gruntjs.com/getting-started'
    );
    grunt.fatal('Unable to find Gruntfile.', grunt.fail.code.MISSING_GRUNTFILE);
  }
  */
  // Load all user-specified --npm tasks.
  (grunt.option('npm') || []).forEach(task.loadNpmTasks);
  // Load all user-specified --tasks.
  (grunt.option('tasks') || []).forEach(task.loadTasks);
};
// 设置当前目录为插件根目录
process.chdir(__dirname);
grunt.loadNpmTasks('grunt-contrib-qunit');
// 设置当前目录为项目根目录
process.chdir(projectRoot);
module.exports = function(content, file, conf){
    if (!flag) {
        return;
    }
    flag = 0;
    gconf = conf;
    delete gconf.filename;
    grunt.initConfig({
        projectRoot: projectRoot,
        qunit : conf
    });
    grunt.tasks('qunit');
};
