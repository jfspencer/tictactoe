webpackJsonp([2],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalGameModule", function() { return LocalGameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_local_local_game__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * IMPORTANT : register the name literal in app/LazyPages.ts so we are always using references to the string literal lazy names
 * the lazy name is the class name unless it is overridden.
 */
var LocalGameModule = /** @class */ (function () {
    function LocalGameModule() {
    }
    LocalGameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pages_local_local_game__["a" /* LocalGamePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pages_local_local_game__["a" /* LocalGamePage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], LocalGameModule);
    return LocalGameModule;
}());

//# sourceMappingURL=local-game.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_game_board_game_board_comp__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_player_header_player_header_comp__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__shared_game_board_game_board_comp__["a" /* GameBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_player_header_player_header_comp__["a" /* PlayerHeaderComponent */],
            ],
            providers: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_game_board_game_board_comp__["a" /* GameBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_player_header_player_header_comp__["a" /* PlayerHeaderComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_fp__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_fp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_fp__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent() {
        this.turnEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.boardState = {
            UL: null, UM: null, UR: null,
            ML: null, MM: null, MR: null,
            LL: null, LM: null, LR: null
        };
    }
    GameBoardComponent.prototype.playerAction = function (move) {
        this.boardState[move] = this.turn;
        this.turnEvents.emit({ move: move, turn: this.turn, time: Object(__WEBPACK_IMPORTED_MODULE_1_lodash_fp__["now"])() });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GameBoardComponent.prototype, "turn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GameBoardComponent.prototype, "boardState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], GameBoardComponent.prototype, "turnEvents", void 0);
    GameBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            selector: 'game-board',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/shared/game-board/game-board.html"*/'<ion-grid>\n  <ion-row class="linedRow">\n    <ion-col class="linedColumn" (click)="playerAction(\'UL\')">\n      <div *ngIf="boardState.UL === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.UL === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col class="linedColumn" (click)="playerAction(\'UM\')">\n      <div *ngIf="boardState.UM === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.UM === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col  (click)="playerAction(\'UR\')">\n      <div *ngIf="boardState.UR === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.UR === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n  </ion-row>\n  <ion-row class="linedRow">\n    <ion-col class="linedColumn" (click)="playerAction(\'ML\')">\n      <div *ngIf="boardState.ML === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.ML === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col class="linedColumn" (click)="playerAction(\'MM\')">\n      <div *ngIf="boardState.MM === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.MM === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col  (click)="playerAction(\'MR\')">\n      <div *ngIf="boardState.MR === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.MR === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="linedColumn" (click)="playerAction(\'LL\')">\n      <div *ngIf="boardState.LL === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.LL === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col class="linedColumn"  (click)="playerAction(\'LM\')">\n      <div *ngIf="boardState.LM === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.LM === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col (click)="playerAction(\'LR\')">\n      <div *ngIf="boardState.LR === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="boardState.LR === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/shared/game-board/game-board.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GameBoardComponent);
    return GameBoardComponent;
}());

//# sourceMappingURL=game-board.comp.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerHeaderComponent = /** @class */ (function () {
    function PlayerHeaderComponent() {
        this.player0 = '';
        this.player1 = '';
    }
    Object.defineProperty(PlayerHeaderComponent.prototype, "players", {
        set: function (players) {
            this.player0 = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["get"])(players, '[0].name', '');
            this.player1 = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["get"])(players, '[1].name', '');
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PlayerHeaderComponent.prototype, "turn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlayerHeaderComponent.prototype, "players", null);
    PlayerHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            selector: 'player-header',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/shared/player-header/player-header.html"*/'<ion-grid>\n  <ion-row align-items-start>\n    <ion-col>\n      <h4 [innerHTML]="player0"></h4>\n      <h5 *ngIf="turn === 0">At Play</h5>\n    </ion-col>\n    <ion-col>\n      <h4>{{player1}}</h4>\n      <h5 *ngIf="turn === 1">At Play</h5>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/shared/player-header/player-header.html"*/
        })
    ], PlayerHeaderComponent);
    return PlayerHeaderComponent;
}());

//# sourceMappingURL=player-header.comp.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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




