import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/services/Cart/cartservice.service';
import { UserService } from 'src/app/services/User/user.service';
import { OrderserviceService } from 'src/app/services/order/orderservice.service';
import { AuthstateService } from 'src/app/services/state/authstate.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  empData:any=[];
 adminData:any=[];
  userType="";
  totalprice:any;
  constructor(private userserv:OrderserviceService,private authstate:AuthstateService,private cartserv:CartserviceService ) { }
  
  ngOnInit(): void {

     this.userserv.GetAllOrder().subscribe((val:any)=>{
         this.empData=val.map((U:any)=>{
          return {...U,imagepath:`https://localhost:7052/assets/${U.image}`}
         })
         this.totalprice=val.reduce((total:any,item:any)=>total +(item.price*item.quantity),0);   
     })
     
     
     this.authstate.currAuthrole.subscribe(val=>this.userType=val);

     this.userserv.getadminorders().subscribe((val:any)=>{
      this.adminData=val.map((val:any)=>{
        return {...val,imagepath:`https://localhost:7052/assets/${val.image}`}
       })
       console.log(this.adminData);
     })
  }
}
