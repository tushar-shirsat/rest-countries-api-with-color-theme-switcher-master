import {classSelector} from '../includes/classSelector';

export const displayContries = country =>{
    const markup = `
    <a href="#${country.name}">
    <div class="country-cart">
    <img src="${country.flag}" alt="" class="country-flag">
    <div class="country-detail">
        <h3 class="country-name">${country.name}</h3>

        <div class="country-info">
            <div class="country-population"><span>population: </span> ${country.population}</div>
            <div class="country-region" ><span>region: </span> ${country.region}</div>
            <div class="country-capital"><span>capital: </span> ${country.capital}</div>
        </div>
    </div>
    </div>
    </a>
    `;
    classSelector.AllContriesContainer.insertAdjacentHTML('beforeend', markup);
}

export const displayNav = () =>{
    const markup = `
    <nav class="content-container__nav">
        <div class="content-container__nav__search">
        <svg>
        <image xlink:href="./img/search-icon.svg"  src="./img/search-icon.svg" class="content-container__nav__search-icon" alt="">
        </svg>
        <input type="text" class="content-container__nav__search-input" placeholder="Search for a country..." name="search" id="search">
        </div>
        <div class="content-container__nav-left">
        <p class="content-container__nav__select-region"><span class="selected-region">filter by region</span> <svg><image  xlink:href="./img/drop-arrow.svg"  src="./img/drop-arrow.svg" alt=""></svg></p>
        <div class="option">
        <a href="#">africa</a>
        <a href="#">asia</a>
        <a href="#">Americas</a>
        <a href="#">europe</a>
        <a href="#">oceania</a>
        </div>
        </div>
    </nav>
    `;
    classSelector.mainContainer.insertAdjacentHTML("afterbegin",markup);
}

export const resetContries = () =>{
    classSelector.AllContriesContainer.innerHTML = '';
}

export const resetNav =() =>{
    classSelector.mainContainer.removeChild(document.querySelector('.content-container__nav'));
}