export default () => {
    const wrapper = document.createElement('main');
    wrapper.classList.add('rainey-days-wrapper');
    wrapper.classList.add('page-wrapper');
    const header = document.createElement('header');
    wrapper.appendChild(header);
    const h2 = document.createElement('h2');
    header.appendChild(h2);
    h2.textContent = 'The Rainey Days Club™';

    const raineyDaysContainer = document.createElement('div');
    wrapper.appendChild(raineyDaysContainer);
    raineyDaysContainer.classList.add('rainey-days-container');
    const raineyDaysCopy = document.createElement('div');
    raineyDaysContainer.appendChild(raineyDaysCopy);
    raineyDaysCopy.classList.add('rainey-days-copy');
    raineyDaysCopy.innerHTML = `<h3>Buy ice cream, rack up rewards.</h3>
    <p>When you join the Rainey Days Club™, you can earn exclusive rewards and opportunities. Spend your points as soon as you get them, or save them for a rainy day.</p>
    <h4>Free Ice Cream</h4>
    <p>When you collect points, you can use them towards a discount on your next cone from Rainey. Save enough, and you can even get your next cone <em>free</em>. Sounds like a pretty sweet deal.</p>
    <h4>Birthday Rewards</h4>
    <p>Joining the Rainey Days Club™ means getting special surprises on your birthday, like free ice cream, coupons, and more!</p>
    <h4>Exclusive events</h4>
    <p>Rainey Ice Cream is big on fun. The Rainey Days Club™ is your ticket to special parties, concerts, and charity events sponsored by Rainey!</p>`;

    const eighteenYearsOld = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear() - 18;
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return `${yyyy}-${mm}-${dd}`;
    }

    const signUpForm = document.createElement('div');
    raineyDaysContainer.appendChild(signUpForm);
    signUpForm.innerHTML = `<h3>Sign Up Today</h3>
    <label><input>Name</label>
    <label><input>Email</label>
    <label><input type="date" max=${eighteenYearsOld()}>Date of Birth</label>
    <label><input type="checkbox">I am at least 18 years of age and agree to join the Rainey Days Club™.</label>`;

    return wrapper;
}