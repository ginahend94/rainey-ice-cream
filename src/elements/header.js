import Logo from '../assets/images/rainey logo outline.png';

export default () => {
    const header = document.createElement('header');

    const logo = new Image(); // TESTING
    logo.src = Logo;

    const logoLink = document.createElement('a');
    header.appendChild(logoLink);
    logoLink.href = '#';
    logoLink.title = "Rainey Ice Cream";
    logoLink.alt = "Rainey \nIce Cream";
    logoLink.appendChild(logo);

    const nav = document.createElement('nav');
    header.appendChild(nav);
    const ul = document.createElement('ul');
    nav.appendChild(ul);
    const navLinks = ['home', 'menu', 'about', 'order', 'locations'];
    navLinks.forEach(link => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        li.appendChild(button);
        button.dataset.target = link;
        ul.appendChild(li);
        button.textContent = link;
    });


    return header;
}