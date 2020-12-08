import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPostComponent } from 'src/app/modals/modal-post/modal-post.component';
import { Blog } from 'src/app/models/blog.model';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  blogs: Blog[]
  constructor(private learningService: LearningService, private modalController: ModalController) { }

  ngOnInit() {
    this.blogs = this.learningService.blogs
  }

  async openPostModal(blog) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
      componentProps: {blog}
    });
    return await modal.present();
  }
}
