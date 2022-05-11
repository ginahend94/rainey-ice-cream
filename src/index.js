import Header from './elements/header.js';
import './normalize.css';
import './style.css';

const page = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.appendChild(Header());
    return wrapper;
}

document.body.appendChild(page());