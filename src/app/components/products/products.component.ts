import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/services/Cart/cartservice.service';
import { ProductserviceService } from 'src/app/services/Product/productservice.service';
import { CategoryserviceService } from 'src/app/services/category/categoryservice.service';
import { AuthstateService } from 'src/app/services/state/authstate.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
   empData:any;
   var:any=0;
   authState:boolean=false;
   userRole:string="user";
  filterproducts:any=[];
  categories:any=[];
  selectedcategory:any="";
  filteredata:any;
  selectedfilter:any="";

  constructor(private router:Router,private authserv:AuthstateService,private proserv:ProductserviceService,private snackbar:MatSnackBar,private cartserv:CartserviceService,private categor:CategoryserviceService) { }

  ngOnInit(): void {

      this.proserv.GetProducts().subscribe((data:any)=>{
        this.empData=data.map((u:any)=>{
            return {...u,imagepath:`https://localhost:7052/assets/${u.imagepath}`}
        })
      })

      this.authserv.currAuthState.subscribe(state=>this.authState=state);
      this.authserv.currAuthrole.subscribe(state=>this.userRole=state);

      this.getcategory();
  }

   Addtocart(data:any){
    this.var++;
   
    this.cartserv.getcartcount(this.var);
    console.log(this.var);
    
    this.cartserv.Addcartdata(data);
      this.snackbar.open("product added to cart👏","",{
        duration:2000,
      })
   }
   DelPro(id:any){
    if(confirm("Do you want to delete")){
      this.proserv.DeleteProduct(id).subscribe({
        next:(data)=>{
          this.empData=this.empData.filter((emp:any)=>emp.id!=id);
        }
     })
    }    
   }
   EditPro(id:any){
        this.router.navigateByUrl('/editproduct/'+id)
   }
   getcategory(){
      this.categor.getallcategory().subscribe((val)=>{
        this.categories=val;
      })
   }
   filterbycategory(categoryy:any){
     if(categoryy){
        this.categor.filterproductbycat(categoryy.id).subscribe((data:any)=>{
          this.empData=data.map((u:any)=>{
            return {...u,imagepath:`https://localhost:7052/assets/${u.imagepath}`}
        })
        })
     }
     else{
      this.proserv.GetProducts().subscribe((data:any)=>{
        this.empData=data.map((u:any)=>{
            return {...u,imagepath:`https://localhost:7052/assets/${u.imagepath}`}
        })
      })
     } 
   }
   filterbyprice(filterr:any){
    
      if(filterr=="low"){
         this.sortProductsByPricelowtohigh(this.empData);
      }
     else if(filterr=="high"){
       this.sortProductsByPricehightolow(this.empData);
     }
     else if(filterr=="a"){
        this.sortProductsByName(this.empData)
     }
     else if(filterr=="z"){
        this.sortProductsByNames(this.empData)
     }
     else{
      this.proserv.GetProducts().subscribe((data:any)=>{
        this.empData=data.map((u:any)=>{
            return {...u,imagepath:`https://localhost:7052/assets/${u.imagepath}`}
        })
      })
     }
   }
    sortProductsByPricelowtohigh(products:any){
    this.empData= products.sort((a:any, b:any) => a.price - b.price);
  }
    sortProductsByPricehightolow(products:any){
    this.empData= products.sort((a:any, b:any) => b.price - a.price);
  }
   sortProductsByName(products:any) {
    this.empData=  products.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }
   sortProductsByNames(products:any) {
    this.empData=  products.sort((a:any, b:any) => b.name.localeCompare(a.name));
  }
}
