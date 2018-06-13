webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteGameModule", function() { return RemoteGameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_remote_remote_game__ = __webpack_require__(276);
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
            declarations: [],
            providers: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 276:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9yZW1vdGUvcmVtb3RlLWdhbWUubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3JlbW90ZS9yZW1vdGUtZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUNXO0FBQ047QUFFckQ7OztHQUdHO0FBV0g7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQVQ1Qix1RUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlGQUFjO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asc0VBQWUsQ0FBQyxRQUFRLENBQUMsaUZBQWMsQ0FBQztnQkFDeEMsMkVBQVk7YUFDYjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CVTtBQUNNO0FBQ0g7QUFnQjFDO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFkeEIsdUVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxFQUViO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ1AscUVBQVk7Z0JBQ1osa0VBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDUCxxRUFBWTtnQkFDWixrRUFBVzthQUNaO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJpQjtBQUNJO0FBTzlDO0lBRUUsd0JBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFFekMsQ0FBQztJQUpVLGNBQWM7UUFKMUIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7V0FDRztTQUNoQyxDQUFDO3VCQUd5QztPQUY5QixjQUFjLENBTTFCO0lBQUQsQ0FBQztBQUFBO1NBTlksY0FBYyxnQiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZU1vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgUmVtb3RlR2FtZVBhZ2UgfSBmcm9tICdAcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ0BzaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbi8qKlxuICogSU1QT1JUQU5UIDogcmVnaXN0ZXIgdGhlIG5hbWUgbGl0ZXJhbCBpbiBhcHAvTGF6eVBhZ2VzLnRzIHNvIHdlIGFyZSBhbHdheXMgdXNpbmcgcmVmZXJlbmNlcyB0byB0aGUgc3RyaW5nIGxpdGVyYWwgbGF6eSBuYW1lc1xuICogdGhlIGxhenkgbmFtZSBpcyB0aGUgY2xhc3MgbmFtZSB1bmxlc3MgaXQgaXMgb3ZlcnJpZGRlbi5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZW1vdGVHYW1lUGFnZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNQYWdlTW9kdWxlLmZvckNoaWxkKFJlbW90ZUdhbWVQYWdlKSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVtb3RlR2FtZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3JlbW90ZS9yZW1vdGUtZ2FtZS5tb2R1bGUudHMiLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgSW9uaWNQYWdlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbkBJb25pY1BhZ2UoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1yZW1vdGUtZ2FtZScsXG4gIHRlbXBsYXRlVXJsOiAncmVtb3RlLWdhbWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVtb3RlR2FtZVBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyKSB7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcmVtb3RlL3JlbW90ZS1nYW1lLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==