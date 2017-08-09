import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';
import {HomePage} from '../pages/home/home';
import {PlayerPage} from '../pages/player/player';
import {TabsPage} from '../pages/tabs/tabs';
import {DataService} from '../providers/data-service'
import {IonicStorageModule } from '@ionic/storage'
import {ProgressBar} from '../components/player/progressbar';
import {AudioTimePipe} from "../pipes/ionic-audio-time-pipe";
import {PlayerComponent} from "../components/player/player";
import {audioProviderfactory} from "../providers/audioproviderfactory";
import {PodcastsPage} from "../pages/podcasts/podcasts";
import {SearchPage} from "../pages/search/search";
import {SearchService} from "../providers/search-service";
import {JsonpModule} from "@angular/http";
import {MapValuesPipe} from "../pipes/mapvalues-pipe";
import {BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import {NativeAudioManager} from "../providers/nativeaudiomanager";
import {Media} from "@ionic-native/media";
import {MediaMock} from "../providers/media-mock"
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {BackgroundMode} from "@ionic-native/background-mode";
import {Toast} from "@ionic-native/toast";
import {LoginPage} from "../pages/login/login";
import { PasswordAuthProvider } from '../providers/password-auth/password-auth';
import {RegisterPage} from "../pages/register/register";


@NgModule({
    declarations: [
        MyApp,
        PodcastsPage,
        SearchPage,
        BookmarksPage,
        HomePage,
        PlayerPage,
        TabsPage,
        ProgressBar,
        AudioTimePipe,
        MapValuesPipe,
        PlayerComponent,
        LoginPage,
        RegisterPage
    ],
    imports: [
        JsonpModule,
        BrowserModule,
        HttpModule,
        IonicStorageModule.forRoot(),
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
        PlayerPage,
        TabsPage,
        LoginPage,
        RegisterPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {provide: Media, useClass: MediaMock},
        DataService,
        Storage,
        NativeAudioManager,
        SearchService,
        LoginServiceProvider,
        StatusBar,
        SplashScreen,
        BackgroundMode,
        Toast,
        PasswordAuthProvider
    ]
})
export class AppModule {
}
