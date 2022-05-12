import IceCream from '../assets/images/ice-cream-cropped.png';
import KidWithIceCream from '../assets/images/kid-with-ice-cream.jpg';
import Sundae from '../assets/images/sundae.png';

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
    text.textContent = 'Rack up points, earn rewards, and get free ice cream on your birthday! Get all this and more when you join the Rainey Days Club.';
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
    wrapper.appendChild(adContainer);
    adContainer.classList.add('ad-container');
    const sundae = new Image();
    sundae.src = Sundae;
    sundae.classList.add('sundae');
    adContainer.appendChild(sundae);
    const adCopyContainer = document.createElement('div');
    adContainer.appendChild(adCopyContainer);
    const adHeader = document.createElement('h2');
    adCopyContainer.appendChild(adHeader);
    adHeader.innerHTML = 'Try our new <span class="highlight">Triple Chocolate Sundae</span>!';
    const adCopy = document.createElement('p');
    adCopy.classList.add('ad-copy');
    adCopyContainer.appendChild(adCopy);
    adCopy.textContent = 'Dark chocolate, milk chocolate, and white chocolate ice cream, served with a crispy wafer and hot fudge. Try it today!';

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
    charityHeadline.textContent = 'Rainey is bringing the sunshine.';
    const charityParagraph = document.createElement('p');
    charityCopy.appendChild(charityParagraph);
    charityParagraph.textContent = `Rainey Ice Cream is partnering with St. Lorem Children's Hospital. We will donate of proceeds to help fight childhood diseases. Click the link before to find out how you can help.`;
    const charityButton = document.createElement('button');
    charityCopy.appendChild(charityButton);
    charityButton.textContent = 'Find out more';

    // MAILING LIST
    const mailingListWrapper = document.createElement('div');
    wrapper.appendChild(mailingListWrapper);
    mailingListWrapper.classList.add('mailing-list-wrapper');
    const mailingListContainer = document.createElement('div');
    mailingListContainer.classList.add('mailing-list-container');
    mailingListWrapper.appendChild(mailingListContainer);
    const mailingListParagraph = document.createElement('p');
    mailingListContainer.appendChild(mailingListParagraph);
    mailingListParagraph.textContent = `Join our mailing list for exclusive deals, offers, and rewards!`;
    const emailInput = document.createElement('input');
    mailingListContainer.appendChild(emailInput);
    emailInput.classList.add('email-input');
    emailInput.placeholder = 'your.email@example.com';
    emailInput.type = 'email';
    const emailSubmit = document.createElement('button');
    emailSubmit.classList.add('email-submit');
    mailingListContainer.appendChild(emailSubmit);
    emailSubmit.textContent = 'Subscribe';

    return wrapper;
}