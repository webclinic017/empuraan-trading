import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { StockService } from 'src/app/services/stock.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  data = [
    {
      "name": "Germany",
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
    }
  ];
  view: any[] = [700, 300];
  leaderboard
  user: User
  
  constructor(private sanitizer: DomSanitizer, 
    private router: Router, 
    private leaderboardService: LeaderboardService,
    private navCtrl: NavController,
    private userService: UserService,
    private stockService: StockService){
  }
  clgJWT(){
    this.stockService.getStocks().subscribe(res => console.log(res))
    // this.stockService.initStocks().subscribe(res => console.log(res))
  }
  ngOnInit() {
    this.leaderboard = this.leaderboardService.leaderboard
    this.user = this.userService.user
    this.checkIfItIsDashboard()
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
