import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';
import { Signup } from 'src/app/services/interfaces/SignUp';
import { AuthstateService } from 'src/app/services/state/authstate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   formdata:Signup={
    email:'',
    password:'',
    name:'',
    age:0,
    address:'',
    gender:'',
    Mobile:'',
    role:'user'
   }

  constructor(private router:Router,private authser:AuthstateService,private userserv:UserService) { }

  ngOnInit(): void {
  }

  postdata(){
    this.userserv.registeruser(this.formdata).subscribe({
      next:data=>{
          alert("Sign Up Successfully!!")
          this.router.navigateByUrl("/login")
      },
      error:(err)=>{
         alert("UserName Already Exists")
      }
    })
  }

}
