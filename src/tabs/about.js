import Photo from '../assets/images/eileen_rainey.jpg';

export default () => {
    const wrapper = document.createElement('main');
    wrapper.classList.add('about-wrapper');
    wrapper.classList.add('page-wrapper');
    const header = document.createElement('header');
    wrapper.appendChild(header);
    const h2 = document.createElement('h2');
    header.appendChild(h2);
    h2.textContent = 'About Us';

    const eileen = new Image();
    eileen.src = Photo;
    eileen.classList.add('eileen');

    const aboutContainer = document.createElement('div');
    wrapper.appendChild(aboutContainer);
    aboutContainer.classList.add('about-container');

    const textContainer = document.createElement('div');
    aboutContainer.appendChild(textContainer);
    textContainer.classList.add('text-container');

    const para1 = document.createElement('p');
    textContainer.appendChild(para1);
    para1.innerHTML = `<span class="drop-cap">R</span>ainey Ice Cream, like many great stories, began in a grandmother's kitchen. Our founder, Eileen Rainey, first gained a passion for ice cream after watching her abuela hand-churn the frozen treat in her ice cream maker. It wasn't long before little Eileen was churning ice cream herself and passing it around to the neighborhood kids. It was a major hit, and after years of a home-business, Eileen decided it was time to share her gift beyond her cul-de-sac.`;

    const para2 = document.createElement('p');
    textContainer.appendChild(para2);
    para2.textContent = `Fast-forward 22 years, you can find Rainey Ice Cream restaurants all over the world. The ice cream is still churned on-site, and the treats are still made with all the love that Abuela put into them. Stop in today to get a taste of the nostalgia!`;

    const photoContainer = document.createElement('div');
    aboutContainer.appendChild(photoContainer);
    photoContainer.classList.add('photo-container');
    photoContainer.appendChild(eileen);

    return wrapper;
}