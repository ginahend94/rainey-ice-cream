export const Modal = (() => {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    modalWrapper.classList.add('closed')

    const closeModal = () => modalWrapper.classList.add('closed');
    const openModal = () => modalWrapper.classList.remove('closed');

    const modalBG = document.createElement('div');
    modalWrapper.appendChild(modalBG);
    modalBG.classList.add('modal-bg');
    modalBG.addEventListener('click', closeModal);

    const modal = document.createElement('div');
    modalWrapper.appendChild(modal);
    modal.classList.add('modal');
    const closeButton = document.createElement('button');
    modal.appendChild(closeButton);
    closeButton.classList.add('close-button');


    closeButton.addEventListener('click', closeModal);
    closeButton.innerHTML = `&times;`;
    const header = document.createElement('header');
    modal.appendChild(header);
    header.innerHTML = `<h2>What is this?</h2>`;
    const inner = document.createElement('div')
    modal.appendChild(inner)
    inner.innerHTML = `<p>
    This is a website for a fictional ice cream restaurant, Rainey Ice Cream. All locations on the "Locations" page are actually just American chain restaurants around the world.
</p>
<p>
    I created this website as a project for 
    <a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page" target="_blank" rel="noreferrer">The Odin Project</a>, 
    a free online course to learn web development.
    This site was created by me, Gina Henderson. Find me below. Thanks for checking out my project!
</p>
<div class="socials">    
    <a href="https://github.com/ginahend94" title="GitHub" target="_blank" rel="noreferrer"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
</svg></a>
    <a href="https://twitter.com/ginahend94" title="Twitter" target="_blank" rel="noreferrer"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
</svg></a>
</div>
<div class="attributions">
<h3>Attributions</h3>
<ul>
    <li>Child with Ice Cream - Photo by <a href="https://unsplash.com/@miekelauren?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Mieke Campbell</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>
    </li>
    <li>Strawberry Ice Cream - Image by <a href="https://pixabay.com/users/ralphs_fotos-1767157/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2727806" target="_blank" rel="noreferrer">Ralphs_Fotos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2727806" target="_blank" rel="noreferrer">Pixabay</a>
    </li>
    <li>Sundae - Image by <a href="https://pixabay.com/users/sciencefreak-97947/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2377713" target="_blank" rel="noreferrer">Karin Henseler</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2377713" target="_blank" rel="noreferrer">Pixabay</a>
    </li>
    <li>Chocolate - Photo by <a href="https://unsplash.com/@ikredenets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Irene Kredenets</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>
    </li>
    <li>Cheesecake - Photo by <a href="https://unsplash.com/es/@rachaelgorjestani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Rachael Gorjestani</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>
    </li>
    <li>Caramel - Photo by <a href="https://unsplash.com/@thissillygirlskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Dana DeVolk</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>
    </li>
    <li>Vanilla - Photo by <a href="https://unsplash.com/@josephinakdesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Josephina Kolpachnikof</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>
    </li>
    <li>Strawberry Sorbet Swirl - Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">charlesdeluvio</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>
    </li>
    <li>Cookies and Cream - Photo by <a href="https://unsplash.com/@iceeedc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Icee Dc</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>
    </li>
    <li>
    Eileen Rainey - <a href="https://this-person-does-not-exist.com" target="_blank" rel="noreferrer">thispersondoesnotexist.com</a>
    </li>
</ul>
</div>`
    
    return { modalWrapper, openModal, closeModal }
})();
