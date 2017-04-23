const exec = require('child_process').exec;
exec('npm -v', function (err, stdout, stderr) {
  if (err) throw err;
  if (parseFloat(stdout) < 4) {
    throw new Error('[ERROR: React Boilerplate] You need npm version @>=4');
    process.exit(1);
  }
});
