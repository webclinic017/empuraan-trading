import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = true
  isOnLoginOrSignUpPage = new Subject<boolean>()
  constructor() { }

  logIn(){
    this.isLoggedIn = true
  }

  logout(){
    this.isLoggedIn = false
  }

  checkIfIsOnLoginOrSignUpPage(link: string){
    link.includes('login') || link.includes('sign-up')
      ? this.isOnLoginOrSignUpPage.next(true)
      : this.isOnLoginOrSignUpPage.next(false)
  }
}
