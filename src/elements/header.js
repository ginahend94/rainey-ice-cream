import Logo from '../assets/images/rainey logo est.png';

export default (() => {
    const header = document.createElement('header');

    const logo = new Image();
    logo.src = Logo;

    const logoLink = document.createElement('a');
    header.appendChild(logoLink);
    logoLink.href = '/';
    logoLink.title = "Rainey Ice Cream";
    logo.alt = "Rainey Ice Cream";
    logoLink.appendChild(logo);

    const nav = document.createElement('nav');
    header.appendChild(nav);
    const ul = document.createElement('ul');
    nav.appendChild(ul);
    const navLinks = ['home', 'menu', 'about', 'rainey days club', 'locations'];
    navLinks.forEach(link => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        li.appendChild(button);
        button.dataset.target = link;
        ul.appendChild(li);
        button.textContent = link;
        li.classList.add(link.replace(/ /g, '-'));
        if (link == 'home') {
            button.classList.add('active');
            button.dataset.target = '';
        }
    });
    const navButtons = Array.from(nav.querySelectorAll('button'));

    return { header, navButtons };
})();