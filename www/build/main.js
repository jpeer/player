webpackJsonp([0],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_nativeaudiomanager__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressBar = (function () {
    function ProgressBar() {
        this.range = 0;
    }
    ProgressBar.prototype.ngDoCheck = function () {
        this.range = Math.round(this.audioManager.progressPct * 100) / 100;
    };
    ProgressBar.prototype.seekTo = function () {
        var gotoProgress = this.range * this.audioManager.duration / 100;
        this.audioManager.seekTo(gotoProgress);
    };
    return ProgressBar;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__providers_nativeaudiomanager__["a" /* NativeAudioManager */])
], ProgressBar.prototype, "audioManager", void 0);
ProgressBar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',
        template: "\n    <ion-range [(ngModel)]=\"range\" min=\"0\" max=\"100\" (ionChange)=\"seekTo()\" name=\"progress\" ngDefaultControl>\n      <time range-left>{{audioManager.progress | audioTime}}</time>\n      <time range-right>{{audioManager.duration | audioTime}}</time>\n    </ion-range>\n    "
    })
], ProgressBar);

//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_nativeaudiomanager__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = (function () {
    function PlayerComponent(audioManager) {
        this.audioManager = audioManager;
        this._currentItem = null;
    }
    Object.defineProperty(PlayerComponent.prototype, "currentItem", {
        get: function () {
            return this._currentItem;
        },
        set: function (item) {
            if (item === null) {
                return;
            }
            if (this._currentItem !== null && this._currentItem.link === item.link) {
                this.audioManager.seekTo(0);
                return;
            }
            this._currentItem = item;
            this.audioManager.loadTrack(item.src);
            this.audioManager.play();
        },
        enumerable: true,
        configurable: true
    });
    PlayerComponent.prototype.onPlay = function () {
        this.audioManager.play();
    };
    PlayerComponent.prototype.onPause = function () {
        this.audioManager.pause();
    };
    PlayerComponent.prototype.skipAhead = function () {
        var progress = this.audioManager.progress;
        this.audioManager.seekTo(progress + 30);
    };
    PlayerComponent.prototype.skipBack = function () {
        var progress = this.audioManager.progress;
        this.audioManager.seekTo(progress - 30);
    };
    return PlayerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PlayerComponent.prototype, "currentItem", null);
PlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'player',template:/*ion-inline-start:"/Users/jpeer/code/player/src/components/player/player.html"*/'<div *ngIf="currentItem"> Current: {{currentItem.title}}</div>\n\n<div *ngIf="audioManager">\n    <progress-bar [audioManager]="audioManager"></progress-bar>\n</div>\n<div>\n    <button ion-button round (click)="skipBack()">-30s</button>\n    <button ion-button round (click)="onPlay()">\n        <ion-icon name="play"></ion-icon>\n    </button>\n    <button ion-button round (click)="onPause()">\n        <ion-icon name="pause"></ion-icon>\n    </button>\n    <button ion-button round (click)="skipAhead()">+30s</button>\n</div>'/*ion-inline-end:"/Users/jpeer/code/player/src/components/player/player.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_nativeaudiomanager__["a" /* NativeAudioManager */]])
], PlayerComponent);

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapValuesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapValuesPipe = (function () {
    function MapValuesPipe() {
    }
    MapValuesPipe.prototype.transform = function (value, args) {
        var returnArray = [];
        value.forEach(function (entryVal, entryKey) {
            returnArray.push({
                key: entryKey,
                val: entryVal
            });
        });
        return returnArray;
    };
    return MapValuesPipe;
}());
MapValuesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'mapValues' })
], MapValuesPipe);

//# sourceMappingURL=mapvalues-pipe.js.map

/***/ }),

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MediaObjectMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_media__ = __webpack_require__(249);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MediaObjectMock = (function (_super) {
    __extends(MediaObjectMock, _super);
    function MediaObjectMock() {
        return _super.call(this, null) || this;
    }
    return MediaObjectMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_media__["c" /* MediaObject */]));

