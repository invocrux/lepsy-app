import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
    
    constructor(
      private readonly platform: Platform,
    ) { 
      this.initializeApp();
    }

  async initializeApp() {
    this.platform.ready().then(async () => {
      await SplashScreen.show();
      try {
        await SplashScreen.hide();
      } catch (error) {
      }
    });
  }
}
