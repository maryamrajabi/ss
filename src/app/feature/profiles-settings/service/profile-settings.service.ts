import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsService<T> {


  constructor(private http: HttpClient) { }

  getData(profile?: any) {
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
      case 'protection-policies': {
        getData = 'assets/demo/data/products6.json';
        break;
      }
      default: {
        getData = 'assets/demo/data/products.json';
        break;
      }
    }
    return this.http.get<any>(getData)
      .toPromise()
      .then(res => res.data as T[])
      .then(data => data);
  }

}
