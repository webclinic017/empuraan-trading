import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartWrapperPage } from './chart-wrapper.page';

describe('ChartWrapperPage', () => {
  let component: ChartWrapperPage;
  let fixture: ComponentFixture<ChartWrapperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWrapperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartWrapperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
