import header from '../elements/header.js';
import home from '../tabs/home.js';
import menu from '../tabs/menu.js';
import about from '../tabs/about.js';
import raineyDays from '../tabs/rainey days.js';
import locations from '../tabs/locations.js';

export default function selectTab(e) {
    const button = e.target;
    let main;
    header.navButtons.forEach(a => a.classList.remove('active'));
    button.classList.add('active');
    switch (button.dataset.target) {
        case 'home':
            main = home();
            break;
        case 'menu':
            main = menu();
            break;
        case 'about':
            main = about();
            break;
        case 'rainey days':
            main = raineyDays();
            break;
        case 'locations':
            main = locations();
            break;
        default:
            main = home();
            break;
    }
    return main;
}