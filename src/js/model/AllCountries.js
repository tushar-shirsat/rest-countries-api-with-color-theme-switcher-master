import {url} from '../config/config'

export default class AllCountries{
    constructor(){
        this.countries = []
    }
    async showAllCountries(){
        try {
            const response = await fetch(`${url}all`);
            const data = await response.json();
            this.countries = data;
            console.log(this.countries);
        } catch (error) {
            console.log(error);
        }
        
    }
}