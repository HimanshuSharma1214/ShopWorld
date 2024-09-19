import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartserviceService } from 'src/app/services/Cart/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  empdata:any=[];
  bagcount:any;
  constructor(private cartserv:CartserviceService,private router:Router) { }
   
  totalprice:any=this.cartserv.getTotalAmount();

  ngOnInit(): void {
    this.cartserv.cartitems.subscribe(vals=>{
      this.empdata=vals;
      console.log(this.empdata);
      
    })
    console.log(this.totalprice);
    this.cartserv.totalcount.subscribe((val)=>{
      this.bagcount=val;
    })
  }  
  delpro(id:any,quan:any){
    if(confirm("Want to remove it?")){
      this.cartserv.Deletecartitem(id);
    }
     this.cartserv.reducecartcount(quan);
  }

  checkouts(data:any){
   if(data.length>=1){
    alert("Order placed!! You can check in order section")
    this.cartserv.checkoutcart().subscribe(val=>{
      this.router.navigateByUrl("/");
    })
   }
  }
}
