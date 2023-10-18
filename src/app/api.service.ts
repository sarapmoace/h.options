import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getData(inputbarcode: any): Observable<any>{
    return this._http.get('http://localhost:8001/api/products/lists/search/' + inputbarcode);
  }
}
