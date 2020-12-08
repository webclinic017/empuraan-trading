import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss'],
})
export class ModalPostComponent implements OnInit {
  @Input() blog: Blog
  constructor(private modalCtrl: ModalController){}

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }

}
