import Header from './elements/header.js';
import './normalize.css';
import './style.css';
import home from './tabs/home.js';
import menu from './tabs/menu.js';
import about from './tabs/about.js';
import order from './tabs/order.js';
import locations from './tabs/locations.js';
import Footer from './elements/footer.js';

const page = () => {

    const footer = Footer();
    let main = home();

    const switchTab = e => {
        const button = e.target;
        Header.navButtons.forEach(a => a.classList.remove('active'));
        button.classList.add('active');
        wrapper.removeChild(main);
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
            case 'order':
                main = order();
                break;
            case 'locations':
                main = locations();
                break;
            default:
                main = home();
                break;
        }
        wrapper.insertBefore(main, footer)
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.appendChild(Header.header);
    Header.navButtons.forEach(button => {
        button.addEventListener('click', switchTab)
    })

    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    return wrapper;
}

document.body.appendChild(page());
