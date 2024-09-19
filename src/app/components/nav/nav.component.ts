import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { CartserviceService } from 'src/app/services/Cart/cartservice.service';
import { AuthstateService } from 'src/app/services/state/authstate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   authState:boolean=false;
   userType:string="user";
 bagcount:any=0;

 localcount:any=localStorage.getItem('count'); 
  constructor(private authstat:AuthstateService,private router:Router,private cartser:CartserviceService) { }
  ngOnInit(): void {
    this.authstat.currAuthState.subscribe(state=>this.authState=state);
    this.authstat.currAuthrole.subscribe(role=>this.userType=role);
    let data:any=localStorage.getItem('token');
    if(data){
      this.authstat.changeAuthState(true);
      var token=JSON.parse(data);
      const decoded:any=jwtDecode<JwtPayload>(token.token);
      this.authstat.changeAuthRole(decoded.Role);
    }
    this.cartser.totalcount.subscribe((val)=>{
      this.bagcount=val;
    })
    
  }
  logout(){
    if(confirm("Do You Want To Log Out")){
      localStorage.clear();
      this.router.navigateByUrl("/");
         window.location.reload();
    }
  }
  orders(){
    this.router.navigateByUrl("/orders")
  }
}
