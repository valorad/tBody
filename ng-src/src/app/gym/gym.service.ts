import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class GymService {
  private _url: string = "../../assets/Data/gyms.json";

  constructor(private _http: Http) { }

  getGymList() {
    let gyms = this._http.get(this._url).map(
      (response: Response) => response.json()
    ).catch(this.throwException)

    return gyms;
  }

  throwException(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

}
