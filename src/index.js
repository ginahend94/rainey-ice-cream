import Header from './elements/header.js';
import './normalize.css';
import './style.css';
import home from './tabs/home.js';
import menu from './tabs/menu.js';
import about from './tabs/about.js';
import order from './tabs/order.js';
import locations from './tabs/locations.js';

const page = () => {

    const main = document.createElement('main');
    main.appendChild(home());

    const switchTab = e => {
        const button = e.target;
        Header.navButtons.forEach(a => a.classList.remove('active'));
        button.classList.add('active');
        main.innerHTML = '';
        let activeTab;
        switch (button.dataset.target) {
            case 'home':
                activeTab = home();
                break;
            case 'menu':
                activeTab = menu();
                break;
            case 'about':
                activeTab = about();
                break;
            case 'order':
                activeTab = order();
                break;
            case 'locations':
                activeTab = locations();
                break;
            default:
                activeTab = home();
                break;
        }
        main.appendChild(activeTab);
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.appendChild(Header.header);
    Header.navButtons.forEach(button => {
        button.addEventListener('click', switchTab)
    })

    wrapper.appendChild(main);

    return wrapper;
}

document.body.appendChild(page());
