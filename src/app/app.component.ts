import { Component, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('inputBarcode') inputBarcode: ElementRef | undefined ;
  data: any[] = [];
  price: any;
  item_desc: String = "";
  currency: String = "";
  barcode: any;
  inputbarcode: String = "";

  printVisible: boolean = false;
  isError: boolean = true;

  constructor(
    private apiservice: ApiService,
    private http:HttpClient,
    private router: Router
  ){}
  
  ngAfterViewInit() {
    console.log(`Date afterinit: ${Date.now()}`);
    this.inputBarcode?.nativeElement.focus();
  }

  loadData() {
    this.apiservice.getData(this.inputbarcode).subscribe(
      (res: any) => {
        const data = res;
        if (data && data.length > 0) {
          this.price = data[0].Unit_Price;
          this.item_desc = data[0].Item_Description;
          this.barcode = data[0].Barcode;
          this.currency = data[0].Currency
          this.barcode = this.barcode.substring(1);
          this.showPrint();
          return this.notFound(true)
        }else{
          return this.notFound(false)
        }
      }
    );
  }

  check(value: string) {
    this.inputbarcode = value;
    this.loadData();
  }

  showPrint(){
    if (this.price != undefined){
      this.printVisible = true;
    }
  }

  notFound(isError: boolean){
    this.isError = isError; 
  }

  printData() {
    window.location.href = `http://127.0.0.1:8080/api/print?title=${this.item_desc}&price=${this.price}`;
  }
}