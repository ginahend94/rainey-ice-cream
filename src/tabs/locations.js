import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2luYWhlbmQ5NCIsImEiOiJjbDM1a2psejAwYzh4M2RydGRvMTdicGJmIn0.iN5rhHKogdfcg9PxS-PmPw';

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

    const iframe = document.createElement('iframe');
    locationsContainer.appendChild(iframe);
    iframe.src = './map.html';

    return wrapper;
}