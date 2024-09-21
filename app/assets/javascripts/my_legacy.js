$(initMyLegacy)

window.initMyLegacy = initMyLegacy

export function initMyLegacy() {
    console.log('initMyLegacy')
    $('.my-legacy-btn').on('click', function () {
        console.log('Hello from LEGACY')
    })
}