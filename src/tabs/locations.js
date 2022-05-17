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
    wrapper.classList.add('locations-wrapper');
    wrapper.classList.add('page-wrapper');

    const header = document.createElement('header');
    wrapper.appendChild(header);
    const h2 = document.createElement('h2');
    header.appendChild(h2);
    h2.textContent = 'Locations';


    const locationsContainer = document.createElement('div');
    wrapper.appendChild(locationsContainer);
    locationsContainer.classList.add('locations-container');

    // const sidebar = document.createElement('div');
    // sidebar.classList.add('sidebar');
    // locationsContainer.appendChild(sidebar);
    // const heading = document.createElement('div');
    // heading.classList.add('heading');
    // sidebar.appendChild(heading);
    // const h3 = document.createElement('h3');
    // heading.appendChild(h3);
    // h3.textContent = 'Our locations';
    // const listings = document.createElement('div');
    // listings.id = 'listings';
    // listings.classList.add('listings');
    // sidebar.appendChild(listings);

    const iframe = document.createElement('iframe');
    locationsContainer.appendChild(iframe);
    iframe.src = './map.html';

    // const map = document.createElement('div');
    // map.id = 'map';
    // map.classList.add('map');

    return wrapper;
}