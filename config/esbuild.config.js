const path = require('path');

const define = {};
for (const k in process.env) {
    define[`${k}`] = JSON.stringify(process.env[k])
}

require("esbuild").context({
    // Formerly:
    // entryPoints: [
    //     "app/assets/javascripts/application.js",
    //     "app/javascript/application.js",
    //     "vendor/engines/cyblorgh/app/assets/javascripts/cyblorgh/application.js",
    // ],
    entryPoints: {
        // "outdir (without file extension)": "infile (with file extension)"
        "assets/javascripts/application": "app/assets/javascripts/application.js",
        "javascript/application": "app/javascript/application.js",
        "cyblorgh/assets/javascripts/cyblorgh/application": "vendor/engines/cyblorgh/app/assets/javascripts/cyblorgh/application.js",
    },
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