var LocalGamePage = /** @class */ (function () {
    function LocalGamePage(alertCtrl, domainWorker) {
        this.alertCtrl = alertCtrl;
        this.domainWorker = domainWorker;
        this.activeTurn = 0;
        this.boardState = {
            UL: null, UM: null, UR: null,
            ML: null, MM: null, MR: null,
            LL: null, LM: null, LR: null
        };
    }
    LocalGamePage.prototype.ionViewDidLoad = function () {
        this.createNewGame();
    };
    LocalGamePage.prototype.createNewGame = function () {
        var _this = this;
        this.domainWorker.startGame(true).fork(function (e) { return console.log(e); }, function (game) {
            _this.game = game;
            _this.activeTurn = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["get"])(_this, 'game.activeTurn', 0);
            _this.boardState = _this.domainWorker.newBoardState(_this.game);
            _this.players = game.players;
        });
        //create a game record in the game db, mark the game is active
        //create write sequence record in
    };
    LocalGamePage.prototype.promptForNewGame = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Start a new game?',
            buttons: [
                { text: 'Cancel', role: 'cancel', handler: function () { return null; } },
                { text: 'New Game', handler: function () { return _this.createNewGame(); } }
            ]
        }).present();
    };
    LocalGamePage.prototype.processTurn = function (turn) {
        var _this = this;
        //make other players turn active;
        this.activeTurn = this.activeTurn === 0 ? 1 : 0;
        //generate a new game state
        this.game = this.domainWorker.updateGameSequence(this.game, turn);
        //generate a new board state for the game-board component
        this.boardState = this.domainWorker.newBoardState(this.game);
        //check if there is a winner
        var winner = this.domainWorker.determineWinner(this.game.sequence, this.game.players);
        //if there is a winner garnish them with accolades
        winner ? this.alertCtrl.create({
            title: winner.name + ' is the winner!',
            buttons: [{ text: 'Play Again', handler: function () { return _this.createNewGame(); } }]
        }).present() : null;
    };
    LocalGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-local-game',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TicTacToe</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <player-header [turn]="activeTurn" [players]="players"></player-header>\n  <game-board [turn]="activeTurn" [boardState]="boardState" (turnEvents)="processTurn($event)"></game-board>\n  <ion-fab bottom right (click)="promptForNewGame()">\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__singleton_domain_worker__["a" /* DomainWorker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__singleton_domain_worker__["a" /* DomainWorker */]) === "function" && _b || Object])
    ], LocalGamePage);
    return LocalGamePage;
    var _a, _b;
}());

