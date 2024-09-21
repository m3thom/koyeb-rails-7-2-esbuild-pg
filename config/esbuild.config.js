const path = require('path');

const define = {};
for (const k in process.env) {
    define[`${k}`] = JSON.stringify(process.env[k])
}

require("esbuild").context({
    entryPoints: [
        // Instead of "app/assets/javascripts/application.js",
        // We use wildcard here to watch all files
        "app/assets/javascripts/*.*",
        // Instead of "app/javascript/application.js",
        // We use wildcard here to watch all files
        "app/javascript/*.*",
    ],
    bundle: true,
    sourcemap: true,
    format: 'esm',
    publicPath: '/assets',
    outdir: path.join(process.cwd(), "app/assets/builds"),
    define
}).then(context => {
    if (process.argv.includes("--watch")) {
        // Enable watch mode
        context.watch()
    } else {
        // Build once and exit if not in watch mode
        context.rebuild().then(result => {
            context.dispose()
        })
    }
}).catch(() => process.exit(1));