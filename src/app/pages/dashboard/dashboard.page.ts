import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.sass'],
})
export class DashboardPage implements OnInit{
  data = [
    {
      "name": "Open balance",
      "series": [
        {
          "name": "1",
          "value": 0
        },
        {
          "name": "5",
          "value": 150
        },
        {
          "name": "10",
          "value": 250
        },
        {
          "name": "15",
          "value": 510
        },
        {
          "name": "20",
          "value": 720
        },
        {
          "name": "25",
          "value": 680
        },
      ]
    },
    {
      "name": "Init balance",
      "series": [
        {
          "name": "1",
          "value": 500
        },
        {
          "name": "5",
          "value": 500
        },
        {
          "name": "10",
          "value": 500
        },
        {
          "name": "15",
          "value": 500
        },
        {
          "name": "20",
          "value": 500
        },
        {
          "name": "25",
          "value": 500
        },
      ]
    },
  ];
  leaderboard
  user: User
  balanceLoaded: boolean
  leaderboardLoaded: boolean
  view = []
  
  constructor(private router: Router, 
    private userService: UserService,
    private platform: Platform,
    private screenOrientation: ScreenOrientation){
  }

  ngOnInit(){
    this.balanceLoaded = false
    this.leaderboardLoaded = false
  }

  ionViewDidEnter(){
    this.checkIfItIsDashboard()
    this.platform.isLandscape() 
      ? this.view = [this.platform.width(),300]
      : this.view = [this.platform.width(),300]
    this.screenOrientation.onChange().subscribe((r:any) => {
      this.platform.isPortrait() 
        ? this.view = [r.path[0].innerHeight,300]
        : this.view = [r.path[0].innerHeight,300]
    })
    this.userService.authenticated.subscribe(u => {
      this.user = u.user
      this.userService.accountDetails().subscribe((r:any) => {
        this.user.balance.availableBal = parseFloat(parseFloat(r.account.currentBalance).toFixed(2))
        this.user.balance.openBal = parseFloat(r.account.initialAmount)
        this.user.balance.pAndL = this.user.balance.availableBal - this.user.balance.openBal
        this.user.balance.gain = this.user.balance.pAndL / this.user.balance.openBal
        this.user.balance.currency = r.account.currency
        this.balanceLoaded = true
      })
    })
    this.userService.getFundsChart().subscribe(r => console.log(r))
    this.userService.getLeaderboard().subscribe((r:any) => {
      this.leaderboard = r.data
      this.leaderboardLoaded = true
    })
  }

  navigateToLeaderboard(){
    this.router.navigate(['home','dashboard','leaderboard'])
  }

  navigateToLearning(){
    this.router.navigate(['home','learning'])
  }

  checkIfItIsDashboard(){
    this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url)
  }
}
