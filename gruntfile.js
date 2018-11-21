module.exports = function (grunt) {
	grunt.initConfig({
		copy: {
			srcToSamples: {
				files: [
					{
						expand: true,
						cwd: './src',
						src: ['**'],
						dest: '../../sandbox/integration/vuejs-cdn'
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default', ['copy:srcToSamples']);
}