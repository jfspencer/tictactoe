webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteGameModule", function() { return RemoteGameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_remote_remote_game__ = __webpack_require__(278);
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
var RemoteGameModule = /** @class */ (function () {
    function RemoteGameModule() {
    }
    RemoteGameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pages_remote_remote_game__["a" /* RemoteGamePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pages_remote_remote_game__["a" /* RemoteGamePage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], RemoteGameModule);
    return RemoteGameModule;
}());

//# sourceMappingURL=remote-game.module.js.map

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

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteGamePage; });
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


var RemoteGamePage = /** @class */ (function () {
    function RemoteGamePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RemoteGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remote-game',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/remote/remote-game.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Remote Game\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/remote/remote-game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RemoteGamePage);
    return RemoteGamePage;
}());

//# sourceMappingURL=remote-game.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9yZW1vdGUvcmVtb3RlLWdhbWUubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3NoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcC50cyIsIi4uLy4uL3NyYy9zaGFyZWQvcGxheWVyLWhlYWRlci9wbGF5ZXItaGVhZGVyLmNvbXAudHMiLCIuLi8uLi9zcmMvcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQ1c7QUFDTjtBQUVyRDs7O0dBR0c7QUFXSDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBVDVCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osaUZBQWM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCxzRUFBZSxDQUFDLFFBQVEsQ0FBQyxpRkFBYyxDQUFDO2dCQUN4QywyRUFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQTtBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlU7QUFDTTtBQUNIO0FBQzRCO0FBQ1M7QUFtQi9FO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFqQnhCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEZBQWtCO2dCQUNsQix1R0FBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVzthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFFQUFZO2dCQUNaLGtFQUFXO2dCQUNYLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcUU7QUFDVjtBQU9wRjtJQU1FO1FBRlUsZUFBVSxHQUFHLElBQUksbUVBQVksRUFBYSxDQUFDO1FBR25ELElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJO1lBQzVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSTtZQUM1QixFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUk7U0FDN0I7SUFDSCxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLElBQVU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWhCUTtRQUFSLG9FQUFLLEVBQUU7O29EQUFjO0lBQ2I7UUFBUixvRUFBSyxFQUFFO3NEQUFTLDBEQUFNLG9CQUFOLDBEQUFNO3NEQUFDO0lBQ2Y7UUFBUixvRUFBSyxFQUFFO3NEQUFhLDhEQUFVLG9CQUFWLDhEQUFVOzBEQUFDO0lBQ3RCO1FBQVQscUVBQU0sRUFBRTs7MERBQTRDO0lBSjFDLGtCQUFrQjtRQUw5Qix3RUFBUyxDQUFDO1lBQ1QsZUFBZSxFQUFFLDhFQUF1QixDQUFDLE1BQU07WUFDL0MsUUFBUSxFQUFFLFlBQVk7V0FDVTtTQUNqQyxDQUFDOztPQUNXLGtCQUFrQixDQW1COUI7SUFBRCxXQUFDOztBQUFBO1NBbkJZLGtCQUFrQixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JnQjtBQU8vQztJQUFBO0lBT0EsQ0FBQztJQU5VO1FBQVIsb0VBQUssRUFBRTs7dURBQWM7SUFDYjtRQUFSLG9FQUFLLEVBQUU7OzBEQUFzQjtJQUZuQixxQkFBcUI7UUFKakMsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1VBQ1U7U0FDcEMsQ0FBQztPQUNXLHFCQUFxQixDQU9qQztJQUFELENBQUM7QUFBQTtTQVBZLHFCQUFxQixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUTtBQUNJO0FBTzlDO0lBRUUsd0JBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFFekMsQ0FBQztJQUpVLGNBQWM7UUFKMUIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7V0FDRztTQUNoQyxDQUFDO3VCQUd5QztPQUY5QixjQUFjLENBTTFCO0lBQUQsQ0FBQztBQUFBO1NBTlksY0FBYyxnQiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZU1vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgUmVtb3RlR2FtZVBhZ2UgfSBmcm9tICdAcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ0BzaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbi8qKlxuICogSU1QT1JUQU5UIDogcmVnaXN0ZXIgdGhlIG5hbWUgbGl0ZXJhbCBpbiBhcHAvTGF6eVBhZ2VzLnRzIHNvIHdlIGFyZSBhbHdheXMgdXNpbmcgcmVmZXJlbmNlcyB0byB0aGUgc3RyaW5nIGxpdGVyYWwgbGF6eSBuYW1lc1xuICogdGhlIGxhenkgbmFtZSBpcyB0aGUgY2xhc3MgbmFtZSB1bmxlc3MgaXQgaXMgb3ZlcnJpZGRlbi5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZW1vdGVHYW1lUGFnZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNQYWdlTW9kdWxlLmZvckNoaWxkKFJlbW90ZUdhbWVQYWdlKSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVtb3RlR2FtZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3JlbW90ZS9yZW1vdGUtZ2FtZS5tb2R1bGUudHMiLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQge0dhbWVCb2FyZENvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcCc7XG5pbXBvcnQge1BsYXllckhlYWRlckNvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdhbWVCb2FyZENvbXBvbmVudCxcbiAgICBQbGF5ZXJIZWFkZXJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgR2FtZUJvYXJkQ29tcG9uZW50LFxuICAgIFBsYXllckhlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2FtZVN0YXRlLCBQbGF5ZXIsIEJvYXJkU3RhdGUsIFR1cm5FdmVudCwgTW92ZSB9IGZyb20gJ0BzaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdnYW1lLWJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbWUtYm9hcmQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHVybjogbnVtYmVyO1xuICBASW5wdXQoKSBwbGF5ZXI6IFBsYXllcjtcbiAgQElucHV0KCkgYm9hcmRTdGF0ZTogQm9hcmRTdGF0ZTtcbiAgQE91dHB1dCgpIHR1cm5FdmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPFR1cm5FdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkU3RhdGUgPSB7XG4gICAgICBVTDogbnVsbCwgVU06IG51bGwsIFVSOiBudWxsLFxuICAgICAgTUw6IG51bGwsIE1NOiBudWxsLCBNUjogbnVsbCxcbiAgICAgIExMOiBudWxsLCBMTTogbnVsbCwgTFI6IG51bGxcbiAgICB9XG4gIH1cblxuICBwbGF5ZXJBY3Rpb24obW92ZTogTW92ZSkge1xuICAgIHRoaXMuYm9hcmRTdGF0ZVttb3ZlXSA9IHRoaXMudHVybjtcbiAgICB0aGlzLnR1cm5FdmVudHMuZW1pdCh7bW92ZTogbW92ZSwgcGxheWVyOiB0aGlzLnBsYXllcn0pO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2FtZVBsYXllcnMgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwbGF5ZXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYXllci1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGxheWVySGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHVybjogbnVtYmVyO1xuICBASW5wdXQoKSBwbGF5ZXJzOiBHYW1lUGxheWVycztcblxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgSW9uaWNQYWdlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbkBJb25pY1BhZ2UoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1yZW1vdGUtZ2FtZScsXG4gIHRlbXBsYXRlVXJsOiAncmVtb3RlLWdhbWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVtb3RlR2FtZVBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyKSB7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==