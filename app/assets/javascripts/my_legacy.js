$(initMyLegacy)

window.initMyLegacy = initMyLegacy

export function initMyLegacy() {
    console.log('test')
    $('.my-legacy-btn').on('click', function () {
        console.log('Hello from LEGACY')
    })
}