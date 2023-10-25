import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-updated-data',
  templateUrl: './updated-data.component.html',
  styleUrls: ['./updated-data.component.scss']
})
export class UpdatedDataComponent {
  EDITED_FLAG = "e";
  // updatedData: any[] = [];
  // dataSource: UpdatedData[] = [];
  dataSource: any;
  displayedColumns: string[] = ["Barcode", "Item_Desc", "Unit_Price", "updated_at"]
  dateToday = new Date().toISOString().slice(0, 10);
  pageSizeOptions: any[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private apiservice: ApiService,
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }
  
  getAllProducts () { 
    this.apiservice.getAllProducts().subscribe((res: any) => {
        this.processProductsData(res.data);
    });    
  }

  async processProductsData(data: any) {
    // This method process data from backend and returns the process value
    const dataSource = data.filter((item: any) => 
        // Filtering flag and filtering date of today
        (item.Flag.toString().toLowerCase() === this.EDITED_FLAG
        && item.updated_at.slice(0, 10) === this.dateToday)
    );
    this.dataSource = new MatTableDataSource<Products>(dataSource);
    this.dataSource.paginator = this.paginator;
  }

  filterChange(data:Event) {
    let value = (data.target as HTMLInputElement).value;
    if (value.indexOf(',') > -1) value = this.removeCommaInAString(value);
    this.dataSource.filter = value;    
  }

  removeCommaInAString(str: any) {
    return str.toString().replace(/,/g,"");
  }

  removeQuoteInString(str: any){
    return str.toString().replace(/'/g, "")
  }

  convertToCurrencyFormat(number: any) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
