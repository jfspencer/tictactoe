webpackJsonp([2],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalGameModule", function() { return LocalGameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_local_local_game__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(274);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pages_local_local_game__["a" /* LocalGamePage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], LocalGameModule);
    return LocalGameModule;
}());

//# sourceMappingURL=local-game.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_game_board_game_board_comp__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_player_header_player_header_comp__ = __webpack_require__(276);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_game_board_game_board_comp__["a" /* GameBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_player_header_player_header_comp__["a" /* PlayerHeaderComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_interfaces__);
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
        this.turnEvents.emit({ move: move, player: this.player });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GameBoardComponent.prototype, "turn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__["Player"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__["Player"]) === "function" && _a || Object)
    ], GameBoardComponent.prototype, "player", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__["BoardState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_interfaces__["BoardState"]) === "function" && _b || Object)
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
    var _a, _b;
}());

//# sourceMappingURL=game-board.comp.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerHeaderComponent; });
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

var PlayerHeaderComponent = /** @class */ (function () {
    function PlayerHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PlayerHeaderComponent.prototype, "turn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlayerHeaderComponent.prototype, "players", void 0);
    PlayerHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'player-header',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/shared/player-header/player-header.html"*/'<ion-grid>\n  <ion-row align-items-start>\n    <ion-col>\n      <h4>{{players[0].name}}</h4>\n      <h5 *ngIf="turn === 0">At Play</h5>\n    </ion-col>\n    <ion-col>\n      <h4>{{players[1].name}}</h4>\n      <h5 *ngIf="turn === 1">At Play</h5>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/shared/player-header/player-header.html"*/
        })
    ], PlayerHeaderComponent);
    return PlayerHeaderComponent;
}());

//# sourceMappingURL=player-header.comp.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
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
    function LocalGamePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.activeTurn = 0;
        this.players = [{ name: 'Jim', turnId: 0, dbId: '1234' }, { name: 'Jones', turnId: 1, dbId: '12345' }];
    }
    LocalGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-local-game',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TicTacToe</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <player-header [turn]="activeTurn" [players]="players"></player-header>\n  <game-board [turn]="activeTurn"></game-board>\n</ion-content>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], LocalGamePage);
    return LocalGamePage;
    var _a;
}());

