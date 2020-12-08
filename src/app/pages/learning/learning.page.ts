import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video.model';
import { LearningService } from 'src/app/services/learning.service';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {
  videos: Video[]
  
  config: SuperTabsConfig = {
    allowElementScroll: true
  };
  constructor(private sanitizer: DomSanitizer, private learningService: LearningService){
  }

  ngOnInit() {
    this.videos = this.learningService.videos
  }
  
  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
