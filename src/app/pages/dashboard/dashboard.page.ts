import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import * as Highcharts from 'highcharts';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  leaderboard
  
  constructor(private sanitizer: DomSanitizer, 
    private router: Router, 
    private leaderboardService: LeaderboardService,
    private navCtrl: NavController,
    private userService: UserService){
  }

  ngOnInit() {
    this.leaderboard = this.leaderboardService.leaderboard
    this.checkIfItIsDashboard()
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {
    let myChart = Highcharts.chart('highcharts', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Funds Overview'
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      },
      series: [
        {
          // name: 'Capital',
          type: undefined,
          data: [0, 500, 550, 620, 790, 950, 1200, 810, 910]
        }
      ]
    });
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
