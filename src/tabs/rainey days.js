export default () => {
    const wrapper = document.createElement('main');
    wrapper.classList.add('rainey-days-wrapper');
    wrapper.classList.add('page-wrapper');
    const header = document.createElement('header');
    wrapper.appendChild(header);
    const h2 = document.createElement('h2');
    header.appendChild(h2);
    h2.textContent = 'The Rainey Days Club™';

    return wrapper;
}