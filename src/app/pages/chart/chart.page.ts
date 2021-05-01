import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import axios from 'axios';
import { ticksToTickChart, TradeTick } from "candlestick-convert";
import { ChartService } from 'src/app/services/chart.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit, OnDestroy, AfterViewInit {
  @Input() symbol;
  tradingview;
  ws;
  wsMessage = 'you may need to send specific message to subscribe data, eg: BTC';
  hold = true;
  stockId: string
  watchlistId: string
  uToken: string

  granularityMap = {
    '1': 60,
    '5': 300,
    '30': 30 * 60,
    '60': 60 * 60,
    '120': 60 * 60 * 2,
    '240': 60 * 60 * 4,
    '360': 60 * 60 * 6,
    'D': 86400
  };

  constructor(private chartService: ChartService,
    private route: ActivatedRoute,
    private userService: UserService) {
  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.route.params.subscribe(p => {
      this.stockId = p.sId
      this.watchlistId = p.wId
      console.log(p)
    })
    this.userService.authenticated.subscribe(u => {
      console.log(u)
      this.uToken = u.token
    })
    this.ws = this.chartService.fakeWebSocket();

    this.ws.onopen = () => {
      console.log('connect success');
      this.drawTv();
    };

  }

  // ionViewDidLoad() {
  // }

  ngOnDestroy() {
    this.ws.close();
  }

  drawTv() {
    const that = this;

    this.tradingview = new (window as any).TradingView.widget({
      // debug: true, // uncomment this line to see Library errors and warnings in the console
      fullscreen: true,
      timezone: 'Asia/Kolkata',
      symbol: that.symbol,
      interval: '1',
      container_id: 'tradingview',
      library_path: 'assets/vendors/charting_library/',
      locale: 'en',
      disabled_features: [
        // 'timeframes_toolbar',
        // 'go_to_date',
        // 'use_localstorage_for_settings',
        'volume_force_overlay',
        // 'show_interval_dialog_on_key_press',
        'symbol_search_hot_key',
        'study_dialog_search_control',
        'display_market_status',
        /*'header_compare',
        'header_symbol_search',
        'header_fullscreen_button',
        'header_settings',
        'header_chart_type',
        'header_resolutions',*/
        'control_bar',
        'edit_buttons_in_legend',
        'border_around_the_chart',
        // 'main_series_scale_menu',
        'star_some_intervals_by_default',
        'datasource_copypaste',
        'header_indicators',
        // 'context_menus',
        // 'compare_symbol',
        'header_undo_redo',
        'border_around_the_chart',
        'timezone_menu',
        'remove_library_container_border',
      ],
      allow_symbol_change: true,
      enabled_features: ['study_templates'],
      // charts_storage_url: 'http://saveload.tradingview.com',
      charts_storage_api_version: '1.1',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      // timezone: 'America/New_York',
      volumePaneSize: 'tiny',
      datafeed: {
        onReady(x) {
          timer(1e3)
            .pipe(
              tap(() => {
                x({
                  supported_resolutions: ['1', '5', '30', '60', '120', '240', '360', 'D']
                });
              })
            ).subscribe();
        },
        getBars(symbol, granularity, startTime, endTime, onResult, onError, isFirst) {
          console.log('granularity', granularity);
          // console.log(startTime, endTime);
          // console.log('getBars:', arguments[1]);
          // console.log('symbol:', symbol);
          const instance = axios.create({
            baseURL: environment.apiUrl
          });
          instance.defaults.headers.common['Authorization'] = 'Bearer ' + this.uToken;
          instance.defaults.headers.post['Content-Type'] = 'application/json';
          this.hold = true;
          // stockid/watchlistId
          instance.get(`/stocks/history/${this.stockId}/${this.watchlistId}/${granularity}`).then((res) => {

            var finalDataSet = res.data.data.historyData;
            finalDataSet.map((val) => {
              val.time = val.date;
              val.vol = val.volume;
              return val;
            });
            console.log(finalDataSet);
            onResult(finalDataSet, { noData: false });
            this.hold = false;
          });

          // that.mockService.getHistoryList({
          //   granularity: that.granularityMap[granularity],
          //   startTime,
          //   endTime
          // }).subscribe((data: any) => {
          //   // push the history data to callback
          //   console.log(data);
          //   onResult(data);
          // });
        },
        resolveSymbol(symbol, onResolve) {
          console.log('resolveSymbol:', arguments);
          timer(1e3)
            .pipe(
              tap(() => {
                onResolve({
                  name: that.symbol,
                  full_name: that.symbol, // display on the chart
                  base_name: that.symbol,
                  has_intraday: true, // enable minute and others
                });
              })
            ).subscribe();
        },
        getServerTime() {
          console.log('serverTime:', arguments);
        },
        subscribeBars(symbol, granularity, onTick) {
          that.chartService.listen(`${this.stockId}-${this.watchlistId}`)
            .subscribe(async (res: any) => {
              if (res) {
                res.map((val) => {
                  val.volume = val.vol;
                  return val;
                });

                console.log(res[0]);
                if (!this.hold) {
                  // console.log(res[0]);
                  onTick(res[0]);
                }
              }

            });


          // that.ws.onmessage = (e) => {
          //   try {
          //     const data = e;
          //     if (data) {
          //       // realtime data
          //       // data's timestamp === recent one ? Update the recent one : A new timestamp data
          //       // in this example mock service always returns a new timestamp(current time)
          //       console.log(data)
          //       onTick(data);
          //     }
          //   } catch (e) {
          //     console.error(e);
          //   }
          // };

          // // subscribe the realtime data
          // that.ws.send(`${that.wsMessage}_kline_${that.granularityMap[granularity]}`);
        },
        unsubscribeBars() {
          console.log('refreshing');
          // that.ws.send('stop receiving data or just close websocket');
        },
      },
    });
  }
}