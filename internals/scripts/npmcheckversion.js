const exec = require('child_process').exec;

exec('npm -v', function (err, stdout) {
  if (err) {
    throw err;
  }

  if (parseFloat(stdout) < 4) {
    throw new Error('[ERROR: Problemate] You need npm version @>=4');
  }
});
