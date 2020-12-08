import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-historical-data',
  templateUrl: './historical-data.page.html',
  styleUrls: ['./historical-data.page.scss'],
})
export class HistoricalDataPage implements OnInit {

  @ViewChild('popupContainer', { read: ViewContainerRef, static: true }) popupContainerRef: ViewContainerRef;
  @ViewChild('popupTemplate', { read: TemplateRef, static: true }) popupTemplateRef: TemplateRef<any>;

  candleStickChartConfig;
  showChart = false;
  constructor(private baseService: BaseService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    const mockUrl = 'assets/highcharts-candlestick-data.json';
    this.baseService.getLocalMockData(mockUrl).subscribe(res => {
      const data = res;
      this.candleStickChartConfig = {

        AllowDrill: false,
        IsStockChart: true,

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            type: 'candlestick',
            name: 'AAPL Stock Price',
            data: data,
            dataGrouping: {
                units: [
                    [
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]
                ]
            }
        }]
      };
      this.showChart = true;
      this.cdRef.detectChanges();
    });
  }

  openPopup(e: MouseEvent) {
    this.popupContainerRef.clear();
    this.popupContainerRef.createEmbeddedView(this.popupTemplateRef);
  }

  closePopup() {
    this.popupContainerRef.clear();
  }
}