var MediaMock = (function (_super) {
    __extends(MediaMock, _super);
    function MediaMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaMock.prototype.create = function (src) {
        return new MediaObjectMock();
    };
    return MediaMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_media__["b" /* Media */]));

//# sourceMappingURL=media-mock.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginServiceProvider = (function () {
    function LoginServiceProvider(storage) {
        this.storage = storage;
        console.log('Hello LoginServiceProvider Provider');
    }
    LoginServiceProvider.prototype.isLoggedIn = function () {
        return this.storage.get('userdata')
            .then(function (val) { return val != undefined; });
    };
    LoginServiceProvider.prototype.setLoggedIn = function (userInfo) {
        return this.storage.set('userdate', userInfo);
    };
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookmarks_bookmarks__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__podcasts_podcasts__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__podcasts_podcasts__["a" /* PodcastsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__bookmarks_bookmarks__["a" /* BookmarksPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Bookmarks" tabIcon="bookmarks"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeAudioManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_media__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NativeAudioManager = (function () {
    function NativeAudioManager(media) {
        this.media = media;
        this._status = __WEBPACK_IMPORTED_MODULE_0__ionic_native_media__["a" /* MEDIA_STATUS */].NONE;
        this._seekToRequest = -1;
    }
    NativeAudioManager.prototype.loadTrack = function (url) {
        this.src = url;
        if (this.audio) {
            this.audio.stop();
            this.audio.release();
            this.audio = null;
        }
    };
    NativeAudioManager.prototype.play = function () {
        if (this._seekToRequest !== -1) {
            this._seekToRequest = -1;
        }
        if (this.audio) {
            this.audio.play({ playAudioWhenScreenIsLocked: true });
            this.startTimer();
            return;
        }
        this.audio = this.media.create(this.src);
        // this.audio = new MediaPlugin(this.src, (status) => {
        //     if(this._status === MediaPlugin.MEDIA_RUNNING && this._seekToRequest !== -1) {
        //         this.audio.seekTo(this._seekToRequest * 1000);
        //         this._seekToRequest = -1;
        //     }
        //     this._status = status;
        // });
        this.audio.play({ playAudioWhenScreenIsLocked: true });
        this.startTimer();
    };
    NativeAudioManager.prototype.pause = function () {
        this.audio.pause();
        this.stopTimer();
    };
    /* expect in seconds */
    NativeAudioManager.prototype.seekTo = function (time) {
        console.log('seekto unvoked!', time, this._status);
        if (this._status !== __WEBPACK_IMPORTED_MODULE_0__ionic_native_media__["a" /* MEDIA_STATUS */].RUNNING) {
            this._seekToRequest = time;
        }
        else {
            this.audio.seekTo(time * 1000);
        }
    };
    Object.defineProperty(NativeAudioManager.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativeAudioManager.prototype, "progress", {
        /* return in seconds */
        get: function () {
            return this._progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativeAudioManager.prototype, "progressPct", {
        /* returns number between 0 and 100 */
        get: function () {
            return this._progressPct;
        },
        enumerable: true,
        configurable: true
    });
    NativeAudioManager.prototype.startTimer = function () {
        var _this = this;
        this._timer = setInterval(function () {
            if (_this._duration === undefined || _this._duration < 0) {
                _this._duration = Math.round(_this.audio.getDuration() * 100) / 100;
            }
            _this._duration = _this.audio.getDuration();
            _this.audio.getCurrentPosition().then(function (pos) {
                _this._progress = pos;
                _this._progressPct = (_this._progress / _this._duration) * 100;
            });
        }, 1000);
    };
    NativeAudioManager.prototype.stopTimer = function () {
        clearInterval(this._timer);
    };
    return NativeAudioManager;
}());
NativeAudioManager = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_media__["b" /* Media */]])
], NativeAudioManager);

