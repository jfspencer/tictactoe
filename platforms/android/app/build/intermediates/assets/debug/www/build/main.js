webpackJsonp([3],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/local/local-game.module": [
		290,
		2
	],
	"../pages/remote/remote-game.module": [
		291,
		1
	],
	"../pages/settings/settings.module": [
		292,
		0
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_lazy_pages__ = __webpack_require__(287);
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
    //tab2Root = LazyPages.REMOTE_GAME;
    //tab3Root = LazyPages.SETTINGS;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__app_lazy_pages__["a" /* LazyPages */].LOCAL_GAME;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="TicTacToe" tabIcon="home"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="Web TicTacToe" tabIcon="share"></ion-tab> -->\n  <!-- <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="information-circle"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainWorker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_interfaces__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_fp__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_fp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_monet__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_monet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_monet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fluture__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fluture___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fluture__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DomainWorker = /** @class */ (function () {
    function DomainWorker() {
        //lodash difference accounts for left to right or right to left same with top to bottom and vice versa
        this.winningCombinations = [
            ['UL', 'UM', 'UR'],
            ['ML', 'MM', 'MR'],
            ['LL', 'LM', 'LR'],
            ['UL', 'ML', 'LL'],
            ['UM', 'MM', 'LM'],
            ['UR', 'MR', 'LR'],
            ['UL', 'MM', 'LR'],
            ['UR', 'MM', 'LL'],
        ];
    }
    DomainWorker.prototype.startGame = function (isLocal) {
        //gen a new game id
        var gameId = __WEBPACK_IMPORTED_MODULE_5__util__["a" /* Utils */].genId();
        //define a local game
        var newLocalGame = {
            _id: gameId,
            type: __WEBPACK_IMPORTED_MODULE_0__shared_interfaces__["a" /* RecordType */].Game,
            players: [
                { name: 'Chris Nolan', turnId: 0, dbId: 'player0' },
                { name: 'Al Hitchcock', turnId: 1, dbId: 'player1' }
            ],
            activeTurn: 0,
            sequence: {
                _id: __WEBPACK_IMPORTED_MODULE_5__util__["a" /* Utils */].genId(),
                gameId: 'test',
                type: __WEBPACK_IMPORTED_MODULE_0__shared_interfaces__["a" /* RecordType */].MoveSequence,
                moves: []
            },
            gameInProgress: true,
            playersReady: ['player0', 'player1']
        };
        localStorage.setItem('activeGame', gameId);
        return __WEBPACK_IMPORTED_MODULE_4_fluture__["Future"].of(isLocal ? newLocalGame : newLocalGame);
    };
    DomainWorker.prototype.updateGameSequence = function (game, turn) {
        game.sequence.moves = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["union"])(game.sequence.moves, [turn]);
        return Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["assign"])({}, game);
    };
    DomainWorker.prototype.newBoardState = function (game) {
        var newBoardState = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["reduce"])(function (boardState, turnEvent) {
            boardState[turnEvent.move] = turnEvent.turn;
            return boardState;
        }, this.buildEmptyBoard())(game.sequence.moves);
        return Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"])(newBoardState);
    };
    DomainWorker.prototype.determineWinner = function (moveSeq, players) {
        var playerMoves = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["reduce"])(function (accum, val) {
            accum['player' + val.turn] = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["union"])(accum['player' + val.turn], [val.move]);
            return accum;
        }, { player0: [], player1: [] })(moveSeq.moves);
        var checkPlayerMoves = function (moves, won, combo) {
            var test = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["difference"])(combo, moves);
            return won ? true : test.length === 0;
        };
        var p0 = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["reduce"])(Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["curry"])(checkPlayerMoves)(playerMoves.player0), false)(this.winningCombinations);
        var p1 = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["reduce"])(Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["curry"])(checkPlayerMoves)(playerMoves.player1), false)(this.winningCombinations);
        return (p0 ? __WEBPACK_IMPORTED_MODULE_3_monet__["Either"].Left(players[0]) : __WEBPACK_IMPORTED_MODULE_3_monet__["Either"].Right(p1))
            .flatMap(function (p1DidWin) { return p1DidWin ? __WEBPACK_IMPORTED_MODULE_3_monet__["Either"].Left(players[1]) : __WEBPACK_IMPORTED_MODULE_3_monet__["Either"].Right(null); })
            .cata(function (v) { return v; }, function (v) { return v; });
    };
    DomainWorker.prototype.buildEmptyBoard = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"])({
            UL: null, UM: null, UR: null,
            ML: null, MM: null, MR: null,
            LL: null, LM: null, LR: null
        });
    };
    DomainWorker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DomainWorker);
    return DomainWorker;
}());

