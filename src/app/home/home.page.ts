import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  isLoginOrSignUp: boolean
  constructor(private userService: UserService) {}

  ngOnInit(){
    this.userService.isOnLoginOrSignUpPage.subscribe(b => this.isLoginOrSignUp = b)
  }

}
