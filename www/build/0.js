webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(279);
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
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], SettingsModule);
    return SettingsModule;
}());

//# sourceMappingURL=settings.module.js.map

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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUudHMiLCIuLi8uLi9zcmMvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCIuLi8uLi9zcmMvc2hhcmVkL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wLnRzIiwiLi4vLi4vc3JjL3NoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcC50cyIsIi4uLy4uL3NyYy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUNRO0FBQ0g7QUFFckQ7OztHQUdHO0FBV0g7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUFUMUIsdUVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw4RUFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHNFQUFlLENBQUMsUUFBUSxDQUFDLDhFQUFZLENBQUM7Z0JBQ3RDLDJFQUFZO2FBQ2I7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQTtBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlk7QUFDTTtBQUNIO0FBQzRCO0FBQ1M7QUFtQi9FO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFqQnhCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEZBQWtCO2dCQUNsQix1R0FBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVzthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFFQUFZO2dCQUNaLGtFQUFXO2dCQUNYLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcUU7QUFDVjtBQU9wRjtJQU1FO1FBRlUsZUFBVSxHQUFHLElBQUksbUVBQVksRUFBYSxDQUFDO1FBR25ELElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJO1lBQzVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSTtZQUM1QixFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUk7U0FDN0I7SUFDSCxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLElBQVU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWhCUTtRQUFSLG9FQUFLLEVBQUU7O29EQUFjO0lBQ2I7UUFBUixvRUFBSyxFQUFFO3NEQUFTLDBEQUFNLG9CQUFOLDBEQUFNO3NEQUFDO0lBQ2Y7UUFBUixvRUFBSyxFQUFFO3NEQUFhLDhEQUFVLG9CQUFWLDhEQUFVOzBEQUFDO0lBQ3RCO1FBQVQscUVBQU0sRUFBRTs7MERBQTRDO0lBSjFDLGtCQUFrQjtRQUw5Qix3RUFBUyxDQUFDO1lBQ1QsZUFBZSxFQUFFLDhFQUF1QixDQUFDLE1BQU07WUFDL0MsUUFBUSxFQUFFLFlBQVk7V0FDVTtTQUNqQyxDQUFDOztPQUNXLGtCQUFrQixDQW1COUI7SUFBRCxXQUFDOztBQUFBO1NBbkJZLGtCQUFrQixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JnQjtBQU8vQztJQUFBO0lBT0EsQ0FBQztJQU5VO1FBQVIsb0VBQUssRUFBRTs7dURBQWM7SUFDYjtRQUFSLG9FQUFLLEVBQUU7OzBEQUFzQjtJQUZuQixxQkFBcUI7UUFKakMsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1VBQ1U7U0FDcEMsQ0FBQztPQUNXLHFCQUFxQixDQU9qQztJQUFELENBQUM7QUFBQTtTQVBZLHFCQUFxQixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUTtBQUNJO0FBTzlDO0lBRUUsc0JBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFFekMsQ0FBQztJQUpVLFlBQVk7UUFKeEIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1dBQ0c7U0FDN0IsQ0FBQztxQkFHeUM7T0FGOUIsWUFBWSxDQU14QjtJQUFELENBQUM7QUFBQTtTQU5ZLFlBQVksZSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZU1vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnQHBhZ2VzL3NldHRpbmdzL3NldHRpbmdzJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ0BzaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbi8qKlxuICogSU1QT1JUQU5UIDogcmVnaXN0ZXIgdGhlIG5hbWUgbGl0ZXJhbCBpbiBhcHAvTGF6eVBhZ2VzLnRzIHNvIHdlIGFyZSBhbHdheXMgdXNpbmcgcmVmZXJlbmNlcyB0byB0aGUgc3RyaW5nIGxpdGVyYWwgbGF6eSBuYW1lc1xuICogdGhlIGxhenkgbmFtZSBpcyB0aGUgY2xhc3MgbmFtZSB1bmxlc3MgaXQgaXMgb3ZlcnJpZGRlbi5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTZXR0aW5nc1BhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIElvbmljUGFnZU1vZHVsZS5mb3JDaGlsZChTZXR0aW5nc1BhZ2UpLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc01vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZS50cyIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0lvbmljTW9kdWxlfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7R2FtZUJvYXJkQ29tcG9uZW50fSBmcm9tICdAc2hhcmVkL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wJztcbmltcG9ydCB7UGxheWVySGVhZGVyQ29tcG9uZW50fSBmcm9tICdAc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR2FtZUJvYXJkQ29tcG9uZW50LFxuICAgIFBsYXllckhlYWRlckNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBHYW1lQm9hcmRDb21wb25lbnQsXG4gICAgUGxheWVySGVhZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYW1lU3RhdGUsIFBsYXllciwgQm9hcmRTdGF0ZSwgVHVybkV2ZW50LCBNb3ZlIH0gZnJvbSAnQHNoYXJlZC9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ2dhbWUtYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2FtZS1ib2FyZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmRDb21wb25lbnQge1xuICBASW5wdXQoKSB0dXJuOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYXllcjogUGxheWVyO1xuICBASW5wdXQoKSBib2FyZFN0YXRlOiBCb2FyZFN0YXRlO1xuICBAT3V0cHV0KCkgdHVybkV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8VHVybkV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRTdGF0ZSA9IHtcbiAgICAgIFVMOiBudWxsLCBVTTogbnVsbCwgVVI6IG51bGwsXG4gICAgICBNTDogbnVsbCwgTU06IG51bGwsIE1SOiBudWxsLFxuICAgICAgTEw6IG51bGwsIExNOiBudWxsLCBMUjogbnVsbFxuICAgIH1cbiAgfVxuXG4gIHBsYXllckFjdGlvbihtb3ZlOiBNb3ZlKSB7XG4gICAgdGhpcy5ib2FyZFN0YXRlW21vdmVdID0gdGhpcy50dXJuO1xuICAgIHRoaXMudHVybkV2ZW50cy5lbWl0KHttb3ZlOiBtb3ZlLCBwbGF5ZXI6IHRoaXMucGxheWVyfSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcC50cyIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYW1lUGxheWVycyB9IGZyb20gJ0BzaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BsYXllci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGxheWVyLWhlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0dXJuOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYXllcnM6IEdhbWVQbGF5ZXJzO1xuXG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBJb25pY1BhZ2UgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuQElvbmljUGFnZSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1BhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyKSB7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiXSwic291cmNlUm9vdCI6IiJ9