import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.checkIfIsLogin()
  }

  navigateToSignup(){
    this.router.navigate(['home','sign-up'])
  }

  login(input){
    this.userService.logIn(input)
    if(this.userService.isLoggedIn){
      this.router.navigate(['home','dashboard'])
      this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard')
    }
  }

  checkIfIsLogin(){
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }
}
