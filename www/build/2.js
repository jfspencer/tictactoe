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
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GameBoardComponent.prototype, "initials", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GameBoardComponent.prototype, "color", void 0);
    GameBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-board',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/shared/game-board/game-board.html"*/'<ion-grid>\n  <ion-row class="linedRow">\n    <ion-col class="linedColumn">\n      <div>hi</div>\n    </ion-col>\n    <ion-col class="linedColumn">\n      hi\n    </ion-col>\n    <ion-col>\n      hi\n    </ion-col>\n  </ion-row>\n  <ion-row class="linedRow">\n    <ion-col class="linedColumn">\n      hi\n    </ion-col>\n    <ion-col class="linedColumn">\n      hi\n    </ion-col>\n    <ion-col>\n      hi\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="linedColumn">\n      hi\n    </ion-col>\n    <ion-col class="linedColumn">\n      hi\n    </ion-col>\n    <ion-col>\n      hi\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/shared/game-board/game-board.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GameBoardComponent);
    return GameBoardComponent;
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
    ], PlayerHeaderComponent.prototype, "atPlay", void 0);
    PlayerHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'player-header',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/shared/player-header/player-header.html"*/'<ion-grid>\n  <ion-row align-items-start>\n    <ion-col>\n      <h4>player 1 {{player1AtPlay}}</h4>\n      <h5 *ngIf="atPlay === 0">At Play</h5>\n    </ion-col>\n    <ion-col>\n      <h4>Player 2 {{player2AtPlay}}</h4>\n      <h5 *ngIf="atPlay === 1">At Play</h5>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/shared/player-header/player-header.html"*/
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
        this.activePlayer = 0;
    }
    LocalGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-local-game',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TicTacToe</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <player-header [atPlay]="activePlayer"></player-header>\n  <game-board></game-board>\n</ion-content>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/pages/local/local-game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LocalGamePage);
    return LocalGamePage;
}());

//# sourceMappingURL=local-game.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9sb2NhbC9sb2NhbC1nYW1lLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAudHMiLCIuLi8uLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2xvY2FsL2xvY2FsLWdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ087QUFDUTtBQUNIO0FBRXJEOzs7R0FHRztBQVdIO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBVDNCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEVBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCxzRUFBZSxDQUFDLFFBQVEsQ0FBQyw4RUFBYSxDQUFDO2dCQUN2QywyRUFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJXO0FBQ007QUFDSDtBQUM0QjtBQUNTO0FBbUIvRTtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBakJ4Qix1RUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ1AscUVBQVk7Z0JBQ1osa0VBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVztnQkFDWCw4RkFBa0I7Z0JBQ2xCLHVHQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBO0FBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJzQjtBQU0vQztJQUlFO0lBQ0EsQ0FBQztJQUpRO1FBQVIsb0VBQUssRUFBRTs7d0RBQWtCO0lBQ2pCO1FBQVIsb0VBQUssRUFBRTs7cURBQWU7SUFGWixrQkFBa0I7UUFKOUIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1dBQ1U7U0FDakMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FPOUI7SUFBRCxDQUFDO0FBQUE7U0FQWSxrQkFBa0IsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0I7QUFNL0M7SUFBQTtJQUVBLENBQUM7SUFEVTtRQUFSLG9FQUFLLEVBQUU7O3lEQUFnQjtJQURiLHFCQUFxQjtRQUpqQyx3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7VUFDVTtTQUNwQyxDQUFDO09BQ1cscUJBQXFCLENBRWpDO0lBQUQsQ0FBQztBQUFBO1NBRlkscUJBQXFCLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BRO0FBQ0k7QUFPOUM7SUFJRSx1QkFBbUIsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUZ6QyxpQkFBWSxHQUFHLENBQUMsQ0FBQztJQUlqQixDQUFDO0lBTlUsYUFBYTtRQUp6Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtXQUNHO1NBQy9CLENBQUM7c0JBS3lDO09BSjlCLGFBQWEsQ0FRekI7SUFBRCxDQUFDO0FBQUE7U0FSWSxhQUFhLGdCIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNQYWdlTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBMb2NhbEdhbWVQYWdlIH0gZnJvbSAnQHBhZ2VzL2xvY2FsL2xvY2FsLWdhbWUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnQHNoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuLyoqXG4gKiBJTVBPUlRBTlQgOiByZWdpc3RlciB0aGUgbmFtZSBsaXRlcmFsIGluIGFwcC9MYXp5UGFnZXMudHMgc28gd2UgYXJlIGFsd2F5cyB1c2luZyByZWZlcmVuY2VzIHRvIHRoZSBzdHJpbmcgbGl0ZXJhbCBsYXp5IG5hbWVzXG4gKiB0aGUgbGF6eSBuYW1lIGlzIHRoZSBjbGFzcyBuYW1lIHVubGVzcyBpdCBpcyBvdmVycmlkZGVuLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvY2FsR2FtZVBhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIElvbmljUGFnZU1vZHVsZS5mb3JDaGlsZChMb2NhbEdhbWVQYWdlKSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbG9jYWwvbG9jYWwtZ2FtZS5tb2R1bGUudHMiLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQge0dhbWVCb2FyZENvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcCc7XG5pbXBvcnQge1BsYXllckhlYWRlckNvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdhbWVCb2FyZENvbXBvbmVudCxcbiAgICBQbGF5ZXJIZWFkZXJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgR2FtZUJvYXJkQ29tcG9uZW50LFxuICAgIFBsYXllckhlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYW1lLWJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbWUtYm9hcmQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW5pdGlhbHM6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wLnRzIiwiXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwbGF5ZXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYXllci1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGxheWVySGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYXRQbGF5OiBudW1iZXI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBJb25pY1BhZ2UgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuQElvbmljUGFnZSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWxvY2FsLWdhbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2xvY2FsLWdhbWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lUGFnZSB7XG5cbiAgYWN0aXZlUGxheWVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlcikge1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2xvY2FsL2xvY2FsLWdhbWUudHMiXSwic291cmNlUm9vdCI6IiJ9