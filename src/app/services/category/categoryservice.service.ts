import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor(private http:HttpClient) { }

  getallcategory(){
    return this.http.get("https://localhost:7052/api/Category");
  }
  filterproductbycat(cid:any){
    return this.http.get(`https://localhost:7052/api/Category/FilterProductsByCatId/${cid}`);
  }
}