//# sourceMappingURL=nativeaudiomanager.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_nativeaudiomanager__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_ionic_audio_time_pipe__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_util__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlayerPage = (function () {
    function PlayerPage(navCtrl, navParams, dataService, audioManager, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.audioManager = audioManager;
        this.toast = toast;
        this.seekTo = -1;
        this.track = navParams.data.track;
        this.dataService.getBookmarks().subscribe(function (bm) {
            console.log('bookmarks got updated');
            _this.currentBookmarks = Object.assign({}, bm.get(navParams.data.track.link));
        });
        if (Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_util__["h" /* isDefined */])(navParams.data.seekTo)) {
            this.seekTo = navParams.data.seekTo;
        }
    }
    PlayerPage.prototype.ionViewDidLoad = function () {
        this.audioManager.play();
        if (this.seekTo !== -1) {
            this.audioManager.seekTo(this.seekTo);
        }
    };
    PlayerPage.prototype.addBookmark = function () {
        this.dataService.addBookmark(this.track, this.audioManager.progress);
        if (window.hasOwnProperty('cordova')) {
            this.toast.show('Bookmark added at position ' + new __WEBPACK_IMPORTED_MODULE_5__pipes_ionic_audio_time_pipe__["a" /* AudioTimePipe */]().transform(this.audioManager.progress), '2000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        }
    };
    PlayerPage.prototype.removeBookmark = function (idx) {
        this.dataService.removeBookmark(this.track.link, idx);
    };
    PlayerPage.prototype.seekBookmark = function (idx) {
        this.audioManager.seekTo(this.currentBookmarks.positions[idx]);
    };
    return PlayerPage;
}());
PlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-player',template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/player/player.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{track.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-img *ngIf="track.picUrl" width="140" height="140" src="{{track.picUrl}}"></ion-img>\n\n  <player [currentItem]="track"></player>\n\n  <div>\n    <button ion-button round (click)="addBookmark()">Add bookmark</button>\n  </div>\n\n  <ion-list >\n    <ion-item-sliding *ngFor="let pos of currentBookmarks.positions; let idx = index">\n\n      <ion-item (click)="seekBookmark(idx)">\n        <ion-icon name="ios-bookmark-outline"></ion-icon>\n        {{(idx+1)}} - {{pos | audioTime}}\n      </ion-item>\n\n      <ion-item-options side="right" (ionSwipe)="removeBookmark(idx)">\n        <button ion-button color="primary" expandable (click)="removeBookmark(idx)">\n          <ion-icon name="remove-circle"></ion-icon>\n          Remove\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/player/player.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_nativeaudiomanager__["a" /* NativeAudioManager */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */]])
], PlayerPage);

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, params, dataService, loginService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.loginService = loginService;
        this.currentPodcast = params.data.podcast;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Homepage ngOnInit()");
        this.dataService.getPodcastData(this.currentPodcast.feed).then(function (res) {
            _this.currentPodcastData = res;
        }, function (err) {
            _this.error = err;
        });
        this.loginService.isLoggedIn().then(function (isLoggedIn) {
            if (isLoggedIn) {
                console.log('cool, you are logged in');
            }
            else {
                console.log('well well well, you are not logged in');
            }
        });
    };
    HomePage.prototype.onItemClicked = function (idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { track: this.currentPodcastData.items[idx] });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <div *ngIf="!currentPodcastData">Loading...</div>\n            <div *ngIf="currentPodcastData">{{currentPodcastData.title}}</div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngIf="currentPodcastData">\n        <ion-list>\n            <ion-item *ngFor="let track of currentPodcastData.items; let idx = index" (click)="onItemClicked(idx)">\n                <ion-thumbnail item-start>\n                    <img src="{{track.picUrl}}">\n                </ion-thumbnail>\n                <div item-content style="width:100%">\n                    <p><strong>{{track.title}}</strong></p>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordAuthProvider = (function () {
    function PasswordAuthProvider(http) {
        this.http = http;
        console.log('Hello PasswordAuthProvider Provider');
    }
    PasswordAuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    PasswordAuthProvider.prototype.signupUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/userProfile').child(newUser.uid)
                .set({ email: email });
            return Promise.resolve(newUser);
        });
    };
    PasswordAuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    PasswordAuthProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signOut();
    };
    return PasswordAuthProvider;
}());
PasswordAuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PasswordAuthProvider);

