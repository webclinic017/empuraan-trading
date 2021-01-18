import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  dataLoaded: boolean
  leaderboard
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dataLoaded = false
    this.userService.getLeaderboard().subscribe((r:any) => {
      this.leaderboard = r.data
      this.dataLoaded = true
    })
  }

}
