import {classSelector} from '../includes/classSelector';



export const FullCountryDetailDisplay = country =>{
    const {flag,name,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,language,borderContries} = country;
    // console.log(language,borders);
    // console.log(country.name);
    const markup = `
    <img src="${flag}" alt="" class="country-info-flag">
    <div class="country-full-info__left">
        <h2 class="country-full-info__left-title">${name}</h2>
        <div class="country-full-info__left-detail">
            <div class="country-full-info__left-detail__right">
                <p class="country-full-info__native-name">
                    <span>Native Name: </span>${nativeName}
                </p>
                <p class="country-full-info__population">
                    <span>Population: </span>${population}
                </p>
                <p class="country-full-info__region">
                    <span>Region: </span>${region}
                </p>
                <p class="country-full-info__sub-region">
                    <span>Sub Region: </span>${subRegion}
                </p>
                <p class="country-full-info__capital">
                    <span>Capital: </span>${capital}
                </p>
            </div>
            <div class="country-full-info__left-detail__left">
                <p class="country-full-info__top-levle-domain">
                    <span>Top Level Domain: </span>${topLevelDomain}
                </p>
                <p class="country-full-info__currencies">
                    <span>Currencies: </span>${currencies}
                </p>
                <p class="country-full-info__languages">
                    <span>Languages: </span>${language.map(el => el.name).join(", ")}
                </p>
            </div>
        </div>
        <div class="country-full-info__border-countries">
            <p>Boreder Countries:</p>
            <div>
                ${borderContries.map(el => `<span>${el}</span>`).join("")}
            </div>
        </div>
    </div>
    `
   
    classSelector.fullCountryInfo.insertAdjacentHTML('beforeend', markup);
}

export const fullCountryNav = () =>{
    const markup = `
    <div class="back">
    <button class="back-btn">
        <svg>
        <image xlink:href="./img/back-arrow.svg" src="./img/back-arrow.svg" alt="back-home">
        </svg>
        <span>back</span>
    </button>
</div>
    `;

    classSelector.fullCountryContainer.insertAdjacentHTML('afterbegin',markup);
}