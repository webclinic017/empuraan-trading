import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }

  login(form: NgForm){
    this.userService.logIn(form.value).subscribe((res:any) => {
      console.log(res)
      localStorage.setItem('token', res.jwt)
      this.userService.decodedToken = res.jwt
      const user: User = {
        id: res.user._id,
        email: res.user.email,
        username: res.user.username,
        balance: {
          availableBal: 0,
          openBal: 0,
          pAndL: 0,
          gain: 0
        }
      }
      this.userService.user = user
      form.resetForm()
      this.router.navigate(['home','dashboard'])
      this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard')
    })
  }
}
