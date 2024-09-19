import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API=`https://localhost:7052/api/Orders`
const URL_API=`https://localhost:7052/api/Orders/AdminOrder`

@Injectable({
  providedIn: 'root'
})

export class OrderserviceService {
  tokenn=localStorage.getItem('token')
  
  constructor(private http:HttpClient) { }

   GetAllOrder(){
    let parsedToken = this.tokenn != undefined ? JSON.parse(this.tokenn) : ""
   return this.http.get("https://localhost:7052/api/Orders",{headers:{
    "Authorization":`Bearer ${parsedToken.token}`
   }});
  }

  getadminorders(){
    return this.http.get(URL_API);
  }
}
