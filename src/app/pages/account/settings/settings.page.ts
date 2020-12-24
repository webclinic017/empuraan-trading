import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  datatype: string
  risk: number
  leverage: string
  user: User
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(u => this.user = u)
    this.userService.getSettings().subscribe((r:any) => {
      console.log(r)
      this.datatype = r.data.datatype
      this.risk = r.data.risk
      this.leverage = r.data.leverage.toString()
    })
  }

  navigateToAccount(){
    this.router.navigate(['home','account'])
  }
  
  dataChange(){
    this.userService.updateSettings(this.user.id, this.datatype, this.risk, this.leverage).subscribe(r => console.log(r))
  }
}
