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
    LocalGamePage.prototype.processTurn = function (turn) {
        var _this = this;
        //make other players turn active;
        this.activeTurn = this.activeTurn === 0 ? 1 : 0;
        this.game = this.domainWorker.updateGameSequence(this.game, turn);
        this.boardState = this.domainWorker.newBoardState(this.game);
        var winner = this.domainWorker.determineWinner(this.game.sequence, this.game.players);
        winner ? this.alertCtrl.create({
            title: winner.name + ' is the winner!',
            buttons: [{ text: 'Play Again', handler: function () { return _this.createNewGame(); } }]
        }).present() : null;
        //send turn to this users' & game's moveSequence record
        //this.persist.updateMoveSequence(this.game, turn).fork(e => console.error(e), newBoard => {this.boardState = newBoard; console.log(newBoard)})
        //construct a new state of the game
        //determine if there is a winner from the game state
    };
    LocalGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-local-game',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TicTacToe</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <player-header [turn]="activeTurn" [players]="players"></player-header>\n  <game-board [turn]="activeTurn" [boardState]="boardState" (turnEvents)="processTurn($event)"></game-board>\n  <ion-fab bottom right (click)="promptForNewGame()">\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__singleton_domain_worker__["a" /* DomainWorker */]])
    ], LocalGamePage);
    return LocalGamePage;
}());

