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
        this.sendGameState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.state = {
            UL: null, UM: null, UR: null,
            ML: null, MM: null, MR: null,
            LL: null, LM: null, LR: null
        };
    }
    GameBoardComponent.prototype.playerAction = function (move) {
        this.state[move] = this.turn;
        this.sendGameState.emit(this.state);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GameBoardComponent.prototype, "turn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GameBoardComponent.prototype, "players", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], GameBoardComponent.prototype, "sendGameState", void 0);
    GameBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-board',template:/*ion-inline-start:"/Users/sailer/Shipt/tictactoe/src/shared/game-board/game-board.html"*/'<ion-grid>\n  <ion-row class="linedRow">\n    <ion-col class="linedColumn" (click)="playerAction(\'UL\')">\n      <div *ngIf="state.UL === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.UL === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col class="linedColumn" (click)="playerAction(\'UM\')">\n      <div *ngIf="state.UM === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.UM === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col  (click)="playerAction(\'UR\')">\n      <div *ngIf="state.UR === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.UR === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n  </ion-row>\n  <ion-row class="linedRow">\n    <ion-col class="linedColumn" (click)="playerAction(\'ML\')">\n      <div *ngIf="state.ML === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.ML === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col class="linedColumn" (click)="playerAction(\'MM\')">\n      <div *ngIf="state.MM === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.MM === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col  (click)="playerAction(\'MR\')">\n      <div *ngIf="state.MR === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.MR === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="linedColumn" (click)="playerAction(\'LL\')">\n      <div *ngIf="state.LL === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.LL === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col class="linedColumn"  (click)="playerAction(\'LM\')">\n      <div *ngIf="state.LM === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.LM === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n    <ion-col (click)="playerAction(\'LR\')">\n      <div *ngIf="state.LR === 0"><p class="markStyle">O</p></div>\n      <div *ngIf="state.LR === 1"><p class="markStyle">X</p></div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/sailer/Shipt/tictactoe/src/shared/game-board/game-board.html"*/
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUudHMiLCIuLi8uLi9zcmMvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCIuLi8uLi9zcmMvc2hhcmVkL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wLnRzIiwiLi4vLi4vc3JjL3NoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcC50cyIsIi4uLy4uL3NyYy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUNRO0FBQ0g7QUFFckQ7OztHQUdHO0FBV0g7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUFUMUIsdUVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw4RUFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHNFQUFlLENBQUMsUUFBUSxDQUFDLDhFQUFZLENBQUM7Z0JBQ3RDLDJFQUFZO2FBQ2I7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQTtBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlk7QUFDTTtBQUNIO0FBQzRCO0FBQ1M7QUFtQi9FO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFqQnhCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osOEZBQWtCO2dCQUNsQix1R0FBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVzthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFFQUFZO2dCQUNaLGtFQUFXO2dCQUNYLDhGQUFrQjtnQkFDbEIsdUdBQXFCO2FBQ3RCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjRDO0FBT3JFO0lBTUU7UUFIVSxrQkFBYSxHQUFHLElBQUksbUVBQVksRUFBYSxDQUFDO1FBSXRELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUk7WUFDNUIsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJO1lBQzVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSTtTQUM3QjtJQUNILENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsSUFBWTtRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFoQlE7UUFBUixvRUFBSyxFQUFFOztvREFBYztJQUNiO1FBQVIsb0VBQUssRUFBRTs7dURBQWtCO0lBQ2hCO1FBQVQscUVBQU0sRUFBRTs7NkRBQStDO0lBSDdDLGtCQUFrQjtRQUo5Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7V0FDVTtTQUNqQyxDQUFDOztPQUNXLGtCQUFrQixDQW1COUI7SUFBRCxDQUFDO0FBQUE7U0FuQlksa0JBQWtCLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmdCO0FBTy9DO0lBQUE7SUFPQSxDQUFDO0lBTlU7UUFBUixvRUFBSyxFQUFFOzt1REFBYztJQUNiO1FBQVIsb0VBQUssRUFBRTs7MERBQWtCO0lBRmYscUJBQXFCO1FBSmpDLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtVQUNVO1NBQ3BDLENBQUM7T0FDVyxxQkFBcUIsQ0FPakM7SUFBRCxDQUFDO0FBQUE7U0FQWSxxQkFBcUIsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFE7QUFDSTtBQU85QztJQUVFLHNCQUFtQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0lBRXpDLENBQUM7SUFKVSxZQUFZO1FBSnhCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtXQUNHO1NBQzdCLENBQUM7cUJBR3lDO09BRjlCLFlBQVksQ0FNeEI7SUFBRCxDQUFDO0FBQUE7U0FOWSxZQUFZLGUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY1BhZ2VNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJ0BwYWdlcy9zZXR0aW5ncy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdAc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG4vKipcbiAqIElNUE9SVEFOVCA6IHJlZ2lzdGVyIHRoZSBuYW1lIGxpdGVyYWwgaW4gYXBwL0xhenlQYWdlcy50cyBzbyB3ZSBhcmUgYWx3YXlzIHVzaW5nIHJlZmVyZW5jZXMgdG8gdGhlIHN0cmluZyBsaXRlcmFsIGxhenkgbmFtZXNcbiAqIHRoZSBsYXp5IG5hbWUgaXMgdGhlIGNsYXNzIG5hbWUgdW5sZXNzIGl0IGlzIG92ZXJyaWRkZW4uXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2V0dGluZ3NQYWdlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBJb25pY1BhZ2VNb2R1bGUuZm9yQ2hpbGQoU2V0dGluZ3NQYWdlKSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUudHMiLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQge0dhbWVCb2FyZENvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcCc7XG5pbXBvcnQge1BsYXllckhlYWRlckNvbXBvbmVudH0gZnJvbSAnQHNoYXJlZC9wbGF5ZXItaGVhZGVyL3BsYXllci1oZWFkZXIuY29tcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdhbWVCb2FyZENvbXBvbmVudCxcbiAgICBQbGF5ZXJIZWFkZXJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgR2FtZUJvYXJkQ29tcG9uZW50LFxuICAgIFBsYXllckhlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhbWVTdGF0ZSwgUGxheWVycyB9IGZyb20gJ0BzaGFyZWQvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gvZnAnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FtZS1ib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYW1lLWJvYXJkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHR1cm46IG51bWJlcjtcbiAgQElucHV0KCkgcGxheWVyczogUGxheWVycztcbiAgQE91dHB1dCgpIHNlbmRHYW1lU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEdhbWVTdGF0ZT4oKTtcbiAgcHJpdmF0ZSBzdGF0ZTogR2FtZVN0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBVTDogbnVsbCwgVU06IG51bGwsIFVSOiBudWxsLFxuICAgICAgTUw6IG51bGwsIE1NOiBudWxsLCBNUjogbnVsbCxcbiAgICAgIExMOiBudWxsLCBMTTogbnVsbCwgTFI6IG51bGxcbiAgICB9XG4gIH1cblxuICBwbGF5ZXJBY3Rpb24obW92ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdGF0ZVttb3ZlXSA9IHRoaXMudHVybjtcbiAgICB0aGlzLnNlbmRHYW1lU3RhdGUuZW1pdCh0aGlzLnN0YXRlKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wLnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tICdAc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwbGF5ZXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYXllci1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGxheWVySGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHVybjogbnVtYmVyO1xuICBASW5wdXQoKSBwbGF5ZXJzOiBQbGF5ZXJzO1xuXG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3BsYXllci1oZWFkZXIvcGxheWVyLWhlYWRlci5jb21wLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBJb25pY1BhZ2UgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuQElvbmljUGFnZSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1BhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyKSB7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiXSwic291cmNlUm9vdCI6IiJ9