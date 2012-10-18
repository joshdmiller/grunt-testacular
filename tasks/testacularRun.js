
module.exports = function(grunt) {
  var runner, _;
  runner = require('testacular').runner;
  _ = grunt.utils._;
  return grunt.registerMultiTask('testacularRun', 'Run tests on a testacular server. ', function() {
    var done;
    done = this.async();
    grunt.log.ok(JSON.stringify(this.data));
    return runner.run(this.data, function(exitCode) {
      if (exitCode > 1) {
        return done(false);
      }
    });
  });
};
