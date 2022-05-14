import Header from './elements/header.js';
import './normalize.css';
import './style.css';
import selectTab from './functions/selectTab.js';
import home from './tabs/home.js';
import Footer from './elements/footer.js';
import locations from './tabs/locations'; //TEST

const page = () => {

    const footer = Footer();
    let main = locations();

    const switchTab = (e, path) => {
        wrapper.removeChild(main);
        main = selectTab(e, path);
        wrapper.insertBefore(main, footer);
        // history.pushState({}, '', `${path.replace(' ', '-')}`);
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    wrapper.appendChild(Header.header);
    Header.navButtons.forEach(button => {
        button.addEventListener('click', e => switchTab(e, button.dataset.target));
    });

    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    window.addEventListener('popstate', e => {
        const path = window.location.pathname.slice(1);
        switchTab(e, path)
    })

    return wrapper;
}

document.body.appendChild(page());