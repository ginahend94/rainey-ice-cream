import header from '../elements/header.js';
import home from '../tabs/home.js';
import menu from '../tabs/menu.js';
import about from '../tabs/about.js';
import raineyDays from '../tabs/rainey days.js';
import locations from '../tabs/locations.js';

export default function selectTab(e, path) {
    header.navButtons.forEach(a => a.classList.remove('active'));
    if (e.type == 'click') {
        e.target.classList.add('active');
    } else {
        if (path) header.navButtons.find(a => a.dataset.target == path.replace('-', ' ')).classList.add('active');
        else header.navButtons.find(a => a.dataset.target == '').classList.add('active')
    }
    let main;
    switch (path) {
        case undefined:
        case 'home':
            main = home();
            break;
        case 'menu':
            main = menu();
            break;
        case 'about':
            main = about();
            break;
        case 'rainey-days':
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
    // omg this is so hack T.T
    if (!history.state && history.state !== '' || history.state.page != path.replace(' ', '-')) {
        history.pushState({page:`${path.replace(' ', '-')}`}, '', `${path.replace(' ', '-')}`);
    }
    document.title = `${() => { path.charAt(0).toUpperCase() + path.slice(1) }
} | Rainey Ice Cream`;
    return main;
}