webpackJsonp([3],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/local/local-game.module": [
		271,
		0
	],
	"../pages/remote/remote-game.module": [
		272,
		2
	],
	"../pages/settings/settings.module": [
		273,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_lazy_pages__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';

var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__app_lazy_pages__["a" /* LazyPages */].LOCAL_GAME;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__app_lazy_pages__["a" /* LazyPages */].REMOTE_GAME;
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__app_lazy_pages__["a" /* LazyPages */].SETTINGS;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="TicTacToe" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Web TicTacToe" tabIcon="share"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleton_singleton_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__singleton_singleton_module__["a" /* SingletonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], { preloadModules: false }, {
                    links: [
                        { loadChildren: '../pages/local/local-game.module#LocalGameModule', name: 'LocalGamePage', segment: 'local-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remote/remote-game.module#RemoteGameModule', name: 'RemoteGamePage', segment: 'remote-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyPages; });
/**
 * IMPORTANT : whenever a new page is created list the page string here, so it can be referred to by reference
 * in the event that a name change is needed, only one literal needs to be changed here.
 */
var LazyPages = /** @class */ (function () {
    function LazyPages() {
    }
    LazyPages.LOCAL_GAME = 'LocalGamePage';
    LazyPages.REMOTE_GAME = 'RemoteGamePage';
    LazyPages.SETTINGS = 'SettingsPage';
    return LazyPages;
}());

//# sourceMappingURL=lazy-pages.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singleton_persist__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SingletonModule = /** @class */ (function () {
    function SingletonModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    SingletonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__singleton_persist__["a" /* Persistence */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [SingletonModule])
    ], SingletonModule);
    return SingletonModule;
}());

//# sourceMappingURL=singleton.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persistence; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fluture__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fluture___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fluture__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleton_util__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Persistence = /** @class */ (function () {
    function Persistence() {
    }
    Persistence.prototype.init = function () {
        //init databases
        this.gameDb = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__('http://35.165.4.114:5984/games', { auth: { username: 'admin', password: 'loveseat' } });
        this.player0 = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__('http://35.165.4.114:5984/player0', { auth: { username: 'admin', password: 'loveseat' } });
        this.player1 = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__('http://35.165.4.114:5984/player1', { auth: { username: 'admin', password: 'loveseat' } });
    };
    Persistence.prototype.updateMoveSequence = function (game, turn) {
        //write move to players game MoveSequence
        var _this = this;
        //side effect to update current player's turn
        var gameState = Object(__WEBPACK_IMPORTED_MODULE_3_fluture__["tryP"])(function () { return _this.gameDb.get(game._id); });
        gameState.chain(function (dbGame) {
            dbGame.activeTurn = dbGame.activeTurn === 0 ? 1 : 0;
            return Object(__WEBPACK_IMPORTED_MODULE_3_fluture__["tryP"])(function () { return _this.gameDb.put(dbGame); });
        })
            .fork(function (e) { return console.error(e); }, function (v) { return v; });
        var processTurn = Object(__WEBPACK_IMPORTED_MODULE_3_fluture__["tryP"])(function () { return _this[turn.player.dbId].get(game._id); });
        processTurn
            .chain(function (moveSeq) {
            moveSeq.moves = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["union"])(moveSeq.moves, [turn]);
            //side effect to update moveSeq
            _this[turn.player.dbId].put(moveSeq);
            return __WEBPACK_IMPORTED_MODULE_3_fluture__["Future"].of(moveSeq);
        })
            .chain(function (moveSeq) {
            var partialAP = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["curry"])(function (moveSeq, moveSeq2) { return _this.buildBoardState(moveSeq, moveSeq2); });
            partialAP(moveSeq);
            return __WEBPACK_IMPORTED_MODULE_3_fluture__["Future"].of(partialAP);
        })
            .ap(Object(__WEBPACK_IMPORTED_MODULE_3_fluture__["tryP"])(function () { return _this[turn.player.dbId === 'player0' ? 'player1' : 'player0'].get(game._id); }));
        //const turnSequence = ;
        //const otherTurnSequence = ;
        //construct a new board state and return as a future
        return __WEBPACK_IMPORTED_MODULE_3_fluture__["Future"].of(this.buildBoardState());
    };
    Persistence.prototype.getActiveGame = function () {
    };
    Persistence.prototype.startGame = function (isLocal) {
        //gen a new game id
        var gameId = __WEBPACK_IMPORTED_MODULE_4__singleton_util__["a" /* Utils */].genId();
        //define a local game
        var newLocalGame = {
            _id: gameId,
            type: __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__["a" /* RecordType */].Game,
            players: [
                { name: 'Christopher Nolan', turnId: 0, dbId: 'player0' },
                { name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1' }
            ],
            activeTurn: 0,
            gameInProgress: true,
            playersReady: ['player0', 'player1']
        };
        localStorage.setItem('activeGame', gameId);
        return __WEBPACK_IMPORTED_MODULE_3_fluture__["Future"].of(isLocal ? newLocalGame : newLocalGame);
    };
    Persistence.prototype.setUserReady = function () {
    };
    Persistence.prototype.completeGame = function () {
        var activeGameId = localStorage.getItem('activeGame');
    };
    Persistence.prototype.buildBoardState = function (seq, seq2) {
        return {
            UL: null, UM: null, UR: null,
            ML: null, MM: null, MR: null,
            LL: null, LM: null, LR: null
        };
    };
    Persistence = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Persistence);
    return Persistence;
}());

