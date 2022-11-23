//refer to: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
let get_pos = (pos) => {
    let coordinates = pos.coords;
    console.log(`accuracy: ${coordinates.accuracy} \nlattitude: ${coordinates.latitude} \nlongitude: ${coordinates.longitude}`)
}
//on load window, get coordinates
// window.addEventListener('load', () => {
//     navigator.geolocation.getCurrentPosition(get_pos);
// });

