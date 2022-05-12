import IceCream from '../assets/images/ice-cream-cropped.png';
import KidWithIceCream from '../assets/images/kid-with-ice-cream.jpg';

export default () => {
    const wrapper = document.createElement('main');
    wrapper.classList.add('home-container');

    // HERO
    const hero = document.createElement('div');
    hero.classList.add('hero');
    wrapper.appendChild(hero);
    const heroTextContainer = document.createElement('div');
    heroTextContainer.classList.add('hero-inner');
    const copy = document.createElement('div');
    heroTextContainer.appendChild(copy);
    hero.appendChild(heroTextContainer);
    const tagline = document.createElement('p');
    copy.appendChild(tagline);
    tagline.textContent = 'Summer, autumn, winter, spring,';
    const slogan = document.createElement('h2');
    copy.appendChild(slogan);
    slogan.innerHTML = `It's always <span class="highlight">Rainey Season</span>.`;
    const text = document.createElement('p');
    copy.appendChild(text);
    text.textContent = 'Something about rewards and birthdays. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed ratione facilis, reiciendis, nihil consequuntur quia non debitis, perferendis nostrum fugiat. Quia dolores, quis id ipsam maxime exercitationem corrupti iure!';
    const iceCreamContainer = document.createElement('div');
    hero.appendChild(iceCreamContainer);
    iceCreamContainer.classList.add('ice-cream-container');
    const iceCream = new Image();
    iceCream.src = IceCream;
    iceCreamContainer.appendChild(iceCream);
    iceCream.classList.add('ice-cream');
    
    const button = document.createElement('button');
    heroTextContainer.appendChild(button);
    button.textContent = 'Join the Rainey Days Club';

    // AD
    const adContainer = document.createElement('div');


    // CHARITY
    const charityContainer = document.createElement('div');
    charityContainer.classList.add('charity-container');
    wrapper.appendChild(charityContainer);
    const kid = new Image();
    kid.src = KidWithIceCream;
    charityContainer.appendChild(kid);
    kid.classList.add('kid');
    const charityCopy = document.createElement('div');
    charityContainer.appendChild(charityCopy);
    charityCopy.classList.add('charity-copy');
    const charityHeadline = document.createElement('h2');
    charityCopy.appendChild(charityHeadline);
    charityHeadline.textContent = 'Rainey\'s is bringing the sunshine';
    const charityParagraph = document.createElement('p');
    charityCopy.appendChild(charityParagraph);
    charityParagraph.textContent = `Rainey Ice Cream is partnering with St. Ipsum Children's Hospital. Integer scelerisque ipsum sed neque pretium mattis. Nunc varius felis ut dui consectetur rutrum. Pellentesque egestas nisi leo, eu tincidunt ante vestibulum sit amet. Sed nec bibendum lacus.`;
    const charityButton = document.createElement('button');
    charityCopy.appendChild(charityButton);
    charityButton.textContent = 'Find out more';

    // MAILING LIST
    const mailingListContainer = document.createElement('div');
    mailingListContainer.classList.add('mailing-list-container');
    wrapper.appendChild(mailingListContainer);
    const mailingListParagraph = document.createElement('p');
    mailingListContainer.appendChild(mailingListParagraph);
    mailingListParagraph.textContent = `Join our mailing list for exclusive deals, offers, and rewards!`;
    const emailInput = document.createElement('input');
    mailingListContainer.appendChild(emailInput);
    emailInput.classList.add('email-input');
    emailInput.placeholder = 'your.email@example.com';
    const emailSubmit = document.createElement('button');
    emailSubmit.classList.add('email-submit');
    mailingListContainer.appendChild(emailSubmit);
    emailSubmit.textContent = 'Subscribe';

    return wrapper;
}