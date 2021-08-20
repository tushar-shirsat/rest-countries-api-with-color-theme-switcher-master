import {classSelector} from './includes/classSelector';
import AllCountries from './model/AllCountries';
import * as allCountriesView from './view/allCountriesView';
import FullCountryDetail from './model/FullCountryDetail';
import * as FullCountryDetailView from './view/FullCountryDetailView';
import RegionCountries from './model/RegionCountries'

let isdark = false;
let data = {

}
window.data = data;

const changeTheme = () =>{
    if(!isdark){
        document.documentElement.style.setProperty('--bkg-clr','hsl(207, 26%, 17%)');
        document.documentElement.style.setProperty('--nav-bkg-clr','hsl(209, 23%, 22%)');
        document.documentElement.style.setProperty('--nav-shadow-clr','rgba(0,0,0,0.2)');
        document.documentElement.style.setProperty('--txt-clr','hsl(0, 0%, 100%)');
        document.querySelectorAll('image').forEach(el =>{
            el.style.filter = 'invert(1)'
        })
        localStorage.setItem('dark',isdark);
        isdark = true;
    }
    else{
        document.documentElement.style.setProperty('--bkg-clr','hsl(0, 0%, 98%)');
        document.documentElement.style.setProperty('--nav-bkg-clr','#fff');
        document.documentElement.style.setProperty('--nav-shadow-clr','#f2f2f2');
        document.documentElement.style.setProperty('--txt-clr','hsl(200, 15%, 8%)');
        document.querySelectorAll('image').forEach(el =>{
            el.style.filter = 'invert(0)'
        })
        localStorage.setItem('dark',JSON.stringify(isdark));
        isdark = false;
    }
}

const allContriesController = async () =>{
    data.allContries = new AllCountries();
    await data.allContries.showAllCountries();
    allCountriesView.displayNav();
    data.allContries.countries.forEach(el =>{
        allCountriesView.displayContries(el);
    })
    if(!isdark){
        document.querySelectorAll('image').forEach(el =>{
            el.style.filter = 'invert(0)'
        })
    }else{
        document.querySelectorAll('image').forEach(el =>{
            el.style.filter = 'invert(1)'
        })
    }
}
const countryController = async () =>{
    const name = window.location.hash.replace('#',"");
    if(name){
        data.FullCountryDetail = new FullCountryDetail(name);
        await data.FullCountryDetail.getFullContryDetail();
        allCountriesView.resetContries();
        allCountriesView.resetNav();
        FullCountryDetailView.fullCountryNav();
        let country = data.FullCountryDetail;
        FullCountryDetailView.FullCountryDetailDisplay(country);
        if(!isdark){
            document.querySelectorAll('image').forEach(el =>{
                el.style.filter = 'invert(0)'
            })
        }else{
            document.querySelectorAll('image').forEach(el =>{
                el.style.filter = 'invert(1)'
            })
        }
    }
}

const regionCountriesController =async (region) =>{
    if(region){
        data.RegionCountries = new RegionCountries(region);
        allCountriesView.resetContries();
        await data.RegionCountries.getRegionCountries();
        data.RegionCountries.regionCountries.forEach(el =>{
            allCountriesView.displayContries(el)
        })
    }
}

classSelector.darkMode.addEventListener('click',() =>{
        changeTheme();
})

window.addEventListener('load',() =>{
        allContriesController();
        isdark = JSON.parse(localStorage.getItem('dark'));
        changeTheme();
})

window.addEventListener('hashchange', () =>{
    countryController();
})

classSelector.fullCountryContainer.addEventListener('click',(e) =>{
    if(e.target.matches('.back, .back *')){
        location.href = 'http://localhost:8080/'
    }
})

classSelector.mainContainer.addEventListener('click',(e) =>{
    if(e.target.matches('.content-container__nav-left, .content-container__nav-left *')){
        document.querySelector('.option').classList.toggle('show');
    }
    else if(e.target.matches('.option a')){
        console.log('click');
    }
    document.querySelectorAll('.option a').forEach(el =>{
        el.addEventListener('click',() =>{
            document.querySelector('.content-container__nav__select-region span').textContent = `${el.textContent}`;
            regionCountriesController(el.textContent.toLowerCase());
        })
    })
})

classSelector.mainContainer.addEventListener('keyup', (e) =>{
    if(e.target.matches('.content-container__nav__search-input')){
        let value = e.target.value.toLowerCase();
        let cart = classSelector.AllContriesContainer.children;
        for(let i =0; i< cart.length;i++){
            let nameTage = cart[i].children[0].children[1].firstElementChild;
            if(nameTage){
                let namevalue = nameTage.textContent || nameTage.innerHTML;
                if(namevalue.toLowerCase().indexOf(value) > -1){
                    cart[i].style.display = "";
                }
                else{
                    cart[i].style.display = "none";
                }
            }
        }
    }
})