let gulpConfig = require('../../gulp/gulpConfig.js');

let tasks = require('@ima/gulp-task-loader')([
	'../../gulp/tasks'
], gulpConfig);

module.exports = tasks;
