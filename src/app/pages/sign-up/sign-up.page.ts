import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from 'hammerjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  passwordsMatching: boolean
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.checkIfIsSignUp()
  }
  
  navigateToLogin(){
    this.router.navigate(['home','login'])
  }

  signUp(input){
    if(this.checkIfPasswordsMatch(input.password, input.confirmPassword) && !this.userService.checkIfUserIsInDb(input.email)){
      const user: User = {
        id: this.userService.generateId(),
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        password: input.password,
        imgUrl: input.firstname[0] + input.lastname[0],
        balance: {
          availableBal: 0,
          openBal: 0,
          pAndL: 0,
          gain: 0
        }
      }
      this.userService.signUp(user)
      // this.router.navigate(['home','dashboard'])
      this.userService.checkIfIsOnLoginOrSignUpPage('/home/login')
    }
  }

  checkIfIsSignUp(){
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }

  checkIfPasswordsMatch(password, confirmPassword){
    if(password === confirmPassword) {
      this.passwordsMatching = true
      return true
    } else {
      this.passwordsMatching = false
      return false
    }
  }
}
