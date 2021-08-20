import {url} from '../config/config'

export default class RegionCountries{
    constructor(region){
        this.region = region;
    }

    async getRegionCountries(){
        try {
            const response = await fetch(`${url}region/${this.region}`);
        const data = await response.json();
        this.regionCountries = data;
        } catch (error) {
            console.log(error);
        }
    }
}