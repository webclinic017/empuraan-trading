import {Directive, ElementRef, Input, OnInit, EventEmitter, AfterViewInit, Output} from '@angular/core';
import {Gesture, GestureController} from '@ionic/angular';


@Directive({
  selector: '[appDoubleTap]'
})
export class DoubleTapDirective implements OnInit {
  @Output() eventHandler: EventEmitter<any> = new EventEmitter<any>();
  lastOnStart: number = 0
  DOUBLE_CLICK_THRESHOLD: number = 500
  
  constructor(private gestureCtrl: GestureController, private el: ElementRef){}
  
  ngOnInit() {
    const gesture = this.gestureCtrl.create({
      gestureName: 'double-tap',
      el: this.el.nativeElement,
      threshold: 0,
      onStart: () => { this.onStart() }
    });
  
    gesture.enable();
  }
  
  onStart() {
    const now = Date.now();
  
    if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
      this.eventHandler.emit({ eventType: 'render' });
      this.lastOnStart = 0;
    } else {
      this.lastOnStart = now;
    }
  }
}
