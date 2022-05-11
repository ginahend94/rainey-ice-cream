import IceCream from '../assets/images/ice-cream.png';
import selectTab from '../functions/selectTab';

export default () => {
    const wrapper = document.createElement('main');
    wrapper.classList.add('home-container');
    const hero = document.createElement('div');
    wrapper.appendChild(hero);
    const iceCream = new Image();
    iceCream.src = IceCream;
    hero.appendChild(iceCream);
    iceCream.classList.add('ice-cream');
    const container = document.createElement('div');
    const copy = document.createElement('div');
    container.appendChild(copy);
    hero.appendChild(container);
    const tagline = document.createElement('p');
    copy.appendChild(tagline);
    tagline.textContent = 'Summer, autumn, winter, spring,';
    const slogan = document.createElement('h2');
    copy.appendChild(slogan);
    slogan.innerHTML = `It's always <span class="highlight">Rainey Season</span>.`;
    const text = document.createElement('p');
    copy.appendChild(text);
    text.textContent = 'Something about rewards and birthdays. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed ratione facilis, reiciendis, nihil consequuntur quia non debitis, perferendis nostrum fugiat. Quia dolores, quis id ipsam maxime exercitationem corrupti iure!';
    
    const button = document.createElement('button');
    container.appendChild(button);
    button.textContent = 'Join the Rainey Days Club';
    
    return wrapper;
}