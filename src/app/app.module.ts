import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {DataService} from '../providers/data-service'
import {Storage} from '@ionic/storage';
import {ProgressBar} from './progressbar';
import {AudioTimePipe} from "./ionic-audio-time-pipe";
import {KeysPipe} from "./keys-pipe";


@NgModule({
    declarations: [
        MyApp,
        BookmarksPage,
        HomePage,
        TabsPage,
        ProgressBar,
        AudioTimePipe,
        KeysPipe
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            tabsPlacement: 'bottom',

        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BookmarksPage,
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
