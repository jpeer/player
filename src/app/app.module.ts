import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {DataService} from '../providers/data-service'
import {Storage} from '@ionic/storage';
import {ProgressBar} from '../components/player/progressbar';
import {AudioTimePipe} from "../pipes/ionic-audio-time-pipe";
import {KeysPipe} from "../pipes/keys-pipe";
import {IAudioManager} from "../providers/audiomanager";
import {PlayerComponent} from "../components/player/player";
import {audioProviderfactory} from "../providers/audioproviderfactory";
import {PodcastsPage} from "../pages/podcasts/podcasts";
import {SearchPage} from "../pages/search/search";
import {SearchService} from "../providers/search-service";
import {JsonpModule} from "@angular/http";


@NgModule({
    declarations: [
        MyApp,
        PodcastsPage,
        SearchPage,
        BookmarksPage,
        HomePage,
        TabsPage,
        ProgressBar,
        AudioTimePipe,
        KeysPipe,
        PlayerComponent
    ],
    imports: [
        JsonpModule,
        IonicModule.forRoot(MyApp, {
            tabsPlacement: 'bottom',

        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        PodcastsPage,
        SearchPage,
        BookmarksPage,
        HomePage,
        TabsPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
        DataService,
        Storage,
        {provide: IAudioManager, useFactory: audioProviderfactory},
        SearchService
    ]
})
export class AppModule {
}
