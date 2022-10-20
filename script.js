/**
 * internal workings of weather app
 * @author Jester Zhou
 */
let value = document.getElementById('value');
let submit = document.getElementById('submit')

//refer to: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
let get_pos = (pos) => {
    let coordinates = pos.coords;
    console.log(`accuracy: ${coordinates.accuracy} \nlattitude: ${coordinates.latitude} \nlongitude: ${coordinates.longitude}`)
}
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(get_pos);
});