var _a;
//# sourceMappingURL=password-auth.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 276;

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 319;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookmarksPage = (function () {
    function BookmarksPage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.bookmarks = new Map();
    }
    BookmarksPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getBookmarks().subscribe(function (bm) {
            console.log('bookmarks got updated');
            _this.bookmarks = new Map(bm);
        });
    };
    BookmarksPage.prototype.removeBookmark = function (uri, idx) {
        this.dataService.removeBookmark(uri, idx);
    };
    BookmarksPage.prototype.onClick = function (uri, idx) {
        var bm = this.bookmarks.get(uri);
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["p" /* isUndefined */])(bm)) {
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { track: bm.metadata, seekTo: bm.positions[idx] });
    };
    return BookmarksPage;
}());
BookmarksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bookmarks',template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/bookmarks/bookmarks.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Bookmarks\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf="bookmarks">\n\n        <ion-list *ngFor="let x of bookmarks | mapValues">\n            <ion-list-header>\n                <ion-thumbnail item-left>\n                    <img src="{{x.val.metadata.picUrl}}">\n                </ion-thumbnail>\n                <div item-content style="width:100%">\n                    <p><strong>{{x.val.metadata.title}}</strong></p>\n                </div>\n            </ion-list-header>\n            <ion-item-sliding *ngFor="let pos of x.val.positions; let idx = index">\n\n                <ion-item (click)="onClick(x.val.metadata.link, idx)">\n                    <ion-icon name="ios-bookmark-outline"></ion-icon>\n                    {{(idx+1)}} - {{pos | audioTime}}\n                </ion-item>\n\n                <ion-item-options side="right" (ionSwipe)="removeBookmark(x.val.metadata.link, idx)">\n                    <button ion-button color="primary" expandable (click)="removeBookmark(x.val.metadata.link, idx)">\n                        <ion-icon name="remove-circle"></ion-icon>\n                        Remove\n                    </button>\n                </ion-item-options>\n\n            </ion-item-sliding>\n\n        </ion-list>\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/bookmarks/bookmarks.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], BookmarksPage);

//# sourceMappingURL=bookmarks.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * A pipe to convert milliseconds to a string representation
 *
 * TAKEN FROM: https://github.com/arielfaur/ionic-audio
 *
 * @export
 * @class AudioTimePipe
 * @implements {PipeTransform}
 */
var AudioTimePipe = (function () {
    function AudioTimePipe() {
    }
    /**
     * Transforms milliseconds to hh:mm:ss
     *
     * @method transform
     * @param {number} [value] The milliseconds
     * @return {string} hh:mm:ss
     */
    AudioTimePipe.prototype.transform = function (value) {
        if (value === undefined || Number.isNaN(value))
            return '';
        var s = Math.trunc(value % 60);
        var m = Math.trunc((value / 60) % 60);
        var h = Math.trunc(((value / 60) / 60) % 60);
        return h > 0 ? (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) : (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
    };
    return AudioTimePipe;
}());
AudioTimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'audioTime' })
], AudioTimePipe);