//# sourceMappingURL=local-game.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9sb2NhbC9sb2NhbC1nYW1lLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAudHMiLCIuLi8uLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2xvY2FsL2xvY2FsLWdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ087QUFDUTtBQUNIO0FBRXJEOzs7R0FHRztBQVdIO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBVDNCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEVBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCxzRUFBZSxDQUFDLFFBQVEsQ0FBQyw4RUFBYSxDQUFDO2dCQUN2QywyRUFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJXO0FBQ007QUFDSDtBQUM0QjtBQUNTO0FBbUIvRTtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBakJ4Qix1RUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ1AscUVBQVk7Z0JBQ1osa0VBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVztnQkFDWCw4RkFBa0I7Z0JBQ2xCLHVHQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnFFO0FBQ1Y7QUFPcEY7SUFNRTtRQUZVLGVBQVUsR0FBRyxJQUFJLG1FQUFZLEVBQWEsQ0FBQztRQUduRCxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSTtZQUM1QixFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUk7WUFDNUIsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJO1NBQzdCO0lBQ0gsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxJQUFVO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFoQlE7UUFBUixvRUFBSyxFQUFFOztvREFBYztJQUNiO1FBQVIsb0VBQUssRUFBRTtzREFBUywwREFBTSxvQkFBTiwwREFBTTtzREFBQztJQUNmO1FBQVIsb0VBQUssRUFBRTtzREFBYSw4REFBVSxvQkFBViw4REFBVTswREFBQztJQUN0QjtRQUFULHFFQUFNLEVBQUU7OzBEQUE0QztJQUoxQyxrQkFBa0I7UUFMOUIsd0VBQVMsQ0FBQztZQUNULGVBQWUsRUFBRSw4RUFBdUIsQ0FBQyxNQUFNO1lBQy9DLFFBQVEsRUFBRSxZQUFZO1dBQ1U7U0FDakMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FtQjlCO0lBQUQsV0FBQzs7QUFBQTtTQW5CWSxrQkFBa0IsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0I7QUFPL0M7SUFBQTtJQU9BLENBQUM7SUFOVTtRQUFSLG9FQUFLLEVBQUU7O3VEQUFjO0lBQ2I7UUFBUixvRUFBSyxFQUFFOzswREFBc0I7SUFGbkIscUJBQXFCO1FBSmpDLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtVQUNVO1NBQ3BDLENBQUM7T0FDVyxxQkFBcUIsQ0FPakM7SUFBRCxDQUFDO0FBQUE7U0FQWSxxQkFBcUIsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFE7QUFDSTtBQVE5QztJQUtFLHVCQUFtQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSHpDLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixZQUFPLEdBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUMsQ0FBQztJQUlyRyxDQUFDO0lBUFUsYUFBYTtRQUp6Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtXQUNHO1NBQy9CLENBQUM7c0JBTXlDO09BTDlCLGFBQWEsQ0FTekI7SUFBRCxPQUFDOztBQUFBO1NBVFksYUFBYSxnQiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZU1vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTG9jYWxHYW1lUGFnZSB9IGZyb20gJ0BwYWdlcy9sb2NhbC9sb2NhbC1nYW1lJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ0BzaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbi8qKlxuICogSU1QT1JUQU5UIDogcmVnaXN0ZXIgdGhlIG5hbWUgbGl0ZXJhbCBpbiBhcHAvTGF6eVBhZ2VzLnRzIHNvIHdlIGFyZSBhbHdheXMgdXNpbmcgcmVmZXJlbmNlcyB0byB0aGUgc3RyaW5nIGxpdGVyYWwgbGF6eSBuYW1lc1xuICogdGhlIGxhenkgbmFtZSBpcyB0aGUgY2xhc3MgbmFtZSB1bmxlc3MgaXQgaXMgb3ZlcnJpZGRlbi5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2NhbEdhbWVQYWdlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBJb25pY1BhZ2VNb2R1bGUuZm9yQ2hpbGQoTG9jYWxHYW1lUGFnZSksXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsR2FtZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2xvY2FsL2xvY2FsLWdhbWUubW9kdWxlLnRzIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW9uaWNNb2R1bGV9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHtHYW1lQm9hcmRDb21wb25lbnR9IGZyb20gJ0BzaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAnO1xuaW1wb3J0IHtQbGF5ZXJIZWFkZXJDb21wb25lbnR9IGZyb20gJ0BzaGFyZWQvcGxheWVyLWhlYWRlci9wbGF5ZXItaGVhZGVyLmNvbXAnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHYW1lQm9hcmRDb21wb25lbnQsXG4gICAgUGxheWVySGVhZGVyQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEdhbWVCb2FyZENvbXBvbmVudCxcbiAgICBQbGF5ZXJIZWFkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhbWVTdGF0ZSwgUGxheWVyLCBCb2FyZFN0YXRlLCBUdXJuRXZlbnQsIE1vdmUgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnZ2FtZS1ib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYW1lLWJvYXJkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHR1cm46IG51bWJlcjtcbiAgQElucHV0KCkgcGxheWVyOiBQbGF5ZXI7XG4gIEBJbnB1dCgpIGJvYXJkU3RhdGU6IEJvYXJkU3RhdGU7XG4gIEBPdXRwdXQoKSB0dXJuRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxUdXJuRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZFN0YXRlID0ge1xuICAgICAgVUw6IG51bGwsIFVNOiBudWxsLCBVUjogbnVsbCxcbiAgICAgIE1MOiBudWxsLCBNTTogbnVsbCwgTVI6IG51bGwsXG4gICAgICBMTDogbnVsbCwgTE06IG51bGwsIExSOiBudWxsXG4gICAgfVxuICB9XG5cbiAgcGxheWVyQWN0aW9uKG1vdmU6IE1vdmUpIHtcbiAgICB0aGlzLmJvYXJkU3RhdGVbbW92ZV0gPSB0aGlzLnR1cm47XG4gICAgdGhpcy50dXJuRXZlbnRzLmVtaXQoe21vdmU6IG1vdmUsIHBsYXllcjogdGhpcy5wbGF5ZXJ9KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wLnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhbWVQbGF5ZXJzIH0gZnJvbSAnQHNoYXJlZC9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGxheWVyLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXItaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllckhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHR1cm46IG51bWJlcjtcbiAgQElucHV0KCkgcGxheWVyczogR2FtZVBsYXllcnM7XG5cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvcGxheWVyLWhlYWRlci9wbGF5ZXItaGVhZGVyLmNvbXAudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIElvbmljUGFnZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgR2FtZVBsYXllcnMgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5ASW9uaWNQYWdlKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbG9jYWwtZ2FtZScsXG4gIHRlbXBsYXRlVXJsOiAnbG9jYWwtZ2FtZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVQYWdlIHtcblxuICBhY3RpdmVUdXJuID0gMDtcbiAgcGxheWVyczogR2FtZVBsYXllcnMgPSBbe25hbWU6J0ppbScsIHR1cm5JZDogMCwgZGJJZDonMTIzNCd9LHtuYW1lOidKb25lcycsIHR1cm5JZDogMSwgZGJJZDonMTIzNDUnfV1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlcikge1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2xvY2FsL2xvY2FsLWdhbWUudHMiXSwic291cmNlUm9vdCI6IiJ9