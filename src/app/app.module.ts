import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {DataService} from '../providers/data-service'
import {Storage} from '@ionic/storage';
import {ProgressBar} from './progressbar';
import {AudioTimePipe} from "./ionic-audio-time-pipe";


@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        ProgressBar,
        AudioTimePipe
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
        DataService,
        Storage
    ]
})
export class AppModule {
}
