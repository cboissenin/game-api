import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
  apiKey = '2ncmr43y4znp5wtxdhzucmbkfqvhc2g5';
  baseUrl = 'https://eu.api.battle.net/';
  params = new URLSearchParams();


  constructor(private http: Http) {
    this.params.set('locale', 'fr_FR');
    this.params.set('apikey', this.apiKey);
  }

  getAllBoss() {
    let path = 'wow/boss/'
    return this.http.get(`${this.baseUrl}${path}`, { search : this.params})
      .map(res => res.json())
      .map((res: any) => res.bosses);
  }

  getBoss(id) {
    let path = `wow/boss/${id}`;
    return this.http.get(`${this.baseUrl}${path}`, { search : this.params})
      .map(res => res.json());
  }

}
