const config = require('../../../test/jasmine')

module.exports = {
    ...config,
    spec_files: [
        "test/src/**/*.ts",
        "test/src/**/*.js",
        "test/src/**/*.tsx",
        "test/src/**/*.jsx",
        'src/playroomTest/test/src/**/*.ts',
        'src/playroomTest/test/src/**/*.js',
        'src/playroomTest/test/src/**/*.tsx',
        'src/playroomTest/test/src/**/*.jsx',
    ],
}
