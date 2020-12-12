import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User
  users: User[] = [
    {
      id: 1,
      firstname: 'Ibrahim',
      lastname: 'Sefer',
      email: 'seferibrahim2@gmail.com',
      password: '1234567890',
      imgUrl: 'IS',
      balance: {
        openBal: 6200,
        availableBal: 6000,
        pAndL: 100,
        gain: 0.02
      }
    }
  ]
  isLoggedIn: boolean = false
  isOnLoginOrSignUpPage = new Subject<boolean>()
  constructor(private router: Router) { }

  logIn(input){
    const email = input.email
    const password = input.password
    const userInDb = this.users.find(u => u.email == email)
    if(userInDb != null && userInDb.password == password){
      this.isLoggedIn = true
      // await LocalNotifications.requestPermission()
      this.user = userInDb
    } else this.isLoggedIn = false
  }

  signUp(user: User){
    if(!this.checkIfUserIsInDb(user.email)){
      this.users.push(user)
      this.router.navigate(['home','login'])
    } else return 'This email is already used.'
  }

  logout(){
    this.isLoggedIn = false
  }

  checkIfIsOnLoginOrSignUpPage(link: string){
    link.includes('login') || link.includes('sign-up')
      ? this.isOnLoginOrSignUpPage.next(true)
      : this.isOnLoginOrSignUpPage.next(false)
  }

  generateId(){
    if(this.users.length == 0) return 1
    else return this.users.length + 1
  }

  checkIfUserIsInDb(email){
    const userInDb = this.users.find(u => u.email == email)
    if(userInDb != null) return true
    else return false
  }

  changePassword(newPassword: string, confirmPassword: string){
    if(newPassword == confirmPassword) this.user.password = newPassword
    else return false
  }

  add(amount: number){
    this.user.balance.openBal += amount
    this.user.balance.availableBal += amount
  }
  
  withdraw(amount: number){
    if((this.user.balance.openBal - amount) >= 0)
      this.user.balance.openBal -= amount
    if((this.user.balance.availableBal - amount) >= 0)
      this.user.balance.availableBal -= amount
  }
}
