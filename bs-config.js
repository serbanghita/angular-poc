// http://www.browsersync.io/docs/options/
module.exports = {
    open: "local",
    localOnly: true,
    reloadDebounce: 2000,
    ui: false,
    files: [
        "dist",
        "./node_modules/angular/angular.js",
    ],
    serveStatic: [{
        route: "/js/angular",
        dir: "./node_modules/angular"
    }],
    watchEvents: [
        "change"
    ],
    watch: true,
    server: {
        baseDir: "dist",
        index: "index.html"
    },
    port: 3000,
    logLevel: "silent"
};