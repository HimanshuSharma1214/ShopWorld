import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/Products';

const API_URL="https://localhost:7052/api/Products";

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  GetProducts(){
    return this.http.get(API_URL);
  }
  AddProduct(FormData:any){
    return this.http.post("https://localhost:7052/api/Products",FormData);
  }
 
   DeleteProduct(id:any){
    return this.http.delete(`${API_URL}/${id}`)
   }

   EditProduct(id:any,formData:any){
    return this.http.put(`${API_URL}/${id}`,formData)
   }
}