//# sourceMappingURL=local-game.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9sb2NhbC9sb2NhbC1nYW1lLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAudHMiLCIuLi8uLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2xvY2FsL2xvY2FsLWdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ087QUFDUTtBQUNIO0FBRXJEOzs7R0FHRztBQVdIO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBVDNCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEVBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCxzRUFBZSxDQUFDLFFBQVEsQ0FBQyw4RUFBYSxDQUFDO2dCQUN2QywyRUFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJXO0FBQ007QUFDSDtBQUM0QjtBQUNTO0FBbUIvRTtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBakJ4Qix1RUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ1AscUVBQVk7Z0JBQ1osa0VBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVztnQkFDWCw4RkFBa0I7Z0JBQ2xCLHVHQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnFFO0FBRTlEO0FBT2hDO0lBS0U7UUFGVSxl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LEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdELDRCQUE0QjtRQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhGLGtEQUFrRDtRQUNsRCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzdCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQjtZQUN0QyxPQUFPLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsT0FBTyxFQUFFLGNBQU0sWUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixFQUFDLENBQUM7U0FDcEUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQTNEVSxhQUFhO1FBSnpCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1dBQ0c7U0FDL0IsQ0FBQztzQkFZa0Y7T0FYdkUsYUFBYSxDQTZEekI7SUFBRCxXQUFDOztBQUFBO1NBN0RZLGFBQWEsZ0IiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY1BhZ2VNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IExvY2FsR2FtZVBhZ2UgfSBmcm9tICdAcGFnZXMvbG9jYWwvbG9jYWwtZ2FtZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdAc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG4vKipcbiAqIElNUE9SVEFOVCA6IHJlZ2lzdGVyIHRoZSBuYW1lIGxpdGVyYWwgaW4gYXBwL0xhenlQYWdlcy50cyBzbyB3ZSBhcmUgYWx3YXlzIHVzaW5nIHJlZmVyZW5jZXMgdG8gdGhlIHN0cmluZyBsaXRlcmFsIGxhenkgbmFtZXNcbiAqIHRoZSBsYXp5IG5hbWUgaXMgdGhlIGNsYXNzIG5hbWUgdW5sZXNzIGl0IGlzIG92ZXJyaWRkZW4uXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9jYWxHYW1lUGFnZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNQYWdlTW9kdWxlLmZvckNoaWxkKExvY2FsR2FtZVBhZ2UpLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9sb2NhbC9sb2NhbC1nYW1lLm1vZHVsZS50cyIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0lvbmljTW9kdWxlfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7R2FtZUJvYXJkQ29tcG9uZW50fSBmcm9tICdAc2hhcmVkL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wJztcbmltcG9ydCB7UGxheWVySGVhZGVyQ29tcG9uZW50fSBmcm9tICdAc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR2FtZUJvYXJkQ29tcG9uZW50LFxuICAgIFBsYXllckhlYWRlckNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBHYW1lQm9hcmRDb21wb25lbnQsXG4gICAgUGxheWVySGVhZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb2FyZFN0YXRlLCBUdXJuRXZlbnQsIE1vdmUgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnbG9kYXNoL2ZwJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ2dhbWUtYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2FtZS1ib2FyZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmRDb21wb25lbnQge1xuICBASW5wdXQoKSB0dXJuOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJvYXJkU3RhdGU6IEJvYXJkU3RhdGU7XG4gIEBPdXRwdXQoKSB0dXJuRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxUdXJuRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZFN0YXRlID0ge1xuICAgICAgVUw6IG51bGwsIFVNOiBudWxsLCBVUjogbnVsbCxcbiAgICAgIE1MOiBudWxsLCBNTTogbnVsbCwgTVI6IG51bGwsXG4gICAgICBMTDogbnVsbCwgTE06IG51bGwsIExSOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHBsYXllckFjdGlvbihtb3ZlOiBNb3ZlKSB7XG4gICAgdGhpcy5ib2FyZFN0YXRlW21vdmVdID0gdGhpcy50dXJuO1xuICAgIHRoaXMudHVybkV2ZW50cy5lbWl0KHttb3ZlOiBtb3ZlLCB0dXJuOiB0aGlzLnR1cm4sIHRpbWU6IG5vdygpfSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcC50cyIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2FtZVBsYXllcnMgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtnZXR9IGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdwbGF5ZXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYXllci1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGxheWVySGVhZGVyQ29tcG9uZW50IHtcbiAgcGxheWVyMCA9ICcnO1xuICBwbGF5ZXIxID0gJyc7XG4gIEBJbnB1dCgpIHR1cm46IG51bWJlcjtcbiAgQElucHV0KCkgc2V0IHBsYXllcnMocGxheWVyczogR2FtZVBsYXllcnMpIHtcbiAgICB0aGlzLnBsYXllcjAgPSBnZXQocGxheWVycywnWzBdLm5hbWUnLCcnKTtcbiAgICB0aGlzLnBsYXllcjEgPSBnZXQocGxheWVycywnWzFdLm5hbWUnLCcnKTtcbiAgfTtcblxuXG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lvbmljUGFnZSwgQWxlcnRDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQge0dhbWUsIFR1cm5FdmVudCwgQm9hcmRTdGF0ZSwgR2FtZVBsYXllcnMgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IERvbWFpbldvcmtlciB9IGZyb20gJ0BzaW5nbGV0b24vZG9tYWluLndvcmtlcic7XG5cbkBJb25pY1BhZ2UoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1sb2NhbC1nYW1lJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2NhbC1nYW1lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsR2FtZVBhZ2Uge1xuICBwbGF5ZXJzOiBHYW1lUGxheWVycztcblxuICBhY3RpdmVUdXJuID0gMDtcbiAgYm9hcmRTdGF0ZTogQm9hcmRTdGF0ZSA9IHtcbiAgICBVTDogbnVsbCwgVU06IG51bGwsIFVSOiBudWxsLFxuICAgIE1MOiBudWxsLCBNTTogbnVsbCwgTVI6IG51bGwsXG4gICAgTEw6IG51bGwsIExNOiBudWxsLCBMUjogbnVsbFxuICB9O1xuICBnYW1lOiBHYW1lO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsIHByaXZhdGUgZG9tYWluV29ya2VyOiBEb21haW5Xb3JrZXIpIHtcblxuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdHYW1lKClcbiAgfVxuXG4gIGNyZWF0ZU5ld0dhbWUoKSB7XG4gICAgdGhpcy5kb21haW5Xb3JrZXIuc3RhcnRHYW1lKHRydWUpLmZvcmsoXG4gICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxuICAgICAgZ2FtZSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuYWN0aXZlVHVybiA9IGdldCh0aGlzLCAnZ2FtZS5hY3RpdmVUdXJuJywwKTtcbiAgICAgICAgdGhpcy5ib2FyZFN0YXRlID0gdGhpcy5kb21haW5Xb3JrZXIubmV3Qm9hcmRTdGF0ZSh0aGlzLmdhbWUpO1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBnYW1lLnBsYXllcnM7XG4gICAgICB9KTtcbiAgICAvL2NyZWF0ZSBhIGdhbWUgcmVjb3JkIGluIHRoZSBnYW1lIGRiLCBtYXJrIHRoZSBnYW1lIGlzIGFjdGl2ZVxuICAgIC8vY3JlYXRlIHdyaXRlIHNlcXVlbmNlIHJlY29yZCBpblxuICB9XG5cbiAgcHJvbXB0Rm9yTmV3R2FtZSgpIHtcbiAgICB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgdGl0bGU6ICdTdGFydCBhIG5ldyBnYW1lPycsXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHt0ZXh0OiAnQ2FuY2VsJyxyb2xlOiAnY2FuY2VsJyxoYW5kbGVyOiAoKSA9PiBudWxsfSxcbiAgICAgICAge3RleHQ6ICdOZXcgR2FtZScsIGhhbmRsZXI6ICgpID0+IHRoaXMuY3JlYXRlTmV3R2FtZSgpfV1cbiAgICB9KS5wcmVzZW50KClcbiAgfVxuXG4gIHByb2Nlc3NUdXJuKHR1cm46IFR1cm5FdmVudCkge1xuICAgIC8vbWFrZSBvdGhlciBwbGF5ZXJzIHR1cm4gYWN0aXZlO1xuICAgIHRoaXMuYWN0aXZlVHVybiA9IHRoaXMuYWN0aXZlVHVybiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgLy9nZW5lcmF0ZSBhIG5ldyBnYW1lIHN0YXRlXG4gICAgdGhpcy5nYW1lID0gdGhpcy5kb21haW5Xb3JrZXIudXBkYXRlR2FtZVNlcXVlbmNlKHRoaXMuZ2FtZSwgdHVybilcblxuICAgIC8vZ2VuZXJhdGUgYSBuZXcgYm9hcmQgc3RhdGUgZm9yIHRoZSBnYW1lLWJvYXJkIGNvbXBvbmVudFxuICAgIHRoaXMuYm9hcmRTdGF0ZSA9IHRoaXMuZG9tYWluV29ya2VyLm5ld0JvYXJkU3RhdGUodGhpcy5nYW1lKTtcblxuICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYSB3aW5uZXJcbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmRvbWFpbldvcmtlci5kZXRlcm1pbmVXaW5uZXIodGhpcy5nYW1lLnNlcXVlbmNlLCB0aGlzLmdhbWUucGxheWVycyk7XG5cbiAgICAvL2lmIHRoZXJlIGlzIGEgd2lubmVyIGdhcm5pc2ggdGhlbSB3aXRoIGFjY29sYWRlc1xuICAgIHdpbm5lciA/IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICB0aXRsZTogd2lubmVyLm5hbWUgKyAnIGlzIHRoZSB3aW5uZXIhJyxcbiAgICAgIGJ1dHRvbnM6IFt7dGV4dDogJ1BsYXkgQWdhaW4nLGhhbmRsZXI6ICgpID0+IHRoaXMuY3JlYXRlTmV3R2FtZSgpfV1cbiAgICB9KS5wcmVzZW50KCkgOiBudWxsO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9sb2NhbC9sb2NhbC1nYW1lLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==