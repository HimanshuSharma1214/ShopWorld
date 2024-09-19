import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  orderUrl = `https://localhost:7052/api/Orders`

  localdata: any = localStorage.getItem("mycart");
  // why not subsrcibing it directly and using observable in it ask this quue
  cartsubject = new BehaviorSubject(this.localdata != undefined ? JSON.parse(this.localdata) : []);

  public cartitems = this.cartsubject.asObservable();

  localcount = localStorage.getItem('count')
  totalcount = new BehaviorSubject(this.localcount != undefined ? JSON.parse(this.localcount) : 0);
  public count = this.totalcount.asObservable();


  tokenn = localStorage.getItem('token')



  constructor(private http: HttpClient) { }
  Addcartdata(data: any) {
    let curritem = this.cartsubject.getValue();

    let itemexist = curritem.find((item: any) => item.id == data.id);

    if (itemexist) {
      itemexist.quantity += 1;
    }
    else {
      curritem.push({ ...data, quantity: 1 });
    }
    this.cartsubject.next(curritem);
    localStorage.setItem('mycart', JSON.stringify(curritem));
    console.log(this.tokenn);
  }
  getcartcount(count: any) {
    let curtotal = this.totalcount.getValue();
    let finalcount = curtotal + 1;
    this.totalcount.next(finalcount);
    localStorage.setItem('count', JSON.stringify(finalcount));
  }
  reducecartcount(quan: any) {
    let curtotal = this.totalcount.getValue();
    let finalcount = curtotal - quan;
    this.totalcount.next(finalcount);
    localStorage.setItem('count', JSON.stringify(finalcount));
  }
  getTotalAmount() {
    return this.cartitems.pipe(
      map((items) => items.reduce((total: any, item: any) => total + (item.price * item.quantity), 0))
    )
  }
  Deletecartitem(id: any) {
    let curritem = this.cartsubject.getValue();
    let updateditem = curritem.filter((val: any) => val.id != id);
    this.cartsubject.next(updateditem);
    localStorage.setItem('mycart', JSON.stringify(updateditem));
  }
  checkoutcart() {
    let products = this.cartsubject.value.map((val: any) => {
      return {
        productId: val.id,
        quantity: val.quantity
      }
    })


    let newOrderId = nanoid();
    let tokenn = localStorage.getItem('token')
    let parsedToken = tokenn != undefined ? JSON.parse(tokenn) : ""


    console.log(this.tokenn,parsedToken);
    

    return this.http.post(`${this.orderUrl}/${newOrderId}`,
      { products },
      {
        observe: 'response', headers: {
          "Authorization": `Bearer ${parsedToken.token}`
        }
      }
    ).pipe(
      tap((res) => {
        if (res.ok) {
          // localStorage.removeItem('products');
          this.cartsubject.next([]);
        }
      })
    );
  }
}
