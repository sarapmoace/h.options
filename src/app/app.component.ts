import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any[] = [];
  price: any;
  item_desc: any;
  barcode: any;
  inputbarcode: String = "";
  printVisible: boolean = false;

  constructor(
    private apiservice: ApiService,
    private http:HttpClient, ) {
  }

  loadData() {
    this.apiservice.getData(this.inputbarcode).subscribe((res: any) => {
      const data = res;
      
      this.price = data[0].Unit_Price
      this.item_desc = data[0].Item_Description
      this.barcode = data[0].Barcode
      this.barcode = this.barcode.substring(1);
    });
  }

  check(value: string) {
    this.inputbarcode = value;
    this.loadData();
    this.showPrint()
  }

  showPrint(){
    if (this.price != ""){
      this.printVisible = true;
    }
    console.log(this.printVisible)
  }
}
