import { Component, OnInit } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core'
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Local } from 'protractor/built/driverProviders';

const { Network, LocalNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{
  networkListener: PluginListenerHandle
  networkStatus: NetworkStatus 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private push: Push
  ) {}

  async ngOnInit(){
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status)
      this.networkStatus = status
      if(!this.networkStatus.connected)
        this.connectionLostNotification()
    })
    this.initializeApp();
  }
  async connectionLostNotification(){
    await LocalNotifications.schedule({
      notifications: [{
        id: 1,
        title: 'You\'ve lost internet connection',
        body: 'Any progress accomplished during this time will be lost.'
      }]
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