//# sourceMappingURL=ionic-audio-time-pipe.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PodcastsPage = (function () {
    function PodcastsPage(navCtrl, navParams, dataService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.toast = toast;
        this.podcastsMetadata = new Map();
    }
    PodcastsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataService.getPodcastsMetaData().subscribe(function (metadata) {
            console.log('podcastsMetadata got updated');
            _this.podcastsMetadata = new Map(metadata);
        });
    };
    PodcastsPage.prototype.openNavDetailsPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { podcast: item });
    };
    PodcastsPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    PodcastsPage.prototype.removePodcastMetadata = function (feedUrl) {
        this.dataService.removePodcastMetaData(feedUrl);
        if (window.hasOwnProperty('cordova')) {
            this.toast.show('Podcast removed', '2000', 'center').subscribe(function (t) { console.log(t); });
        }
    };
    return PodcastsPage;
}());
PodcastsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-podcasts',template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/podcasts/podcasts.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Podcasts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button round (click)="openSearchPage()">Search Podcasts</button>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of podcastsMetadata | mapValues" >\n\n      <ion-item (click)="openNavDetailsPage(item.val)">\n        {{ item.val.title }}\n      </ion-item>\n\n      <ion-item-options side="right" (ionSwipe)="removePodcastMetadata(item.val.feed)">\n        <button ion-button color="primary" expandable (click)="removePodcastMetadata(item.val.feed)">\n          <ion-icon name="remove-circle"></ion-icon>\n          Remove\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/podcasts/podcasts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */]])
], PodcastsPage);

//# sourceMappingURL=podcasts.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, searchService, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchService = searchService;
        this.dataService = dataService;
        this.searchResults = [];
        this.searchQuery = '';
    }
    SearchPage.prototype.searchByKeyword = function (event) {
        var _this = this;
        if (this.searchQuery.trim().length == 0) {
            return;
        }
        this.searchService.findPodcasts(this.searchQuery.trim()).subscribe(function (data) {
            _this.searchResults = data;
        });
    };
    SearchPage.prototype.openHomePage = function (item) {
        console.log('opening now: ', JSON.stringify(item));
        this.dataService.addPodcastMetaData(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { podcast: item });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Search Podcasts\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar [(ngModel)]="searchQuery" (ionInput)="searchByKeyword($event)" [showCancelButton]="true" [debounce]="750"></ion-searchbar>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of searchResults" (click)="openHomePage(item)">\n      {{ item.title }}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = SearchService_1 = (function () {
    function SearchService(jsonp) {
        this.jsonp = jsonp;
    }
    SearchService.prototype.extractData = function (res) {
        console.log(res.json());
        var data = res.json().results;
        return data.map(function (elem) {
            return { title: elem['collectionName'], feed: elem['feedUrl'] };
        });
    };
    SearchService.prototype.findPodcasts = function (searchTerm) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]('entity=podcast&media=podcast&callback=JSONP_CALLBACK');
        params.set('term', searchTerm);
        return this.jsonp.get(SearchService_1.URL_STUB, { search: params })
            .map(this.extractData);
    };
    return SearchService;
}());
SearchService.URL_STUB = 'https://itunes.apple.com/search';
SearchService = SearchService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]])
], SearchService);