//# sourceMappingURL=local-game.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9sb2NhbC9sb2NhbC1nYW1lLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAudHMiLCIuLi8uLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2xvY2FsL2xvY2FsLWdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ087QUFDUTtBQUNIO0FBRXJEOzs7R0FHRztBQVdIO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBVDNCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEVBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCxzRUFBZSxDQUFDLFFBQVEsQ0FBQyw4RUFBYSxDQUFDO2dCQUN2QywyRUFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJXO0FBQ007QUFDSDtBQUM0QjtBQUNTO0FBbUIvRTtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBakJ4Qix1RUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ1AscUVBQVk7Z0JBQ1osa0VBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVztnQkFDWCw4RkFBa0I7Z0JBQ2xCLHVHQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnFFO0FBRTlEO0FBT2hDO0lBS0U7UUFGVSxl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Q0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO1NBQ3BFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BCLHVEQUF1RDtRQUN2RCwrSUFBK0k7UUFDL0ksbUNBQW1DO1FBRW5DLG9EQUFvRDtJQUN0RCxDQUFDO0lBL0NVLGFBQWE7UUFKekIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7V0FDRztTQUMvQixDQUFDO3NCQVlrRjtPQVh2RSxhQUFhLENBaUR6QjtJQUFELENBQUM7QUFBQTtTQWpEWSxhQUFhLGdCIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNQYWdlTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBMb2NhbEdhbWVQYWdlIH0gZnJvbSAnQHBhZ2VzL2xvY2FsL2xvY2FsLWdhbWUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnQHNoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuLyoqXG4gKiBJTVBPUlRBTlQgOiByZWdpc3RlciB0aGUgbmFtZSBsaXRlcmFsIGluIGFwcC9MYXp5UGFnZXMudHMgc28gd2UgYXJlIGFsd2F5cyB1c2luZyByZWZlcmVuY2VzIHRvIHRoZSBzdHJpbmcgbGl0ZXJhbCBsYXp5IG5hbWVzXG4gKiB0aGUgbGF6eSBuYW1lIGlzIHRoZSBjbGFzcyBuYW1lIHVubGVzcyBpdCBpcyBvdmVycmlkZGVuLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvY2FsR2FtZVBhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIElvbmljUGFnZU1vZHVsZS5mb3JDaGlsZChMb2NhbEdhbWVQYWdlKSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbG9jYWwvbG9jYWwtZ2FtZS5tb2R1bGUudHMiLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQge0dhbWVCb2FyZENvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcCc7XG5pbXBvcnQge1BsYXllckhlYWRlckNvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdhbWVCb2FyZENvbXBvbmVudCxcbiAgICBQbGF5ZXJIZWFkZXJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgR2FtZUJvYXJkQ29tcG9uZW50LFxuICAgIFBsYXllckhlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9hcmRTdGF0ZSwgVHVybkV2ZW50LCBNb3ZlIH0gZnJvbSAnQHNoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IG5vdyB9IGZyb20gJ2xvZGFzaC9mcCc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdnYW1lLWJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbWUtYm9hcmQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHVybjogbnVtYmVyO1xuICBASW5wdXQoKSBib2FyZFN0YXRlOiBCb2FyZFN0YXRlO1xuICBAT3V0cHV0KCkgdHVybkV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8VHVybkV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRTdGF0ZSA9IHtcbiAgICAgIFVMOiBudWxsLCBVTTogbnVsbCwgVVI6IG51bGwsXG4gICAgICBNTDogbnVsbCwgTU06IG51bGwsIE1SOiBudWxsLFxuICAgICAgTEw6IG51bGwsIExNOiBudWxsLCBMUjogbnVsbFxuICAgIH07XG4gIH1cblxuICBwbGF5ZXJBY3Rpb24obW92ZTogTW92ZSkge1xuICAgIHRoaXMuYm9hcmRTdGF0ZVttb3ZlXSA9IHRoaXMudHVybjtcbiAgICB0aGlzLnR1cm5FdmVudHMuZW1pdCh7bW92ZTogbW92ZSwgdHVybjogdGhpcy50dXJuLCB0aW1lOiBub3coKX0pO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhbWVQbGF5ZXJzIH0gZnJvbSAnQHNoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7Z2V0fSBmcm9tICdsb2Rhc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAncGxheWVyLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXItaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllckhlYWRlckNvbXBvbmVudCB7XG4gIHBsYXllcjAgPSAnJztcbiAgcGxheWVyMSA9ICcnO1xuICBASW5wdXQoKSB0dXJuOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNldCBwbGF5ZXJzKHBsYXllcnM6IEdhbWVQbGF5ZXJzKSB7XG4gICAgdGhpcy5wbGF5ZXIwID0gZ2V0KHBsYXllcnMsJ1swXS5uYW1lJywnJyk7XG4gICAgdGhpcy5wbGF5ZXIxID0gZ2V0KHBsYXllcnMsJ1sxXS5uYW1lJywnJyk7XG4gIH07XG5cblxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJb25pY1BhZ2UsIEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHtHYW1lLCBUdXJuRXZlbnQsIEJvYXJkU3RhdGUsIEdhbWVQbGF5ZXJzIH0gZnJvbSAnQHNoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBEb21haW5Xb3JrZXIgfSBmcm9tICdAc2luZ2xldG9uL2RvbWFpbi53b3JrZXInO1xuXG5ASW9uaWNQYWdlKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbG9jYWwtZ2FtZScsXG4gIHRlbXBsYXRlVXJsOiAnbG9jYWwtZ2FtZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVQYWdlIHtcbiAgcGxheWVyczogR2FtZVBsYXllcnM7XG5cbiAgYWN0aXZlVHVybiA9IDA7XG4gIGJvYXJkU3RhdGU6IEJvYXJkU3RhdGUgPSB7XG4gICAgVUw6IG51bGwsIFVNOiBudWxsLCBVUjogbnVsbCxcbiAgICBNTDogbnVsbCwgTU06IG51bGwsIE1SOiBudWxsLFxuICAgIExMOiBudWxsLCBMTTogbnVsbCwgTFI6IG51bGxcbiAgfTtcbiAgZ2FtZTogR2FtZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLCBwcml2YXRlIGRvbWFpbldvcmtlcjogRG9tYWluV29ya2VyKSB7XG5cbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuY3JlYXRlTmV3R2FtZSgpXG4gIH1cblxuICBjcmVhdGVOZXdHYW1lKCkge1xuICAgIHRoaXMuZG9tYWluV29ya2VyLnN0YXJ0R2FtZSh0cnVlKS5mb3JrKFxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcbiAgICAgIGdhbWUgPT4ge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmFjdGl2ZVR1cm4gPSBnZXQodGhpcywgJ2dhbWUuYWN0aXZlVHVybicsMCk7XG4gICAgICAgIHRoaXMuYm9hcmRTdGF0ZSA9IHRoaXMuZG9tYWluV29ya2VyLm5ld0JvYXJkU3RhdGUodGhpcy5nYW1lKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gZ2FtZS5wbGF5ZXJzO1xuICAgICAgfSk7XG4gICAgLy9jcmVhdGUgYSBnYW1lIHJlY29yZCBpbiB0aGUgZ2FtZSBkYiwgbWFyayB0aGUgZ2FtZSBpcyBhY3RpdmVcbiAgICAvL2NyZWF0ZSB3cml0ZSBzZXF1ZW5jZSByZWNvcmQgaW5cbiAgfVxuXG4gIHByb21wdEZvck5ld0dhbWUoKSB7XG4gICAgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIHRpdGxlOiAnU3RhcnQgYSBuZXcgZ2FtZT8nLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7dGV4dDogJ0NhbmNlbCcscm9sZTogJ2NhbmNlbCcsaGFuZGxlcjogKCkgPT4gbnVsbH0sXG4gICAgICAgIHt0ZXh0OiAnTmV3IEdhbWUnLCBoYW5kbGVyOiAoKSA9PiB0aGlzLmNyZWF0ZU5ld0dhbWUoKX1dXG4gICAgfSkucHJlc2VudCgpXG4gIH1cblxuICBwcm9jZXNzVHVybih0dXJuOiBUdXJuRXZlbnQpIHtcbiAgICAvL21ha2Ugb3RoZXIgcGxheWVycyB0dXJuIGFjdGl2ZTtcbiAgICB0aGlzLmFjdGl2ZVR1cm4gPSB0aGlzLmFjdGl2ZVR1cm4gPT09IDAgPyAxIDogMDtcblxuICAgIC8vZ2VuZXJhdGUgYSBuZXcgZ2FtZSBzdGF0ZVxuICAgIHRoaXMuZ2FtZSA9IHRoaXMuZG9tYWluV29ya2VyLnVwZGF0ZUdhbWVTZXF1ZW5jZSh0aGlzLmdhbWUsIHR1cm4pXG5cbiAgICAvL2dlbmVyYXRlIGEgbmV3IGJvYXJkIHN0YXRlIGZvciB0aGUgZ2FtZS1ib2FyZCBjb21wb25lbnRcbiAgICB0aGlzLmJvYXJkU3RhdGUgPSB0aGlzLmRvbWFpbldvcmtlci5uZXdCb2FyZFN0YXRlKHRoaXMuZ2FtZSk7XG5cbiAgICAvL2NoZWNrIGlmIHRoZXJlIGlzIGEgd2lubmVyXG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy5kb21haW5Xb3JrZXIuZGV0ZXJtaW5lV2lubmVyKHRoaXMuZ2FtZS5zZXF1ZW5jZSwgdGhpcy5nYW1lLnBsYXllcnMpO1xuXG4gICAgLy9pZiB0aGVyZSBpcyBhIHdpbm5lciBnYXJuaXNoIHRoZW0gd2l0aCBhY2NvbGFkZXNcbiAgICB3aW5uZXIgPyB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgdGl0bGU6IHdpbm5lci5uYW1lICsgJyBpcyB0aGUgd2lubmVyIScsXG4gICAgICBidXR0b25zOiBbe3RleHQ6ICdQbGF5IEFnYWluJyxoYW5kbGVyOiAoKSA9PiB0aGlzLmNyZWF0ZU5ld0dhbWUoKX1dXG4gICAgfSkucHJlc2VudCgpIDogbnVsbDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbG9jYWwvbG9jYWwtZ2FtZS50cyJdLCJzb3VyY2VSb290IjoiIn0=