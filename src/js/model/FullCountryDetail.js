import {url} from '../config/config'

export default class FullCountryDetail{
    constructor(name){
        this.name = name;
    }
    async getFullContryDetail(){
        const response = await fetch(`${url}name/${this.name}?fullText=true`);
        const data = await response.json();
        this.name = data[0].name;
        this.nativeName = data[0].nativeName;
        this.population = data[0].population;
        this.region = data[0].region;
        this.subRegion = data[0].subregion;
        this.capital = data[0].capital;
        this.topLevelDomain = data[0].topLevelDomain[0];
        this.currencies = data[0].currencies[0].code;
        this.language = data[0].languages;
        this.borderContries = data[0].borders;
        this.flag = data[0].flag;
    }
}