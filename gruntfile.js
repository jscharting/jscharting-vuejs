module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				files: {
					'dist/scripts/main.js': ['src/scripts/*.js']
				}
			}
		},
		copy: {
			html: {
				files: [
					{
						expand: true,
						cwd: './src',
						src: ['index.html'],
						dest: './dist'
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask(
		'default',
		[
			'browserify:dist',
			'copy:html'
		]);
}