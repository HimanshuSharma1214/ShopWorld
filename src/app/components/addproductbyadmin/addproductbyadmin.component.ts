import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { every } from 'rxjs';
import { ProductserviceService } from 'src/app/services/Product/productservice.service';
import { Products } from 'src/app/services/interfaces/Products';

@Component({
  selector: 'app-addproductbyadmin',
  templateUrl: './addproductbyadmin.component.html',
  styleUrls: ['./addproductbyadmin.component.css']
})
export class AddproductbyadminComponent implements OnInit {

 filepath:any='';

  formdata:Products={
    Id:0,
    CategoryId:0,
    Name:"",
    Description:"",
    price:'',
    quantity:'',
    imagepath:''
  }
  constructor(private proser:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  uploadFile(event:any){
    if(event.target.files.length>0){
      this.filepath=event.target.files[0];
    }
  }
  uploadData(){
    if(this.filepath==""){
      alert("Please select a file")
    }
    else{
      if(this.filepath.type=="image/png"||this.filepath.type=="image/jpg"||this.filepath.type=="image/jpeg"){
        const formData=new FormData();
        formData.append('imagepath',this.filepath,this.filepath.name);
        formData.append('Name',this.formdata.Name);
        formData.append('Description',this.formdata.Description);
        formData.append('price',this.formdata.price);
        formData.append('CategoryId',this.formdata.CategoryId.toString());
        formData.append('quantity',this.formdata.quantity.toString());
        console.log(formData);
        alert("Product Added");
        
        this.proser.AddProduct(formData).subscribe({
          next:(data)=>{
            console.log(data);
            
            
          },
          error:(err)=>{
            console.log(err);
          }
        })
        
      }else{
        alert("Only jpg or png images supported")
      }
    }
  }
  navig(){
    alert("Your Product has been added")
    this.router.navigateByUrl('/products')
  }

}
