/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

module.exports = function ( grunt ) {
    grunt.initConfig({
        init: {},
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: [ '*.scss' ],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );

    grunt.registerTask( 'default', [ 'watch' ] );
};
