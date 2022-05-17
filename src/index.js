import Header from './elements/header.js';
import './normalize.css';
import './style.css';
import selectTab from './functions/selectTab.js';
import home from './tabs/home.js';
import Footer from './elements/footer.js';
import {Modal} from './elements/modal.js';

const page = () => {

    const footer = Footer();
    let main = home();

    const switchTab = (e, path) => {
        wrapper.removeChild(main);
        main = selectTab(e, path);
        wrapper.insertBefore(main, footer);
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    wrapper.appendChild(Header.header);
    Header.navButtons.forEach(button => {
        button.addEventListener('click', e => switchTab(e, button.dataset.target));
    });

    wrapper.appendChild(main);
    wrapper.appendChild(footer);
    
    wrapper.appendChild(Modal.modalWrapper)

    return wrapper;
}

document.body.appendChild(page());