import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getAllProducts(): Observable<any>{
    return this._http.get('http://172.16.100.40:8001/api/products');
  }

  getData(inputbarcode: any): Observable<any>{
    return this._http.get('http://172.16.100.40:8001/api/products/lists/search/' + inputbarcode);
  }

  printData(title: any, price: any): Observable<any>{
    return this._http.get(`https://127.0.0.1:8080/api/print?title=${title}&price=${price}`)
  }
}
