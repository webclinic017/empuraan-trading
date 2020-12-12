import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalWithdrawAddFundsComponent } from './modal-withdraw-add-funds.component';

describe('ModalWithdrawAddFundsComponent', () => {
  let component: ModalWithdrawAddFundsComponent;
  let fixture: ComponentFixture<ModalWithdrawAddFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWithdrawAddFundsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalWithdrawAddFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
