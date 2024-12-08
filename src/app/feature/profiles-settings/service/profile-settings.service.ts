import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileSettingsModel} from '../model/profile-settings-model';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsService {


  constructor(private http: HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('assets/demo/data/products-small.json')
      .toPromise()
      .then(res => res.data as ProfileSettingsModel[])
      .then(data => data);
  }

  getProducts(profile?: any) {
    let getData;
    switch(profile) {
      case 'icmp-profile': {
        getData = 'assets/demo/data/products2.json';
        break;
      }
      case 'ntp-profile': {
        getData = 'assets/demo/data/products1.json';
        break;
      }
      case 'tcp-profile': {
        getData = 'assets/demo/data/products3.json';
        break;
      }
      case 'dns-profile': {
        getData = 'assets/demo/data/products4.json';
        break;
      }
      case 'addresses': {
        getData = 'assets/demo/data/products5.json';
        break;
      }
      default: {
        getData = 'assets/demo/data/products.json';
        break;
      }
    }
    return this.http.get<any>(getData)
      .toPromise()
      .then(res => res.data as ProfileSettingsModel[])
      .then(data => data);
  }

  getProductsMixed() {
    return this.http.get<any>('assets/demo/data/products-mixed.json')
      .toPromise()
      .then(res => res.data as ProfileSettingsModel[])
      .then(data => data);
  }

  getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/demo/data/products-orders-small.json')
      .toPromise()
      .then(res => res.data as ProfileSettingsModel[])
      .then(data => data);
  }
}
