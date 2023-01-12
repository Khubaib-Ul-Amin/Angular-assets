import { Injectable } from '@angular/core';
// import * as countrycitystatejson from 'countrycitystatejson';
const yourhandle= require('countrycitystatejson')
@Injectable()
export class AppService {
  private countryData = yourhandle;

  getCountries() {
    return this.countryData.getCountries();
  }

  getStatesByCountry(countryShotName: string) {
    return this.countryData.getStatesByShort(countryShotName);
  }

  getCitiesByState(country: string | null, state: string) {
    return this.countryData.getCities(country, state);
  }
}
