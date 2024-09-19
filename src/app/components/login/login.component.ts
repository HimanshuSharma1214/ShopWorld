import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { UserService } from 'src/app/services/User/user.service';
import { LoginUser } from 'src/app/services/interfaces/Login';
import { AuthstateService } from 'src/app/services/state/authstate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 formdata:LoginUser={
      email:'',
      password:''
 }
 
  constructor(private router:Router,private authserv:AuthstateService,private userserv:UserService) { }

  ngOnInit(): void {
  }
  
  postData(){
    
     this.userserv.checkLogin(this.formdata).subscribe({
      next:data=>{
          const decoded:any = jwtDecode<JwtPayload>(data.token);
        console.log(decoded)
      this.authserv.changeAuthState(true);
         if(decoded.Role=="admin"){
          this.authserv.changeAuthRole("admin");
         }else{
          this.authserv.changeAuthRole("user");
         }
         
      localStorage.setItem('token',JSON.stringify(data));
      alert(`${decoded.Role} is logged in`)
      this.router.navigateByUrl("/");
      },
      error:(err)=>{
        console.log(err);
        alert("User Not Registered,First Register")
        this.router.navigateByUrl("/signup");
      }
     })
  }  

}
