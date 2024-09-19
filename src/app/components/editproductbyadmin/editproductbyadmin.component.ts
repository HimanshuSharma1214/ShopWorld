import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/Product/productservice.service';
import { Products } from 'src/app/services/interfaces/Products';

@Component({
  selector: 'app-editproductbyadmin',
  templateUrl: './editproductbyadmin.component.html',
  styleUrls: ['./editproductbyadmin.component.css']
})
export class EditproductbyadminComponent implements OnInit {
id!:number;
filepath:any='';
  constructor(private proser:ProductserviceService,private route:ActivatedRoute) { }
  formdata:Products={
    Id:0,
    CategoryId:0,
    Name:"",
    Description:"",
    price:'',
    quantity:'',
    imagepath:''
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    
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

        this.proser.EditProduct(this.id,formData).subscribe({
          next:(data)=>{
            alert("Product Edited")
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
}
