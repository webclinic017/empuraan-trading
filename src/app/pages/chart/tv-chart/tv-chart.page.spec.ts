import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvChartPage } from './tv-chart.page';

describe('TvChartPage', () => {
  let component: TvChartPage;
  let fixture: ComponentFixture<TvChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvChartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
