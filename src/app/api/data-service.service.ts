import { Injectable } from '@angular/core';
import { Http }     from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceService {
  private heroesUrl = 'app/heroes';  // URL to web api
  constructor(private http: Http) { }

  handleError(error) {
    console.error(error);
  }
   getHeroes() {
    // return this.http.get(this.heroesUrl)
    //   .toPromise()
    //   .then(response => { console.log(response.json().data); return response.json().data })
    //   .catch(this.handleError);
    }
}
