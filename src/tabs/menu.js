
export default () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('menu-wrapper');
    const header = document.createElement('header');
    wrapper.appendChild(header);
    const h2 = document.createElement('h2');
    header.appendChild(h2);
    h2.textContent = 'Menu';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    wrapper.appendChild(cardContainer);




    return wrapper;
}