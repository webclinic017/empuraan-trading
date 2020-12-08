import { ModalUploadPostComponent } from 'src/app/modals/modal-upload-post/modal-upload-post.component';
import { LearningService } from 'src/app/services/learning.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ModalController } from '@ionic/angular';
import { ModalPostComponent } from 'src/app/modals/modal-post/modal-post.component';

@Component({
  selector: 'app-positional',
  templateUrl: './positional.page.html',
  styleUrls: ['./positional.page.scss'],
})
export class PositionalPage implements OnInit {
  positionalPosts: Post[]
  constructor(private modalController: ModalController,private learningService: LearningService) { }

  ngOnInit() {
    this.positionalPosts = this.learningService.positional
  }

  async openUploadPostModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalUploadPostComponent,
      componentProps: {positional: true}
    });
    return await modal.present();
  }
  async openPostModal(positional) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
      componentProps: {blog: positional}
    });
    return await modal.present();
  }
}
