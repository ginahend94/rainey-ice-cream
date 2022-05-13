import Header from './elements/header.js';
import './normalize.css';
import './style.css';
import selectTab from './functions/selectTab.js';
import home from './tabs/home.js';
import Footer from './elements/footer.js';
import menu from './tabs/menu.js'; //TEST

const page = () => {

    const footer = Footer();
    let main = home();
    // let main = menu(); //TEST

    const switchTab = e => {
        wrapper.removeChild(main);
        main = selectTab(e);
        wrapper.insertBefore(main, footer);
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    wrapper.appendChild(Header.header);
    Header.navButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    return wrapper;
}

document.body.appendChild(page());