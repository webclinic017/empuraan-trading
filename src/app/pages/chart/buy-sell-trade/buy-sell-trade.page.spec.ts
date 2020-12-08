import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuySellTradePage } from './buy-sell-trade.page';

describe('BuySellTradePage', () => {
  let component: BuySellTradePage;
  let fixture: ComponentFixture<BuySellTradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellTradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuySellTradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
