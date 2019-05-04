import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrashService {
  url = 'assets/result.json?Weather=wet&' ;
  constructor(private http: HttpClient) { }
  getCrashData() {
    return this.http.get(this.url ).pipe(map((crash) => {
      return crash;
    }));
  }

}
