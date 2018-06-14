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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__singleton_util__ = __webpack_require__(260);
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
        var gameId = __WEBPACK_IMPORTED_MODULE_5__singleton_util__["a" /* Utils */].genId();
        //define a local game
        var newLocalGame = {
            _id: gameId,
            type: __WEBPACK_IMPORTED_MODULE_0__shared_interfaces__["a" /* RecordType */].Game,
            players: [
                { name: 'Christopher Nolan', turnId: 0, dbId: 'player0' },
                { name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1' }
            ],
            activeTurn: 0,
            sequence: {
                _id: __WEBPACK_IMPORTED_MODULE_5__singleton_util__["a" /* Utils */].genId(),
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
        return Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"])(game);
    };
    DomainWorker.prototype.newBoardState = function (game) {
        var newGame = Object(__WEBPACK_IMPORTED_MODULE_2_lodash_fp__["reduce"])(function (boardState, turnEvent) {
            boardState[turnEvent.move] = turnEvent.turn;
            return boardState;
        }, this.buildEmptyBoard())(game.sequence.moves);
        return Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"])(newGame);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL3RhYnMvdGFicy50cyIsIi4uLy4uL3NyYy9zaW5nbGV0b24vZG9tYWluLndvcmtlci50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvaW50ZXJmYWNlcy50cyIsIi4uLy4uL3NyYy9zaW5nbGV0b24vdXRpbC50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4uLy4uL3NyYy9hcHAvbGF6eS1wYWdlcy50cyIsIi4uLy4uL3NyYy9zaW5nbGV0b24vc2luZ2xldG9uLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaW5nbGV0b24vcGVyc2lzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0Esa0M7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjBDO0FBRTFDLDZDQUE2QztBQUM3QyxtREFBbUQ7QUFFVDtBQUsxQztJQUdFLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFFaEM7UUFKQSxhQUFRLEdBQUcsa0VBQVMsQ0FBQyxVQUFVLENBQUM7SUFNaEMsQ0FBQztJQVJVLFFBQVE7UUFIcEIsd0VBQVMsQ0FBQztXQUNlO1NBQ3pCLENBQUM7O09BQ1csUUFBUSxDQVNwQjtJQUFELENBQUM7QUFBQTtTQVRZLFFBQVEsZTs7Ozs7Ozs7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RCxlQUFlLENBUTNCO0lBQUQsc0JBQUM7Q0FBQTtBQVIyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUN6Qyw4RkFBOEY7QUFDOUYsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBR3pDO0lBRUUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFHNUI7SUFDQSxDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNFLGdCQUFnQjtRQUNoQiwrR0FBK0c7UUFDL0csa0hBQWtIO1FBQ2xILGtIQUFrSDtJQUNwSCxDQUFDO0lBRUQsMkVBQTJFO0lBQ3pFLHlDQUF5QztJQUV6Qyw2Q0FBNkM7SUFDN0MsZ0VBQWdFO0lBQ2hFLHNDQUFzQztJQUN0Qyx5REFBeUQ7SUFDekQsZ0RBQWdEO0lBQ2hELEtBQUs7SUFDTCx3Q0FBd0M7SUFDeEMsRUFBRTtJQUNGLDBEQUEwRDtJQUMxRCxzQ0FBc0M7SUFDdEMsRUFBRTtJQUNGLGlEQUFpRDtJQUNqRCxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLCtCQUErQjtJQUMvQixLQUFLO0lBQ0wsc0JBQXNCO0lBQ3RCLGlHQUFpRztJQUNqRyx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLEtBQUs7SUFDTCxtR0FBbUc7SUFDckcsR0FBRztJQUVILG1DQUFhLEdBQWI7SUFFQSxDQUFDO0lBSUQsa0NBQVksR0FBWjtJQUVBLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0UsMERBQTBEO0lBQzVELENBQUM7SUF4RFUsV0FBVztRQUR2Qix5RUFBVSxFQUFFOztPQUNBLFdBQVcsQ0EwRHZCO0lBQUQsa0JBQUM7Q0FBQTtBQTFEdUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDExMDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBtYXAgPSB7XG5cdFwiLi4vcGFnZXMvbG9jYWwvbG9jYWwtZ2FtZS5tb2R1bGVcIjogW1xuXHRcdDI5MCxcblx0XHQyXG5cdF0sXG5cdFwiLi4vcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lLm1vZHVsZVwiOiBbXG5cdFx0MjkxLFxuXHRcdDFcblx0XSxcblx0XCIuLi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGVcIjogW1xuXHRcdDI5Mixcblx0XHQwXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHR2YXIgaWRzID0gbWFwW3JlcV07XG5cdGlmKCFpZHMpXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWRzWzBdKTtcblx0fSk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSAxNTE7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vL2ltcG9ydCB7IEFib3V0UGFnZSB9IGZyb20gJy4uL2Fib3V0L2Fib3V0Jztcbi8vaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tICcuLi9jb250YWN0L2NvbnRhY3QnO1xuXG5pbXBvcnQge0xhenlQYWdlc30gZnJvbSAnQGFwcC9sYXp5LXBhZ2VzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAndGFicy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJzUGFnZSB7XG5cbiAgdGFiMVJvb3QgPSBMYXp5UGFnZXMuTE9DQUxfR0FNRTtcbiAgLy90YWIyUm9vdCA9IExhenlQYWdlcy5SRU1PVEVfR0FNRTtcbiAgLy90YWIzUm9vdCA9IExhenlQYWdlcy5TRVRUSU5HUztcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvdGFicy90YWJzLnRzIiwiaW1wb3J0IHsgUGxheWVyLCBNb3ZlU2VxdWVuY2UsIEdhbWVQbGF5ZXJzLCBHYW1lLCBUdXJuRXZlbnQsIFJlY29yZFR5cGUsIEJvYXJkU3RhdGUgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVkdWNlLCB1bmlvbiwgY3VycnksIGRpZmZlcmVuY2UgfSBmcm9tICdsb2Rhc2gvZnAnO1xuaW1wb3J0IHsgRWl0aGVyIH0gZnJvbSAnbW9uZXQnO1xuaW1wb3J0IHsgRnV0dXJlIH0gZnJvbSAnZmx1dHVyZSc7XG5pbXBvcnQgeyBVdGlsc30gZnJvbSAnQHNpbmdsZXRvbi91dGlsJztcbmltcG9ydCB7Y2xvbmVEZWVwfSBmcm9tICdsb2Rhc2gnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5Xb3JrZXIge1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxuXG4gIHN0YXJ0R2FtZShpc0xvY2FsOiBib29sZWFuKTogRnV0dXJlPG5ldmVyLCBHYW1lPiB7XG4gICAgLy9nZW4gYSBuZXcgZ2FtZSBpZFxuICAgIGNvbnN0IGdhbWVJZCA9IFV0aWxzLmdlbklkKCk7XG5cbiAgICAvL2RlZmluZSBhIGxvY2FsIGdhbWVcbiAgICBjb25zdCBuZXdMb2NhbEdhbWU6IEdhbWUgPSB7XG4gICAgX2lkOiBnYW1lSWQsXG4gICAgdHlwZTogUmVjb3JkVHlwZS5HYW1lLFxuICAgIHBsYXllcnM6IFtcbiAgICAgIHtuYW1lOiAnQ2hyaXN0b3BoZXIgTm9sYW4nLCB0dXJuSWQ6IDAsIGRiSWQ6ICdwbGF5ZXIwJ30sXG4gICAgICB7bmFtZTogJ0FsZnJlZCBIaXRjaGNvY2snLCB0dXJuSWQ6IDEsIGRiSWQ6ICdwbGF5ZXIxJ31dLFxuICAgICAgYWN0aXZlVHVybjogMCxcbiAgICAgIHNlcXVlbmNlOiB7XG4gICAgICAgIF9pZDogVXRpbHMuZ2VuSWQoKSwgLy9pZCB3aWxsIGJlIGEgZm9yaWVnbiBrZXkgb2YgdGhlIGdhbWUgcmVjb3JkXG4gICAgICAgIGdhbWVJZDogJ3Rlc3QnLFxuICAgICAgICB0eXBlOiBSZWNvcmRUeXBlLk1vdmVTZXF1ZW5jZSxcbiAgICAgICAgbW92ZXM6IFtdXG4gICAgICB9LFxuICAgICAgZ2FtZUluUHJvZ3Jlc3M6IHRydWUsXG4gICAgICBwbGF5ZXJzUmVhZHk6IFsncGxheWVyMCcsICdwbGF5ZXIxJ11cbiAgICB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVHYW1lJywgZ2FtZUlkKTtcbiAgICByZXR1cm4gRnV0dXJlLm9mKGlzTG9jYWwgPyBuZXdMb2NhbEdhbWUgOiBuZXdMb2NhbEdhbWUpO1xuICB9XG5cbiAgdXBkYXRlR2FtZVNlcXVlbmNlKGdhbWU6IEdhbWUsIHR1cm46IFR1cm5FdmVudCkge1xuICAgIGdhbWUuc2VxdWVuY2UubW92ZXMgPSB1bmlvbihnYW1lLnNlcXVlbmNlLm1vdmVzLCBbdHVybl0pXG4gICAgcmV0dXJuIGNsb25lRGVlcChnYW1lKTtcbiAgfVxuXG4gIG5ld0JvYXJkU3RhdGUoZ2FtZTogR2FtZSkgOiBCb2FyZFN0YXRlIHtcbiAgICBjb25zdCBuZXdHYW1lID0gcmVkdWNlKChib2FyZFN0YXRlLCB0dXJuRXZlbnQ6IFR1cm5FdmVudCApID0+IHtcbiAgICAgIGJvYXJkU3RhdGVbdHVybkV2ZW50Lm1vdmVdID0gdHVybkV2ZW50LnR1cm47XG4gICAgICByZXR1cm4gYm9hcmRTdGF0ZTtcbiAgICB9LCB0aGlzLmJ1aWxkRW1wdHlCb2FyZCgpKShnYW1lLnNlcXVlbmNlLm1vdmVzKTtcbiAgICByZXR1cm4gY2xvbmVEZWVwKG5ld0dhbWUpO1xuICB9XG5cbiAgZGV0ZXJtaW5lV2lubmVyKG1vdmVTZXE6IE1vdmVTZXF1ZW5jZSwgcGxheWVyczogR2FtZVBsYXllcnMpOiBQbGF5ZXIgfCBudWxsIHtcbiAgICBjb25zdCBwbGF5ZXJNb3ZlcyA9IHJlZHVjZSgoYWNjdW0sIHZhbDogVHVybkV2ZW50KSA9PiB7XG4gICAgICBhY2N1bVsncGxheWVyJyArIHZhbC50dXJuXSA9IHVuaW9uKGFjY3VtWydwbGF5ZXInICsgdmFsLnR1cm5dLCBbdmFsLm1vdmVdKTtcbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LCB7cGxheWVyMDogW10sIHBsYXllcjE6IFtdfSkobW92ZVNlcS5tb3Zlcyk7XG5cbiAgICBjb25zdCBjaGVja1BsYXllck1vdmVzID0gKG1vdmVzLCB3b24sIGNvbWJvOnN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCB0ZXN0ID0gZGlmZmVyZW5jZShjb21ibywgbW92ZXMpXG4gICAgICByZXR1cm4gd29uID8gdHJ1ZSA6IHRlc3QubGVuZ3RoID09PSAwfTtcbiAgICBjb25zdCBwMCA9IHJlZHVjZShjdXJyeShjaGVja1BsYXllck1vdmVzKShwbGF5ZXJNb3Zlcy5wbGF5ZXIwKSwgZmFsc2UpKHRoaXMud2lubmluZ0NvbWJpbmF0aW9ucyk7XG4gICAgY29uc3QgcDEgPSByZWR1Y2UoY3VycnkoY2hlY2tQbGF5ZXJNb3ZlcykocGxheWVyTW92ZXMucGxheWVyMSksIGZhbHNlKSh0aGlzLndpbm5pbmdDb21iaW5hdGlvbnMpO1xuICAgIHJldHVybiAocDAgPyBFaXRoZXIuTGVmdChwbGF5ZXJzWzBdKSA6IEVpdGhlci5SaWdodChwMSkpXG4gICAgICAuZmxhdE1hcChwMURpZFdpbiA9PiBwMURpZFdpbiA/IEVpdGhlci5MZWZ0KHBsYXllcnNbMV0pIDogRWl0aGVyLlJpZ2h0KG51bGwpKVxuICAgICAgLmNhdGEodiA9PiB2LCB2ID0+IHYpO1xuICB9XG5cbiAgLy9sb2Rhc2ggZGlmZmVyZW5jZSBhY2NvdW50cyBmb3IgbGVmdCB0byByaWdodCBvciByaWdodCB0byBsZWZ0IHNhbWUgd2l0aCB0b3AgdG8gYm90dG9tIGFuZCB2aWNlIHZlcnNhXG4gIHByaXZhdGUgd2lubmluZ0NvbWJpbmF0aW9ucyA9IFtcbiAgICBbJ1VMJywgJ1VNJywgJ1VSJ10sIC8vYWNyb3NzIHRoZSB0b3AgTCB0byBSXG4gICAgWydNTCcsICdNTScsICdNUiddLCAvL2Fjcm9zcyB0aGUgbWlkZGxlICBMIHRvIFJcbiAgICBbJ0xMJywgJ0xNJywgJ0xSJ10sIC8vYWNyb3NzIHRoZSBib3R0b20gIEwgdG8gUlxuICAgIFsnVUwnLCAnTUwnLCAnTEwnXSwgLy9sZWZ0IGNvbHVtbiB0b3AgdG8gYm90dG9tXG4gICAgWydVTScsICdNTScsICdMTSddLCAvL21pZGRsZSBjb2x1bW4gdG9wIHRvIGJvdHRvbWBcbiAgICBbJ1VSJywgJ01SJywgJ0xSJ10sIC8vcmlnaHQgY29sdW1uIHRvcCB0byBib3R0b21cbiAgICBbJ1VMJywgJ01NJywgJ0xSJ10sIC8vdG9wIGxlZnQgdG8gYm90dG9tIHJpZ2h0IGRpYWdub2FsXG4gICAgWydVUicsICdNTScsICdMTCddLCAvL3RvcCByaWdodCB0byBib3R0b20gbGVmdCBkaWFnbm9hbFxuICBdO1xuXG4gIHByaXZhdGUgYnVpbGRFbXB0eUJvYXJkKCk6IEJvYXJkU3RhdGUge1xuICAgIHJldHVybiBjbG9uZURlZXAoe1xuICAgICAgVUw6IG51bGwsIFVNOiBudWxsLCBVUjogbnVsbCxcbiAgICAgIE1MOiBudWxsLCBNTTogbnVsbCwgTVI6IG51bGwsXG4gICAgICBMTDogbnVsbCwgTE06IG51bGwsIExSOiBudWxsXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpbmdsZXRvbi9kb21haW4ud29ya2VyLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY01vZHVsZSwgSW9uaWNFcnJvckhhbmRsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE15QXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYnNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvdGFicy90YWJzJztcbmltcG9ydCB7IFNpbmdsZXRvbk1vZHVsZSB9IGZyb20gJ0BzaW5nbGV0b24vc2luZ2xldG9uLm1vZHVsZSdcblxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE15QXBwLFxuICAgIFRhYnNQYWdlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBTaW5nbGV0b25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCwge3ByZWxvYWRNb2R1bGVzOiBmYWxzZX0pXG4gIF0sXG4gIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTXlBcHAsXG4gICAgVGFic1BhZ2VcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3RhdHVzQmFyLFxuICAgIFNwbGFzaFNjcmVlbixcbiAgICB7cHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogSW9uaWNFcnJvckhhbmRsZXJ9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCIvL3ZhbGlkIG1vdmVzXG5leHBvcnQgdHlwZSBNb3ZlID1cbiAgJ1VMJyB8ICdVTScgfCAnVVInIHxcbiAgJ01MJyB8ICdNTScgfCAnTVInIHxcbiAgJ0xMJyB8ICdMTScgfCAnTFInO1xuXG5leHBvcnQgZW51bSBSZWNvcmRUeXBlIHtcbiAgUGxheWVyID0gJ3BsYXllcicsXG4gIEdhbWUgPSAnZ2FtZScsXG4gIE1vdmVTZXF1ZW5jZSA9ICdtb3ZlLXNlcXVlbmNlJ1xufVxuXG4vKipcbkVhY2ggZ2FtZSBpcyBtYWRlIHVwIG9mIGEgR2FtZSByZWNvcmQgYW5kIHR3byBNb3ZlU2VxdWVuY2UgcmVjb3JkcyAob25lIGZvciBlYWNoIHBsYXllcilcbmEgcGxheWVyIHdyaXRlcyB0byB0aGVpciBvd24gbW92ZSBzZXF1ZW5jZSByZWNvcmQgYW5kIHJlYWRzIGZyb20gdGhlIG90aGVyIHBsYXllcnMuXG4qKi9cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lIHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBfcmV2Pzogc3RyaW5nO1xuICAgIHR5cGU6IFJlY29yZFR5cGUuR2FtZTtcbiAgICBwbGF5ZXJzOiBHYW1lUGxheWVycztcbiAgICBzZXF1ZW5jZTogTW92ZVNlcXVlbmNlO1xuICAgIGFjdGl2ZVR1cm46IG51bWJlcjtcbiAgICBnYW1lSW5Qcm9ncmVzczogYm9vbGVhbjtcbiAgICBwbGF5ZXJzUmVhZHk6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVTZXF1ZW5jZSB7XG4gIF9pZDogc3RyaW5nOyAvL2lkIHdpbGwgYmUgYSBmb3JpZWduIGtleSBvZiB0aGUgZ2FtZSByZWNvcmRcbiAgZ2FtZUlkOiBzdHJpbmc7XG4gIHR5cGU6IFJlY29yZFR5cGUuTW92ZVNlcXVlbmNlO1xuICBtb3ZlczogVHVybkV2ZW50W107XG59XG5cbi8vdGhpcyBpcyBhIGdlbmVyYXRlZCBzdGF0ZSB0byBzdXBwb3J0IHRoZSBnYW1lLWJvYXJkIGNvbXBvbmVudCBVSVxuZXhwb3J0IGludGVyZmFjZSBCb2FyZFN0YXRlIHtcbiAgVUw6IG51bWJlcjsgVU06IG51bWJlcjsgVVI6IG51bWJlcjtcbiAgTUw6IG51bWJlcjsgTU06IG51bWJlcjsgTVI6IG51bWJlcjtcbiAgTEw6IG51bWJlcjsgTE06IG51bWJlcjsgTFI6IG51bWJlcjtcbn1cblxuLy9wYXJ0aWNsZSBzdXBwb3J0aW5nIHRoZSBNb3ZlU2VxdWVuY2UgVHlwZSBhbmQgb3RoZXIgVUkgZWxlbWVudHNcbmV4cG9ydCBpbnRlcmZhY2UgVHVybkV2ZW50IHtcbiAgbW92ZTogTW92ZTtcbiAgdHVybjogbnVtYmVyO1xuICB0aW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVBsYXllcnMge1xuICBbaW5kZXg6IG51bWJlcl06IFBsYXllcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR1cm5JZDogbnVtYmVyO1xuICBkYklkOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2ludGVyZmFjZXMudHMiLCJpbXBvcnQgeyBub3csIHJhbmRvbSB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHN0YXRpYyBnZW5JZCgpIHtcbiAgICByZXR1cm4gKG5vdygpLnRvU3RyaW5nKDM2KSArIHJhbmRvbSg3ODM2NDE2NDA5NSkudG9TdHJpbmcoMzYpICsgKG5vdygpICUgMzcpLnRvU3RyaW5nKDM2KSkudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpbmdsZXRvbi91dGlsLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5cbmltcG9ydCB7IFRhYnNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvdGFicy90YWJzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE15QXBwIHtcbiAgcm9vdFBhZ2U6YW55ID0gVGFic1BhZ2U7XG5cbiAgY29uc3RydWN0b3IocGxhdGZvcm06IFBsYXRmb3JtLCBzdGF0dXNCYXI6IFN0YXR1c0Jhciwgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4pIHtcbiAgICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gT2theSwgc28gdGhlIHBsYXRmb3JtIGlzIHJlYWR5IGFuZCBvdXIgcGx1Z2lucyBhcmUgYXZhaWxhYmxlLlxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cbiAgICAgIHN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICAgIHNwbGFzaFNjcmVlbi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogSU1QT1JUQU5UIDogd2hlbmV2ZXIgYSBuZXcgcGFnZSBpcyBjcmVhdGVkIGxpc3QgdGhlIHBhZ2Ugc3RyaW5nIGhlcmUsIHNvIGl0IGNhbiBiZSByZWZlcnJlZCB0byBieSByZWZlcmVuY2VcbiAqIGluIHRoZSBldmVudCB0aGF0IGEgbmFtZSBjaGFuZ2UgaXMgbmVlZGVkLCBvbmx5IG9uZSBsaXRlcmFsIG5lZWRzIHRvIGJlIGNoYW5nZWQgaGVyZS5cbiAqL1xuXG5leHBvcnQgY2xhc3MgTGF6eVBhZ2VzIHtcbiAgc3RhdGljIExPQ0FMX0dBTUUgPSAnTG9jYWxHYW1lUGFnZSc7XG4gIHN0YXRpYyBSRU1PVEVfR0FNRSA9ICdSZW1vdGVHYW1lUGFnZSc7XG4gIHN0YXRpYyBTRVRUSU5HUyA9ICdTZXR0aW5nc1BhZ2UnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9sYXp5LXBhZ2VzLnRzIiwiaW1wb3J0IHtOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlfSBmcm9tICdAc2luZ2xldG9uL3BlcnNpc3QnO1xuaW1wb3J0IHtEb21haW5Xb3JrZXJ9IGZyb20gJ0BzaW5nbGV0b24vZG9tYWluLndvcmtlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbUGVyc2lzdGVuY2UsIERvbWFpbldvcmtlcl0sXG4gIGV4cG9ydHM6IFtCcm93c2VyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFNpbmdsZXRvbk1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpbmdsZXRvbi9zaW5nbGV0b24ubW9kdWxlLnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IFR1cm5FdmVudCwgR2FtZSwgUmVjb3JkVHlwZSwgQm9hcmRTdGF0ZSwgTW92ZVNlcXVlbmNlIH0gZnJvbSAnQHNoYXJlZC9pbnRlcmZhY2VzJztcbi8vIGltcG9ydCAqIGFzIFBvdWNoREIgZnJvbSAncG91Y2hkYic7XG4vLyBpbXBvcnQgeyBGdXR1cmUsIHRyeVAgfSBmcm9tICdmbHV0dXJlJztcbi8vIGltcG9ydCB7VXRpbHN9IGZyb20gJ0BzaW5nbGV0b24vdXRpbCc7XG4vLyBpbXBvcnQgeyB1bmlvbiwgY3VycnkgfSBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGVyc2lzdGVuY2Uge1xuXG4gIC8vZ2FtZURiOiBQb3VjaERCLkRhdGFiYXNlO1xuICAvL3BsYXllcjA6IFBvdWNoREIuRGF0YWJhc2U7XG4gIC8vcGxheWVyMTogUG91Y2hEQi5EYXRhYmFzZTtcblxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvL2luaXQgZGF0YWJhc2VzXG4gICAgLy8gdGhpcy5nYW1lRGIgPSBuZXcgUG91Y2hEQignaHR0cDovLzM1LjE2NS40LjExNDo1OTg0L2dhbWVzJywge2F1dGg6e3VzZXJuYW1lOidhZG1pbicsIHBhc3N3b3JkOidsb3Zlc2VhdCd9fSk7XG4gICAgLy8gdGhpcy5wbGF5ZXIwID0gbmV3IFBvdWNoREIoJ2h0dHA6Ly8zNS4xNjUuNC4xMTQ6NTk4NC9wbGF5ZXIwJywge2F1dGg6e3VzZXJuYW1lOidhZG1pbicsIHBhc3N3b3JkOidsb3Zlc2VhdCd9fSk7XG4gICAgLy8gdGhpcy5wbGF5ZXIxID0gbmV3IFBvdWNoREIoJ2h0dHA6Ly8zNS4xNjUuNC4xMTQ6NTk4NC9wbGF5ZXIxJywge2F1dGg6e3VzZXJuYW1lOidhZG1pbicsIHBhc3N3b3JkOidsb3Zlc2VhdCd9fSk7XG4gIH1cblxuICAvL3VwZGF0ZU1vdmVTZXF1ZW5jZShnYW1lOiBHYW1lLCB0dXJuOiBUdXJuRXZlbnQpOiBGdXR1cmU8e30sIEJvYXJkU3RhdGU+IHtcbiAgICAvL3dyaXRlIG1vdmUgdG8gcGxheWVycyBnYW1lIE1vdmVTZXF1ZW5jZVxuXG4gICAgLy9zaWRlIGVmZmVjdCB0byB1cGRhdGUgY3VycmVudCBwbGF5ZXIncyB0dXJuXG4gICAgLy8gY29uc3QgZ2FtZVN0YXRlID0gdHJ5UCgoKSA9PiA8YW55PnRoaXMuZ2FtZURiLmdldChnYW1lLl9pZCkpO1xuICAgIC8vIGdhbWVTdGF0ZS5jaGFpbigoZGJHYW1lOiBHYW1lKSA9PiB7XG4gICAgLy8gICBkYkdhbWUuYWN0aXZlVHVybiA9IGRiR2FtZS5hY3RpdmVUdXJuID09PSAwID8gMSA6IDA7XG4gICAgLy8gICByZXR1cm4gdHJ5UCgoKSA9PiB0aGlzLmdhbWVEYi5wdXQoZGJHYW1lKSk7XG4gICAgLy8gfSlcbiAgICAvLyAuZm9yayhlID0+IGNvbnNvbGUuZXJyb3IoZSksIHYgPT4gdik7XG4gICAgLy9cbiAgICAvLyByZXR1cm4gdHJ5UCgoKSA9PiB0aGlzW3R1cm4ucGxheWVyLmRiSWRdLmdldChnYW1lLl9pZCkpXG4gICAgLy8gLmNoYWluKChtb3ZlU2VxOiBNb3ZlU2VxdWVuY2UpID0+IHtcbiAgICAvL1xuICAgIC8vICAgbW92ZVNlcS5tb3ZlcyA9IHVuaW9uKG1vdmVTZXEubW92ZXMsIFt0dXJuXSlcbiAgICAvLyAgIC8vc2lkZSBlZmZlY3QgdG8gdXBkYXRlIG1vdmVTZXFcbiAgICAvLyAgIHRoaXNbdHVybi5wbGF5ZXIuZGJJZF0ucHV0KG1vdmVTZXEpO1xuICAgIC8vICAgcmV0dXJuIEZ1dHVyZS5vZihtb3ZlU2VxKTtcbiAgICAvLyB9KVxuICAgIC8vIC5jaGFpbihtb3ZlU2VxID0+IHtcbiAgICAvLyAgIGNvbnN0IHBhcnRpYWxBUDphbnkgPSBjdXJyeSgobW92ZVNlcSwgbW92ZVNlcTIpID0+IHRoaXMuYnVpbGRCb2FyZFN0YXRlKG1vdmVTZXEsIG1vdmVTZXEyKSk7XG4gICAgLy8gICBwYXJ0aWFsQVAobW92ZVNlcSk7XG4gICAgLy8gICByZXR1cm4gRnV0dXJlLm9mKHBhcnRpYWxBUCk7XG4gICAgLy8gfSlcbiAgICAvLyAuYXAodHJ5UCgoKSA9PiA8YW55PnRoaXNbdHVybi5wbGF5ZXIuZGJJZCA9PT0gJ3BsYXllcjAnID8gJ3BsYXllcjEnIDogJ3BsYXllcjAnXS5nZXQoZ2FtZS5faWQpKSlcbiAgLy99XG5cbiAgZ2V0QWN0aXZlR2FtZSgpIHtcblxuICB9XG5cblxuXG4gIHNldFVzZXJSZWFkeSgpIHtcblxuICB9XG5cbiAgY29tcGxldGVHYW1lKCkge1xuICAgIC8vY29uc3QgYWN0aXZlR2FtZUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZUdhbWUnKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2luZ2xldG9uL3BlcnNpc3QudHMiXSwic291cmNlUm9vdCI6IiJ9