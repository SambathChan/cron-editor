// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const base = require('../../karma.conf.js');

module.exports = function (config) {
  base(config);
  config.set({
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/cron-editor'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    }
  });
};
