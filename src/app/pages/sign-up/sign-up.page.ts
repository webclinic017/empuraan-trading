import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.checkIfIsSignUp()
  }
  
  navigateToLogin(){
    this.router.navigate(['home','login'])
  }

  signUp(){
    this.userService.logIn()
    this.router.navigate(['home','dashboard'])
    this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard')
  }

  checkIfIsSignUp(){
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }
}
