import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Subject } from 'rxjs';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = true
  isOnLoginOrSignUpPage = new Subject<boolean>()
  constructor() { }

  async logIn(){
    this.isLoggedIn = true
    await LocalNotifications.requestPermission()
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
