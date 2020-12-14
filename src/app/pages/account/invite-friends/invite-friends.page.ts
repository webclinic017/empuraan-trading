import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.page.html',
  styleUrls: ['./invite-friends.page.scss'],
})
export class InviteFriendsPage implements OnInit {
  link: string = "https://somelinktosomething.com"
  googlePlayLink: string = "https://play.google.com/store/apps/details?id=" + 'io.ionic.starter'
  constructor(private router: Router, private toastController: ToastController, private clipboard: Clipboard,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

  shareLink(){
    this.socialSharing.share(
      '',
      'Invite friends', 
      '', 
      this.link).then(()=>{})
  }

  navigateToAccount(){
    this.router.navigate(['home','account'])
  }

  async showToast(){
    this.clipboard.copy(this.link);
    const toast = await this.toastController.create({
      message: 'Link is copied to your clipboard',
      duration: 2500
    })
    toast.present()
  }
}
