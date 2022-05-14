import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2luYWhlbmQ5NCIsImEiOiJjbDM1a2psejAwYzh4M2RydGRvMTdicGJmIn0.iN5rhHKogdfcg9PxS-PmPw';

// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });

export default () => {
    const wrapper = document.createElement('main');
    const header = document.createElement('header');
    wrapper.appendChild(header);
    const h2 = document.createElement('h2');
    header.appendChild(h2);
    h2.textContent = 'Locations';

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    wrapper.appendChild(sidebar);
    sidebar.innerHTML = `<div class="heading">
        <h3>Our locations</h3>
    </div>`;
    const listings = document.createElement('div');
    listings.id = 'listings';
    listings.classList.add('listings');
    sidebar.appendChild(listings);

    const map = document.createElement('div');
    map.id = 'map';
    map.classList.add('map');

    return wrapper;
}