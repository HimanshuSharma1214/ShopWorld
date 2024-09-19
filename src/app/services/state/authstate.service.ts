import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthstateService {

    private authstate = new BehaviorSubject<boolean>(false);
    currAuthState=this.authstate.asObservable();

    private authrole= new BehaviorSubject<string>("user");
    currAuthrole=this.authrole.asObservable();

  constructor() { }

  changeAuthState(newState:boolean){
    this.authstate.next(newState);
  }
  changeAuthRole(newRole:string){
    this.authrole.next(newRole);
  }


}