//# sourceMappingURL=domain.worker.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleton_singleton_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(197);
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

/***/ 250:
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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(101);
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

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
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

/***/ 287:
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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singleton_persist__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleton_domain_worker__ = __webpack_require__(200);
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
            providers: [__WEBPACK_IMPORTED_MODULE_2__singleton_persist__["a" /* Persistence */], __WEBPACK_IMPORTED_MODULE_3__singleton_domain_worker__["a" /* DomainWorker */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [SingletonModule])
    ], SingletonModule);
    return SingletonModule;
}());

//# sourceMappingURL=singleton.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persistence; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { TurnEvent, Game, RecordType, BoardState, MoveSequence } from '@shared/interfaces';
// import * as PouchDB from 'pouchdb';
// import { Future, tryP } from 'fluture';
// import {Utils} from '@singleton/util';
// import { union, curry } from 'lodash';
var Persistence = /** @class */ (function () {
    //gameDb: PouchDB.Database;
    //player0: PouchDB.Database;
    //player1: PouchDB.Database;
    function Persistence() {
    }
    Persistence.prototype.init = function () {
        //init databases
        // this.gameDb = new PouchDB('http://35.165.4.114:5984/games', {auth:{username:'admin', password:'loveseat'}});
        // this.player0 = new PouchDB('http://35.165.4.114:5984/player0', {auth:{username:'admin', password:'loveseat'}});
        // this.player1 = new PouchDB('http://35.165.4.114:5984/player1', {auth:{username:'admin', password:'loveseat'}});
    };
    //updateMoveSequence(game: Game, turn: TurnEvent): Future<{}, BoardState> {
    //write move to players game MoveSequence
    //side effect to update current player's turn
    // const gameState = tryP(() => <any>this.gameDb.get(game._id));
    // gameState.chain((dbGame: Game) => {
    //   dbGame.activeTurn = dbGame.activeTurn === 0 ? 1 : 0;
    //   return tryP(() => this.gameDb.put(dbGame));
    // })
    // .fork(e => console.error(e), v => v);
    //
    // return tryP(() => this[turn.player.dbId].get(game._id))
    // .chain((moveSeq: MoveSequence) => {
    //
    //   moveSeq.moves = union(moveSeq.moves, [turn])
    //   //side effect to update moveSeq
    //   this[turn.player.dbId].put(moveSeq);
    //   return Future.of(moveSeq);
    // })
    // .chain(moveSeq => {
    //   const partialAP:any = curry((moveSeq, moveSeq2) => this.buildBoardState(moveSeq, moveSeq2));
    //   partialAP(moveSeq);
    //   return Future.of(partialAP);
    // })
    // .ap(tryP(() => <any>this[turn.player.dbId === 'player0' ? 'player1' : 'player0'].get(game._id)))
    //}
    Persistence.prototype.getActiveGame = function () {
    };
    Persistence.prototype.setUserReady = function () {
    };
    Persistence.prototype.completeGame = function () {
        //const activeGameId = localStorage.getItem('activeGame');
    };
    Persistence = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Persistence);
    return Persistence;
}());

//# sourceMappingURL=persist.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map