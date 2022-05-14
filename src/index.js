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
    // let main = home(); //TEST

    const switchTab = e => {
        wrapper.removeChild(main);
        main = selectTab(e);
        wrapper.insertBefore(main, footer);
    }

    // window.addEventListener('popstate', e => {
    //     switchTab(e);
    // })

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