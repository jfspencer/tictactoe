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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9yZW1vdGUvcmVtb3RlLWdhbWUubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3NoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcC50cyIsIi4uLy4uL3NyYy9zaGFyZWQvcGxheWVyLWhlYWRlci9wbGF5ZXItaGVhZGVyLmNvbXAudHMiLCIuLi8uLi9zcmMvcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQ1c7QUFDTjtBQUVyRDs7O0dBR0c7QUFXSDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBVDVCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osaUZBQWM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCxzRUFBZSxDQUFDLFFBQVEsQ0FBQyxpRkFBYyxDQUFDO2dCQUN4QywyRUFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQTtBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlU7QUFDTTtBQUNIO0FBQzRCO0FBQ1M7QUFtQi9FO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFqQnhCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEZBQWtCO2dCQUNsQix1R0FBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVzthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFFQUFZO2dCQUNaLGtFQUFXO2dCQUNYLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnNCO0FBTS9DO0lBSUU7SUFDQSxDQUFDO0lBSlE7UUFBUixvRUFBSyxFQUFFOzt3REFBa0I7SUFDakI7UUFBUixvRUFBSyxFQUFFOztxREFBZTtJQUZaLGtCQUFrQjtRQUo5Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7V0FDVTtTQUNqQyxDQUFDOztPQUNXLGtCQUFrQixDQU85QjtJQUFELENBQUM7QUFBQTtTQVBZLGtCQUFrQixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQjtBQU0vQztJQUFBO0lBRUEsQ0FBQztJQURVO1FBQVIsb0VBQUssRUFBRTs7eURBQWdCO0lBRGIscUJBQXFCO1FBSmpDLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtVQUNVO1NBQ3BDLENBQUM7T0FDVyxxQkFBcUIsQ0FFakM7SUFBRCxDQUFDO0FBQUE7U0FGWSxxQkFBcUIsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFE7QUFDSTtBQU85QztJQUVFLHdCQUFtQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0lBRXpDLENBQUM7SUFKVSxjQUFjO1FBSjFCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1dBQ0c7U0FDaEMsQ0FBQzt1QkFHeUM7T0FGOUIsY0FBYyxDQU0xQjtJQUFELENBQUM7QUFBQTtTQU5ZLGNBQWMsZ0IiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY1BhZ2VNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFJlbW90ZUdhbWVQYWdlIH0gZnJvbSAnQHBhZ2VzL3JlbW90ZS9yZW1vdGUtZ2FtZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdAc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG4vKipcbiAqIElNUE9SVEFOVCA6IHJlZ2lzdGVyIHRoZSBuYW1lIGxpdGVyYWwgaW4gYXBwL0xhenlQYWdlcy50cyBzbyB3ZSBhcmUgYWx3YXlzIHVzaW5nIHJlZmVyZW5jZXMgdG8gdGhlIHN0cmluZyBsaXRlcmFsIGxhenkgbmFtZXNcbiAqIHRoZSBsYXp5IG5hbWUgaXMgdGhlIGNsYXNzIG5hbWUgdW5sZXNzIGl0IGlzIG92ZXJyaWRkZW4uXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVtb3RlR2FtZVBhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIElvbmljUGFnZU1vZHVsZS5mb3JDaGlsZChSZW1vdGVHYW1lUGFnZSksXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlbW90ZUdhbWVNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9yZW1vdGUvcmVtb3RlLWdhbWUubW9kdWxlLnRzIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW9uaWNNb2R1bGV9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHtHYW1lQm9hcmRDb21wb25lbnR9IGZyb20gJ0BzaGFyZWQvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXAnO1xuaW1wb3J0IHtQbGF5ZXJIZWFkZXJDb21wb25lbnR9IGZyb20gJ0BzaGFyZWQvcGxheWVyLWhlYWRlci9wbGF5ZXItaGVhZGVyLmNvbXAnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHYW1lQm9hcmRDb21wb25lbnQsXG4gICAgUGxheWVySGVhZGVyQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEdhbWVCb2FyZENvbXBvbmVudCxcbiAgICBQbGF5ZXJIZWFkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIlxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FtZS1ib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYW1lLWJvYXJkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGluaXRpYWxzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcC50cyIsIlxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGxheWVyLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXItaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllckhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGF0UGxheTogbnVtYmVyO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgSW9uaWNQYWdlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbkBJb25pY1BhZ2UoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1yZW1vdGUtZ2FtZScsXG4gIHRlbXBsYXRlVXJsOiAncmVtb3RlLWdhbWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVtb3RlR2FtZVBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyKSB7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==