var SearchService_1;
//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_password_auth_password_auth__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, loginServiceProvider, passwordAuthProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loginServiceProvider = loginServiceProvider;
        this.passwordAuthProvider = passwordAuthProvider;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        console.log('loginUser was called!');
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
            return;
        }
        this.passwordAuthProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
            .then(function (authData) {
            console.log('great, got back some authdata', JSON.stringify(authData));
            _this.loginServiceProvider.setLoggedIn(authData.uid).then(function () {
                return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            });
        }, function (err) {
            console.log('not so greate, got back some error', err);
        });
    };
    LoginPage.prototype.goToSignup = function () {
        console.log('goToSignup was called!');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goToResetPassword = function () {
        console.log('goToResetPassword was called!');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n                 [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your password"\n                 [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="!loginForm.controls.password.valid  && loginForm.controls.password.dirty">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n      Login\n    </button>\n\n  </form>\n\n  <button ion-button block clear (click)="goToSignup()">\n    Create a new account\n  </button>\n\n  <button ion-button block clear (click)="goToResetPassword()">\n    I forgot my password\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_password_auth_password_auth__["a" /* PasswordAuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_password_auth_password_auth__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, loginServiceProvider, passwordAuthProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.loginServiceProvider = loginServiceProvider;
        this.passwordAuthProvider = passwordAuthProvider;
        this.formBuilder = formBuilder;
        this.registerForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        console.log('ok registering now', this.registerForm.getRawValue());
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
            return;
        }
        this.passwordAuthProvider.signupUser(this.registerForm.value.email, this.registerForm.value.password)
            .then(function (authData) {
            console.log('great, got back some authdata', JSON.stringify(authData));
            _this.loginServiceProvider.setLoggedIn(authData.uid).then(function () {
                return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            });
        }, function (err) {
            console.log('not so great, got back some error', err);
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/jpeer/code/player/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="registerForm" (submit)="registerUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n                 [class.invalid]="!registerForm.controls.email.valid && registerForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="!registerForm.controls.email.valid  && registerForm.controls.email.dirty">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your password"\n                 [class.invalid]="!registerForm.controls.password.valid && registerForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="!registerForm.controls.password.valid  && registerForm.controls.password.dirty">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password (Repeat)</ion-label>\n      <ion-input formControlName="password2" type="password" placeholder="Your password"\n                 [class.invalid]="registerForm.controls.password2.dirty && registerForm.controls.password2.value != registerForm.controls.password.value"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="!registerForm.controls.password2.valid  && registerForm.controls.password2.dirty">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="registerForm.controls.password.valid && registerForm.controls.password2.valid && registerForm.controls.password2.value != registerForm.controls.password.value">\n      <p>Password and control do not match.</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!registerForm.valid">\n      Register\n    </button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_password_auth_password_auth__["a" /* PasswordAuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(508);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_bookmarks_bookmarks__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_player_player__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_player_progressbar__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_ionic_audio_time_pipe__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_player_player__ = __webpack_require__(1098);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_podcasts_podcasts__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_search_service__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_mapvalues_pipe__ = __webpack_require__(1099);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_login_service_login_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_nativeaudiomanager__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_media_mock__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_password_auth_password_auth__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_register_register__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_podcasts_podcasts__["a" /* PodcastsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_player_player__["a" /* PlayerPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__components_player_progressbar__["a" /* ProgressBar */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_ionic_audio_time_pipe__["a" /* AudioTimePipe */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_mapvalues_pipe__["a" /* MapValuesPipe */],
            __WEBPACK_IMPORTED_MODULE_11__components_player_player__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_register_register__["a" /* RegisterPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                tabsPlacement: 'bottom',
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_podcasts_podcasts__["a" /* PodcastsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_player_player__["a" /* PlayerPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_register_register__["a" /* RegisterPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__["b" /* Media */], useClass: __WEBPACK_IMPORTED_MODULE_21__providers_media_mock__["a" /* MediaMock */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_data_service__["a" /* DataService */],
            Storage,
            __WEBPACK_IMPORTED_MODULE_19__providers_nativeaudiomanager__["a" /* NativeAudioManager */],
            __WEBPACK_IMPORTED_MODULE_14__providers_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_18__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_27__providers_password_auth_password_auth__["a" /* PasswordAuthProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_service_login_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, backgroundMode, loginService) {
        var _this = this;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.backgroundMode = backgroundMode;
        this.loginService = loginService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.initializeApp({
            apiKey: "AIzaSyDT49BcSuSRGipcz60ceaRZTIsV9G5CJ8o",
            authDomain: "podmarks.firebaseapp.com",
            databaseURL: "https://podmarks.firebaseio.com",
            projectId: "podmarks",
            storageBucket: "podmarks.appspot.com",
            messagingSenderId: "936243294138"
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.backgroundMode.enable();
            loginService.isLoggedIn().then(function (loginStatus) {
                splashScreen.hide();
                if (!loginStatus) {
                    console.log("dude, you are not logged in.");
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jpeer/code/player/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jpeer/code/player/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_7__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

var request = __webpack_require__(553);
var FeedParser = __webpack_require__(755);

var getFeed = function (url) {

    return new Promise(function (resolve, reject) {

        var title = '';
        var items = [];

        request.get(url)
            .on('error', function (error) {
                console.error(error);
                reject(error);
            })
            .pipe(new FeedParser())
            .on('error', function (error) {
                console.error(error);
                reject(error);
            })
            .on('meta', function (meta) {
                title = meta.title;
            })
            .on('readable', function () {
                var stream = this, item;
                while (item = stream.read()) {
                    if(item.enclosures.length == 0) { continue; }
                    items.push({
                        title: item.title,
                        src: item.enclosures[0].url,
                        picUrl: item.image.url,
                        link: item.link
                    });
                }
            })
            .on('end', function () {
                 resolve({title: title, items: items})
            });
    });
}

module.exports = { getFeed: getFeed };


/***/ }),

/***/ 591:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_rss__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_rss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__util_rss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = DataService_1 = (function () {
    function DataService(storage) {
        var _this = this;
        this.storage = storage;
        this.activePodcast = null;
        this.bookmarks = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](new Map());
        this.podcastsMetaData = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](new Map());
        storage.get(DataService_1.STORAGE_KEY).then(function (bookmarks) {
            if (bookmarks) {
                _this.bookmarks.next(bookmarks);
            }
        });
        storage.get(DataService_1.PODCASTS_KEY).then(function (podcasts) {
            if (podcasts) {
                _this.podcastsMetaData.next(podcasts);
            }
        });
    }
    DataService.prototype.getPodcastsMetaData = function () {
        return this.podcastsMetaData.asObservable();
    };
    DataService.prototype.addPodcastMetaData = function (podcast) {
        var _this = this;
        this.podcastsMetaData.getValue().set(podcast.feed, podcast);
        this.storage.set(DataService_1.PODCASTS_KEY, this.podcastsMetaData.getValue()).then(function (val) { _this.podcastsMetaData.next(val); });
    };
    DataService.prototype.removePodcastMetaData = function (feedUri) {
        var _this = this;
        this.podcastsMetaData.getValue().delete(feedUri);
        this.storage.set(DataService_1.STORAGE_KEY, this.podcastsMetaData.getValue()).then(function (val) { _this.podcastsMetaData.next(val); });
    };
    DataService.prototype.getActivePodcast = function () {
        return this.activePodcast;
    };
    DataService.prototype.getPodcastData = function (url) {
        console.log('getting data from: ', url);
        return Object(__WEBPACK_IMPORTED_MODULE_1__util_rss__["getFeed"])(url);
    };
    DataService.prototype.getActivePodcastData = function () {
        return this.getPodcastData(this.getActivePodcast());
    };
    DataService.prototype.getBookmarks = function () {
        return this.bookmarks.asObservable();
    };
    DataService.prototype.addBookmark = function (item, pos) {
        var _this = this;
        var bookmark = this.bookmarks.getValue().get(item.link);
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["p" /* isUndefined */])(bookmark)) {
            bookmark = { 'positions': [], 'metadata': item };
            this.bookmarks.getValue().set(item.link, bookmark);
        }
        bookmark.positions.push(pos);
        this.storage.set(DataService_1.STORAGE_KEY, this.bookmarks.getValue()).then(function (val) { _this.bookmarks.next(val); });
    };
    /* URI: the logical link of the podcast episode, not the physical mp3 URL */
    DataService.prototype.removeBookmark = function (uri, idx) {
        var _this = this;
        var bookmark = this.bookmarks.value.get(uri);
        var positions = bookmark['positions'];
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["p" /* isUndefined */])(positions) || positions.length < idx - 1) {
            console.log('something wrong');
            return;
        }
        positions.splice(idx, 1);
        if (positions.length === 0) {
            delete this.bookmarks.value[uri];
        }
        this.storage.set(DataService_1.STORAGE_KEY, this.bookmarks.getValue()).then(function (val) { _this.bookmarks.next(val); });
    };
    return DataService;
}());
DataService.STORAGE_KEY = 'bookmarks.v3';
DataService.PODCASTS_KEY = 'podcasts';
DataService = DataService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], DataService);

var DataService_1;
//# sourceMappingURL=data-service.js.map

/***/ })

},[503]);
//# sourceMappingURL=main.js.map