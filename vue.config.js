module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/testTaskMEDODS/'
        : '/',
    assetsDir: '',
    productionSourceMap: false,
    filenameHashing: true,
}