//# sourceMappingURL=persist.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordType; });
var RecordType;
(function (RecordType) {
    RecordType["Player"] = "player";
    RecordType["Game"] = "game";
    RecordType["MoveSequence"] = "move-sequence";
})(RecordType || (RecordType = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.genId = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["now"])().toString(36) + Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["random"])(78364164095).toString(36) + (Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["now"])() % 37).toString(36)).toLowerCase();
    };
    return Utils;
}());

//# sourceMappingURL=util.js.map

/***/ })

},[194]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL3RhYnMvdGFicy50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4uLy4uL3NyYy9hcHAvbGF6eS1wYWdlcy50cyIsIi4uLy4uL3NyYy9zaW5nbGV0b24vc2luZ2xldG9uLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaW5nbGV0b24vcGVyc2lzdC50cyIsIi4uLy4uL3NyYy9zaGFyZWQvaW50ZXJmYWNlcy50cyIsIi4uLy4uL3NyYy9zaW5nbGV0b24vdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0Esa0M7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjBDO0FBRTFDLDZDQUE2QztBQUM3QyxtREFBbUQ7QUFFVDtBQUsxQztJQU1FO1FBSkEsYUFBUSxHQUFHLGtFQUFTLENBQUMsVUFBVSxDQUFDO1FBQ2hDLGFBQVEsR0FBRyxrRUFBUyxDQUFDLFdBQVcsQ0FBQztRQUNqQyxhQUFRLEdBQUcsa0VBQVMsQ0FBQyxRQUFRLENBQUM7SUFJOUIsQ0FBQztJQVJVLFFBQVE7UUFIcEIsd0VBQVMsQ0FBQztXQUNlO1NBQ3pCLENBQUM7O09BQ1csUUFBUSxDQVNwQjtJQUFELENBQUM7QUFBQTtTQVRZLFFBQVEs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UUFDRSxJQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxxQ0FBZSxHQUFmLFVBQWdCLEdBQWdCLEVBQUUsSUFBaUI7UUFDakQsTUFBTSxDQUFDO1lBQ0wsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJO1lBQzVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSTtZQUM1QixFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUk7U0FDN0I7SUFDSCxDQUFDO0lBdkZVLFdBQVc7UUFEdkIseUVBQVUsRUFBRTs7T0FDQSxXQUFXLENBeUZ2QjtJQUFELGtCQUFDO0NBQUE7QUF6RnVCOzs7Ozs7Ozs7O0FDRnhCLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNwQiwrQkFBaUI7SUFDakIsMkJBQWE7SUFDYiw0Q0FBOEI7QUFDaEMsQ0FBQyxFQUpXLFVBQVUsS0FBVixVQUFVLFFBSXJCOzs7Ozs7Ozs7Ozs7QUNWb0M7QUFFckM7SUFBQTtJQUlBLENBQUM7SUFIUSxXQUFLLEdBQVo7UUFDRSxNQUFNLENBQUMsQ0FBQyxtREFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNEQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsbURBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNHLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTA4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIG1hcCA9IHtcblx0XCIuLi9wYWdlcy9sb2NhbC9sb2NhbC1nYW1lLm1vZHVsZVwiOiBbXG5cdFx0MjcxLFxuXHRcdDBcblx0XSxcblx0XCIuLi9wYWdlcy9yZW1vdGUvcmVtb3RlLWdhbWUubW9kdWxlXCI6IFtcblx0XHQyNzIsXG5cdFx0MlxuXHRdLFxuXHRcIi4uL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZVwiOiBbXG5cdFx0MjczLFxuXHRcdDFcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHZhciBpZHMgPSBtYXBbcmVxXTtcblx0aWYoIWlkcylcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZHNbMF0pO1xuXHR9KTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IDE0OTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vaW1wb3J0IHsgQWJvdXRQYWdlIH0gZnJvbSAnLi4vYWJvdXQvYWJvdXQnO1xuLy9pbXBvcnQgeyBDb250YWN0UGFnZSB9IGZyb20gJy4uL2NvbnRhY3QvY29udGFjdCc7XG5cbmltcG9ydCB7TGF6eVBhZ2VzfSBmcm9tICdAYXBwL2xhenktcGFnZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICd0YWJzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNQYWdlIHtcblxuICB0YWIxUm9vdCA9IExhenlQYWdlcy5MT0NBTF9HQU1FO1xuICB0YWIyUm9vdCA9IExhenlQYWdlcy5SRU1PVEVfR0FNRTtcbiAgdGFiM1Jvb3QgPSBMYXp5UGFnZXMuU0VUVElOR1M7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3RhYnMvdGFicy50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4udHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY0FwcCwgSW9uaWNNb2R1bGUsIElvbmljRXJyb3JIYW5kbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBNeUFwcCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJzUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3RhYnMvdGFicyc7XG5pbXBvcnQgeyBTaW5nbGV0b25Nb2R1bGUgfSBmcm9tICdAc2luZ2xldG9uL3NpbmdsZXRvbi5tb2R1bGUnXG5cbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNeUFwcCxcbiAgICBUYWJzUGFnZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgU2luZ2xldG9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHAsIHtwcmVsb2FkTW9kdWxlczogZmFsc2V9KVxuICBdLFxuICBib290c3RyYXA6IFtJb25pY0FwcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE15QXBwLFxuICAgIFRhYnNQYWdlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0YXR1c0JhcixcbiAgICBTcGxhc2hTY3JlZW4sXG4gICAge3Byb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5cbmltcG9ydCB7IFRhYnNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvdGFicy90YWJzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE15QXBwIHtcbiAgcm9vdFBhZ2U6YW55ID0gVGFic1BhZ2U7XG5cbiAgY29uc3RydWN0b3IocGxhdGZvcm06IFBsYXRmb3JtLCBzdGF0dXNCYXI6IFN0YXR1c0Jhciwgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4pIHtcbiAgICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gT2theSwgc28gdGhlIHBsYXRmb3JtIGlzIHJlYWR5IGFuZCBvdXIgcGx1Z2lucyBhcmUgYXZhaWxhYmxlLlxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cbiAgICAgIHN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICAgIHNwbGFzaFNjcmVlbi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogSU1QT1JUQU5UIDogd2hlbmV2ZXIgYSBuZXcgcGFnZSBpcyBjcmVhdGVkIGxpc3QgdGhlIHBhZ2Ugc3RyaW5nIGhlcmUsIHNvIGl0IGNhbiBiZSByZWZlcnJlZCB0byBieSByZWZlcmVuY2VcbiAqIGluIHRoZSBldmVudCB0aGF0IGEgbmFtZSBjaGFuZ2UgaXMgbmVlZGVkLCBvbmx5IG9uZSBsaXRlcmFsIG5lZWRzIHRvIGJlIGNoYW5nZWQgaGVyZS5cbiAqL1xuXG5leHBvcnQgY2xhc3MgTGF6eVBhZ2VzIHtcbiAgc3RhdGljIExPQ0FMX0dBTUUgPSAnTG9jYWxHYW1lUGFnZSc7XG4gIHN0YXRpYyBSRU1PVEVfR0FNRSA9ICdSZW1vdGVHYW1lUGFnZSc7XG4gIHN0YXRpYyBTRVRUSU5HUyA9ICdTZXR0aW5nc1BhZ2UnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9sYXp5LXBhZ2VzLnRzIiwiaW1wb3J0IHtOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlfSBmcm9tICdAc2luZ2xldG9uL3BlcnNpc3QnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW1BlcnNpc3RlbmNlXSxcbiAgZXhwb3J0czogW0Jyb3dzZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNpbmdsZXRvbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogU2luZ2xldG9uTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seSdcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2luZ2xldG9uL3NpbmdsZXRvbi5tb2R1bGUudHMiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHVybkV2ZW50LCBHYW1lLCBSZWNvcmRUeXBlLCBCb2FyZFN0YXRlLCBNb3ZlU2VxdWVuY2UgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0ICogYXMgUG91Y2hEQiBmcm9tICdwb3VjaGRiJztcbmltcG9ydCB7IEZ1dHVyZSwgdHJ5UCB9IGZyb20gJ2ZsdXR1cmUnO1xuaW1wb3J0IHtVdGlsc30gZnJvbSAnQHNpbmdsZXRvbi91dGlsJztcbmltcG9ydCB7IHVuaW9uLCBjdXJyeSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzaXN0ZW5jZSB7XG5cbiAgZ2FtZURiOiBQb3VjaERCLkRhdGFiYXNlO1xuICBwbGF5ZXIwOiBQb3VjaERCLkRhdGFiYXNlO1xuICBwbGF5ZXIxOiBQb3VjaERCLkRhdGFiYXNlO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vaW5pdCBkYXRhYmFzZXNcbiAgICB0aGlzLmdhbWVEYiA9IG5ldyBQb3VjaERCKCdodHRwOi8vMzUuMTY1LjQuMTE0OjU5ODQvZ2FtZXMnLCB7YXV0aDp7dXNlcm5hbWU6J2FkbWluJywgcGFzc3dvcmQ6J2xvdmVzZWF0J319KTtcbiAgICB0aGlzLnBsYXllcjAgPSBuZXcgUG91Y2hEQignaHR0cDovLzM1LjE2NS40LjExNDo1OTg0L3BsYXllcjAnLCB7YXV0aDp7dXNlcm5hbWU6J2FkbWluJywgcGFzc3dvcmQ6J2xvdmVzZWF0J319KTtcbiAgICB0aGlzLnBsYXllcjEgPSBuZXcgUG91Y2hEQignaHR0cDovLzM1LjE2NS40LjExNDo1OTg0L3BsYXllcjEnLCB7YXV0aDp7dXNlcm5hbWU6J2FkbWluJywgcGFzc3dvcmQ6J2xvdmVzZWF0J319KTtcbiAgfVxuXG4gIHVwZGF0ZU1vdmVTZXF1ZW5jZShnYW1lOiBHYW1lLCB0dXJuOiBUdXJuRXZlbnQpOiBGdXR1cmU8e30sIEJvYXJkU3RhdGU+IHtcbiAgICAvL3dyaXRlIG1vdmUgdG8gcGxheWVycyBnYW1lIE1vdmVTZXF1ZW5jZVxuXG4gICAgLy9zaWRlIGVmZmVjdCB0byB1cGRhdGUgY3VycmVudCBwbGF5ZXIncyB0dXJuXG4gICAgY29uc3QgZ2FtZVN0YXRlID0gdHJ5UCgoKSA9PiA8YW55PnRoaXMuZ2FtZURiLmdldChnYW1lLl9pZCkpO1xuICAgIGdhbWVTdGF0ZS5jaGFpbigoZGJHYW1lOiBHYW1lKSA9PiB7XG4gICAgICBkYkdhbWUuYWN0aXZlVHVybiA9IGRiR2FtZS5hY3RpdmVUdXJuID09PSAwID8gMSA6IDA7XG4gICAgICByZXR1cm4gdHJ5UCgoKSA9PiB0aGlzLmdhbWVEYi5wdXQoZGJHYW1lKSk7XG4gICAgfSlcbiAgICAuZm9yayhlID0+IGNvbnNvbGUuZXJyb3IoZSksIHYgPT4gdik7XG5cbiAgICByZXR1cm4gdHJ5UCgoKSA9PiB0aGlzW3R1cm4ucGxheWVyLmRiSWRdLmdldChnYW1lLl9pZCkpXG4gICAgLmNoYWluKChtb3ZlU2VxOiBNb3ZlU2VxdWVuY2UpID0+IHtcblxuICAgICAgbW92ZVNlcS5tb3ZlcyA9IHVuaW9uKG1vdmVTZXEubW92ZXMsIFt0dXJuXSlcbiAgICAgIC8vc2lkZSBlZmZlY3QgdG8gdXBkYXRlIG1vdmVTZXFcbiAgICAgIHRoaXNbdHVybi5wbGF5ZXIuZGJJZF0ucHV0KG1vdmVTZXEpO1xuICAgICAgcmV0dXJuIEZ1dHVyZS5vZihtb3ZlU2VxKTtcbiAgICB9KVxuICAgIC5jaGFpbihtb3ZlU2VxID0+IHtcbiAgICAgIGNvbnN0IHBhcnRpYWxBUDphbnkgPSBjdXJyeSgobW92ZVNlcSwgbW92ZVNlcTIpID0+IHRoaXMuYnVpbGRCb2FyZFN0YXRlKG1vdmVTZXEsIG1vdmVTZXEyKSk7XG4gICAgICBwYXJ0aWFsQVAobW92ZVNlcSk7XG4gICAgICByZXR1cm4gRnV0dXJlLm9mKHBhcnRpYWxBUCk7XG4gICAgfSlcbiAgICAuYXAodHJ5UCgoKSA9PiA8YW55PnRoaXNbdHVybi5wbGF5ZXIuZGJJZCA9PT0gJ3BsYXllcjAnID8gJ3BsYXllcjEnIDogJ3BsYXllcjAnXS5nZXQoZ2FtZS5faWQpKSlcbiAgfVxuXG4gIGdldEFjdGl2ZUdhbWUoKSB7XG5cbiAgfVxuXG4gIHN0YXJ0R2FtZShpc0xvY2FsOiBib29sZWFuKTogRnV0dXJlPG5ldmVyLCBHYW1lPiB7XG4gICAgLy9nZW4gYSBuZXcgZ2FtZSBpZFxuICAgIGNvbnN0IGdhbWVJZCA9IFV0aWxzLmdlbklkKCk7XG5cbiAgICAvL2RlZmluZSBhIGxvY2FsIGdhbWVcbiAgICBjb25zdCBuZXdMb2NhbEdhbWU6IEdhbWUgPSB7XG4gICAgX2lkOiBnYW1lSWQsXG4gICAgdHlwZTogUmVjb3JkVHlwZS5HYW1lLFxuICAgIHBsYXllcnM6IFtcbiAgICAgIHtuYW1lOiAnQ2hyaXN0b3BoZXIgTm9sYW4nLCB0dXJuSWQ6IDAsIGRiSWQ6ICdwbGF5ZXIwJ30sXG4gICAgICB7bmFtZTogJ0FsZnJlZCBIaXRjaGNvY2snLCB0dXJuSWQ6IDEsIGRiSWQ6ICdwbGF5ZXIxJ31dLFxuICAgICAgYWN0aXZlVHVybjogMCxcbiAgICAgIGdhbWVJblByb2dyZXNzOiB0cnVlLFxuICAgICAgcGxheWVyc1JlYWR5OiBbJ3BsYXllcjAnLCAncGxheWVyMSddXG4gICAgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlR2FtZScsIGdhbWVJZCk7XG4gICAgcmV0dXJuIEZ1dHVyZS5vZihpc0xvY2FsID8gbmV3TG9jYWxHYW1lIDogbmV3TG9jYWxHYW1lKTtcbiAgfVxuXG4gIHNldFVzZXJSZWFkeSgpIHtcblxuICB9XG5cbiAgY29tcGxldGVHYW1lKCkge1xuICAgIGNvbnN0IGFjdGl2ZUdhbWVJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVHYW1lJyk7XG4gIH1cblxuICBidWlsZEJvYXJkU3RhdGUoc2VxOiBUdXJuRXZlbnRbXSwgc2VxMjogVHVybkV2ZW50W10pOiBCb2FyZFN0YXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgVUw6IG51bGwsIFVNOiBudWxsLCBVUjogbnVsbCxcbiAgICAgIE1MOiBudWxsLCBNTTogbnVsbCwgTVI6IG51bGwsXG4gICAgICBMTDogbnVsbCwgTE06IG51bGwsIExSOiBudWxsXG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaW5nbGV0b24vcGVyc2lzdC50cyIsIi8vdmFsaWQgbW92ZXNcbmV4cG9ydCB0eXBlIE1vdmUgPVxuICAnVUwnIHwgJ1VNJyB8ICdVUicgfFxuICAnTUwnIHwgJ01NJyB8ICdNUicgfFxuICAnTEwnIHwgJ0xNJyB8ICdMUic7XG5cbmV4cG9ydCBlbnVtIFJlY29yZFR5cGUge1xuICBQbGF5ZXIgPSAncGxheWVyJyxcbiAgR2FtZSA9ICdnYW1lJyxcbiAgTW92ZVNlcXVlbmNlID0gJ21vdmUtc2VxdWVuY2UnXG59XG5cbi8qKlxuRWFjaCBnYW1lIGlzIG1hZGUgdXAgb2YgYSBHYW1lIHJlY29yZCBhbmQgdHdvIE1vdmVTZXF1ZW5jZSByZWNvcmRzIChvbmUgZm9yIGVhY2ggcGxheWVyKVxuYSBwbGF5ZXIgd3JpdGVzIHRvIHRoZWlyIG93biBtb3ZlIHNlcXVlbmNlIHJlY29yZCBhbmQgcmVhZHMgZnJvbSB0aGUgb3RoZXIgcGxheWVycy5cbioqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWUge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIF9yZXY/OiBzdHJpbmc7XG4gICAgdHlwZTogUmVjb3JkVHlwZS5HYW1lO1xuICAgIHBsYXllcnM6IEdhbWVQbGF5ZXJzO1xuICAgIGFjdGl2ZVR1cm46IG51bWJlcjtcbiAgICBnYW1lSW5Qcm9ncmVzczogYm9vbGVhbjtcbiAgICBwbGF5ZXJzUmVhZHk6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVTZXF1ZW5jZSB7XG4gIF9pZDogc3RyaW5nOyAvL2lkIHdpbGwgYmUgYSBmb3JpZWduIGtleSBvZiB0aGUgZ2FtZSByZWNvcmRcbiAgZ2FtZUlkOiBzdHJpbmc7XG4gIHR5cGU6IFJlY29yZFR5cGUuTW92ZVNlcXVlbmNlO1xuICBtb3ZlczogVHVybkV2ZW50W107XG59XG5cbi8vdGhpcyBpcyBhIGdlbmVyYXRlZCBzdGF0ZSB0byBzdXBwb3J0IHRoZSBnYW1lLWJvYXJkIGNvbXBvbmVudCBVSVxuZXhwb3J0IGludGVyZmFjZSBCb2FyZFN0YXRlIHtcbiAgVUw6IG51bWJlcjsgVU06IG51bWJlcjsgVVI6IG51bWJlcjtcbiAgTUw6IG51bWJlcjsgTU06IG51bWJlcjsgTVI6IG51bWJlcjtcbiAgTEw6IG51bWJlcjsgTE06IG51bWJlcjsgTFI6IG51bWJlcjtcbn1cblxuLy9wYXJ0aWNsZSBzdXBwb3J0aW5nIHRoZSBNb3ZlU2VxdWVuY2UgVHlwZSBhbmQgb3RoZXIgVUkgZWxlbWVudHNcbmV4cG9ydCBpbnRlcmZhY2UgVHVybkV2ZW50IHtcbiAgbW92ZTogTW92ZTtcbiAgdHVybjogbnVtYmVyO1xuICB0aW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVBsYXllcnMge1xuICBbaW5kZXg6IG51bWJlcl06IFBsYXllcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR1cm5JZDogbnVtYmVyO1xuICBkYklkOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2ludGVyZmFjZXMudHMiLCJpbXBvcnQgeyBub3csIHJhbmRvbSB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHN0YXRpYyBnZW5JZCgpIHtcbiAgICByZXR1cm4gKG5vdygpLnRvU3RyaW5nKDM2KSArIHJhbmRvbSg3ODM2NDE2NDA5NSkudG9TdHJpbmcoMzYpICsgKG5vdygpICUgMzcpLnRvU3RyaW5nKDM2KSkudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpbmdsZXRvbi91dGlsLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==