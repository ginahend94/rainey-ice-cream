import vanilla from '../assets/images/vanilla.jpg';
import chocolate from '../assets/images/chocolate.jpg'
import strawberry from '../assets/images/strawberry.jpg'
import cookiesAndCream from '../assets/images/cookies and cream.jpg'
import strawberrySwirl from '../assets/images/strawberry swirl.jpg'
import vanillaBean from '../assets/images/vanilla bean.jpg'
import caramel from '../assets/images/caramel.jpg'
import sundae from '../assets/images/sundae.png'

export default () => {
    const wrapper = document.createElement('main');
    wrapper.classList.add('menu-wrapper');
    const header = document.createElement('header');
    wrapper.appendChild(header);
    const h2 = document.createElement('h2');
    header.appendChild(h2);
    h2.textContent = 'Menu';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    wrapper.appendChild(cardContainer);

    const vanillaPic = new Image();
    vanillaPic.src = vanilla;
    const chocolatePic = new Image();
    chocolatePic.src = chocolate;
    const strawberryPic = new Image();
    strawberryPic.src = strawberry;
    const cookiesAndCreamPic = new Image();
    cookiesAndCreamPic.src = cookiesAndCream;
    const strawberrySwirlPic = new Image();
    strawberrySwirlPic.src = strawberrySwirl;
    const cheesecakePic = new Image();
    cheesecakePic.src = vanillaBean;
    const caramelPic = new Image();
    caramelPic.src = caramel;
    const sundaePic = new Image();
    sundaePic.src = sundae;

    const flavors = [
        {
            name: 'Vanilla',
            pic: vanillaPic
        },
        {
            name: 'chocolate',
            pic: chocolatePic,
        },
        {
            name: 'strawberry',
            pic: strawberryPic,
        },
        {
            name: 'cookies and cream',
            pic: cookiesAndCreamPic,
        },
        {
            name: 'strawberry swirl',
            pic: strawberrySwirlPic,
        },
        {
            name: 'cheesecake',
            pic: cheesecakePic,
        },
        {
            name: 'caramel',
            pic: caramelPic,
        },
        {
            name: 'triple chocolate sundae',
            pic: sundaePic,
        },
    ];

    flavors.forEach(flavor => {
        const flavorContainer = document.createElement('figure');
        flavorContainer.classList.add('flavor-container');
        cardContainer.appendChild(flavorContainer);
        const picContainer = document.createElement('div');
        picContainer.appendChild(flavor.pic);
        picContainer.classList.add('pic-container');
        flavorContainer.appendChild(picContainer);
        const flavorName = document.createElement('figcaption');
        flavorContainer.appendChild(flavorName);
        flavorName.textContent = flavor.name;
        if (flavor.name == 'triple chocolate sundae') {
            flavorContainer.classList.add('sundae-pic');
        };
    }) 

    return wrapper;
}
