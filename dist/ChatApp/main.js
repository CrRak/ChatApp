(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ChatApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _main_page_search_chat_search_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/search-chat/search-chat.component */ "./src/app/main-page/search-chat/search-chat.component.ts");
/* harmony import */ var _main_page_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/chat-list/chat-list.component */ "./src/app/main-page/chat-list/chat-list.component.ts");
/* harmony import */ var _main_page_current_chat_current_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-page/current-chat/current-chat.component */ "./src/app/main-page/current-chat/current-chat.component.ts");
/* harmony import */ var _main_page_current_user_current_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-page/current-user/current-user.component */ "./src/app/main-page/current-user/current-user.component.ts");
/* harmony import */ var _main_page_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/user-profile/user-profile.component */ "./src/app/main-page/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"],
                _main_page_search_chat_search_chat_component__WEBPACK_IMPORTED_MODULE_7__["SearchChatComponent"],
                _main_page_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatListComponent"],
                _main_page_current_chat_current_chat_component__WEBPACK_IMPORTED_MODULE_9__["CurrentChatComponent"],
                _main_page_current_user_current_user_component__WEBPACK_IMPORTED_MODULE_10__["CurrentUserComponent"],
                _main_page_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
                    { path: 'home', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left {\r\n  border-right: 1px solid rgb(102, 101, 101);\r\n  padding-right: 20px;\r\n}\r\nem{\r\n  float: right;\r\n  color: #E05C65;\r\n  padding-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0VBQzNDLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDEwMiwgMTAxLCAxMDEpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuZW17XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjRTA1QzY1O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n\r\n  <div class=\"row justify-content-center\" style=\"background-color: #4a148c; color: white; padding-top: 50px; padding-bottom: 50px;\">\r\n    <div class=\"col-1\">\r\n      <p> image logo</p>\r\n      <p> image logo</p>\r\n      <p> image logo</p>\r\n      <p> image logo</p>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div class=\"row\">\r\n        <h1 > ChatApp </h1>\r\n      </div>\r\n      <div class=\"row\">\r\n        <p> This is a wonderful messaging app and it wil blow your mind again and again. you can chat,voice call, video chat. send stickers, pictures, documents etc. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\" style=\"padding-top: 70px;\">\r\n    <div class=\"col-md-4\" >\r\n      <div class=\"left\" style=\"padding-right: 150px;\">\r\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"onLoginSubmit(loginForm )\">\r\n          <div class=\"form-group\">\r\n            <label for=\"loginMailId\">Email address</label>\r\n            <em *ngIf=\"!loginForm.controls.email?.valid && (loginForm.controls.email?.touched || mouseoverLogin)\">Required</em>\r\n            <input (ngModel)=\"loginMailId\" type=\"email\" class=\"form-control\" id=\"loginMailId\" name=\"email\" required >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"loginPassword\">Password</label>\r\n            <em *ngIf=\"!loginForm.controls.password?.valid && (loginForm.controls.password?.touched || mouseoverLogin)\">Required</em>\r\n            <input (ngModel)=\"loginPassword\" type=\"password\" class=\"form-control\" id=\"loginPassword\" name=\"password\" required>\r\n          </div>\r\n          <span (mouseenter)=\"mouseoverLogin=true\" (mouseleave)=\"mouseoverLogin=false\">\r\n          <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-primary\" >Login</button>\r\n        </span>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"right\" style=\"padding-left: 150px;\">\r\n        <form #registerForm=\"ngForm\" (ngSubmit)=\"onRegisterSubmit(registerForm)\">\r\n          <div class=\"form-group\">\r\n\r\n            <label for=\"registerName\">Name</label>\r\n            <em *ngIf=\"!registerForm.controls.name?.valid && (registerForm.controls.name?.touched || mouseoverRegister)\">Required</em>\r\n            <input type=\"text\" (ngModel)=\"registerName\" class=\"form-control\" id=\"registerName\" name=\"name\"  required>\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"registerMailId\">Email address</label>\r\n            <em *ngIf=\"!registerForm.controls.email?.valid && (registerForm.controls.email?.touched || mouseoverRegister)\">Required</em>\r\n            <input type=\"email\" (ngModel)=\"registerMailId\" class=\"form-control\" id=\"registerMailId\" name=\"email\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"registerPassword\">Password</label>\r\n            <em *ngIf=\"!registerForm.controls.password?.valid && (registerForm.controls.password?.touched || mouseoverRegister)\">Required</em>\r\n            <input type=\"password\" (ngModel)=\"registerPassword\" class=\"form-control\" id=\"registerPassword\" name=\"password\" required>\r\n          </div>\r\n          <span (mouseenter)=\"mouseoverRegister=true\" (mouseleave)=\"mouseoverRegister=false\">\r\n          <button type=\"submit\" [disabled]=\"registerForm.invalid\" class=\"btn btn-primary\">Register</button>\r\n        </span>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.onLoginSubmit = function (form) {
        var _this = this;
        this.http.post('http://localhost:8080/login', { "user": form.value }).subscribe(function (data) {
            if (data.success == true) {
                localStorage.setItem("user", JSON.stringify(data.user));
                _this.route.navigate(['/home']);
            }
            else {
                alert(data.message);
            }
        });
    };
    HomePageComponent.prototype.onRegisterSubmit = function (form) {
        var _this = this;
        this.http.post('http://localhost:8080/register', { "user": form.value }).subscribe(function (data) {
            if (data.success == true) {
                alert(data);
                localStorage.setItem("user", JSON.stringify(data.user));
                _this.route.navigate(['/home']);
            }
            else {
                alert(data.message);
            }
        });
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/chat-list/chat-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-page/chat-list/chat-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li.contact {\r\n  position: inherit ;\r\n  padding: 10px 0 15px 0;\r\n  font-size: 0.9em;\r\n  cursor: pointer;\r\n  margin-left: -40px;\r\n  width: 400px;\r\n  border-bottom:0.5px solid gray;\r\n}\r\n\r\nul li.contact:hover {\r\n  background: #b39ddb;\r\n  margin-left: -40px;\r\n  width: 400px;\r\n}\r\n\r\nul li.contact.active {\r\n  background: #32465a;\r\n  border-right: 5px solid #435f7a;\r\n\r\n}\r\n\r\nul li.contact.active span.contact-status {\r\n  border: 2px solid #32465a !important;\r\n  width: 100%;\r\n}\r\n\r\nul li.contact .wrap {\r\n  width: 100%;\r\n\r\n  position: relative;\r\n}\r\n\r\nul li.contact .wrap {\r\n  width: 100%;\r\n}\r\n\r\nul li.contact .wrap span {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: -2px 0 0 -2px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  border: 2px solid #2c3e50;\r\n  background: #95a5a6;\r\n}\r\n\r\nul li.contact .wrap span.online {\r\n  background: #2ecc71;\r\n}\r\n\r\nul li.contact .wrap img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\nul li.contact .wrap img {\r\n    margin-right: 0px;\r\n}\r\n\r\nul li.contact .wrap .meta {\r\n  padding: 5px 0 0 0;\r\n}\r\n\r\nul li.contact .wrap .meta .name {\r\nfont-weight: 600;\r\n}\r\n\r\nul li.contact .wrap .meta .preview {\r\nmargin: 5px 0 0 0;\r\npadding: 0 0 1px;\r\nfont-weight: 400;\r\nwhite-space: inherit;\r\noverflow: hidden;\r\ntext-overflow: ellipsis;\r\ntransition: 1s all ease;\r\n}\r\n\r\nul li.contact .wrap .meta .preview span {\r\nposition: initial;\r\nborder-radius: initial;\r\nbackground: none;\r\nborder: none;\r\npadding: 0 2px 0 0;\r\nmargin: 0 0 0 1px;\r\nopacity: .5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGdDQUFnQzs7Q0FFakM7O0FBRUQ7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtDQUNiOztBQUNEO0VBQ0UsWUFBWTs7RUFFWixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUdEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCOztBQUVBO0FBQ0QsaUJBQWlCO0NBQ2hCOztBQUNBO0FBQ0Qsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFJeEIsd0JBQXdCO0NBQ3ZCOztBQUNBO0FBQ0Qsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsWUFBWTtDQUNYIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIGxpLmNvbnRhY3Qge1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0IDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMTVweCAwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTowLjVweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG51bCBsaS5jb250YWN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYjM5ZGRiO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxudWwgbGkuY29udGFjdC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQzNWY3YTtcclxuXHJcbn1cclxuXHJcbnVsIGxpLmNvbnRhY3QuYWN0aXZlIHNwYW4uY29udGFjdC1zdGF0dXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ2NWEgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG51bCBsaS5jb250YWN0IC53cmFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbnVsIGxpLmNvbnRhY3QgLndyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG51bCBsaS5jb250YWN0IC53cmFwIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogLTJweCAwIDAgLTJweDtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyYzNlNTA7XHJcbiAgYmFja2dyb3VuZDogIzk1YTVhNjtcclxufVxyXG51bCBsaS5jb250YWN0IC53cmFwIHNwYW4ub25saW5lIHtcclxuICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG59XHJcblxyXG5cclxudWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbnVsIGxpLmNvbnRhY3QgLndyYXAgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbiB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIHtcclxuICBwYWRkaW5nOiA1cHggMCAwIDA7XHJcbn1cclxuXHJcbiB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5uYW1lIHtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4gdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyB7XHJcbm1hcmdpbjogNXB4IDAgMCAwO1xyXG5wYWRkaW5nOiAwIDAgMXB4O1xyXG5mb250LXdlaWdodDogNDAwO1xyXG53aGl0ZS1zcGFjZTogaW5oZXJpdDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxudGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi1tb3otdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XHJcbi1vLXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4td2Via2l0LXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG50cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcclxufVxyXG4gdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyBzcGFuIHtcclxucG9zaXRpb246IGluaXRpYWw7XHJcbmJvcmRlci1yYWRpdXM6IGluaXRpYWw7XHJcbmJhY2tncm91bmQ6IG5vbmU7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogMCAycHggMCAwO1xyXG5tYXJnaW46IDAgMCAwIDFweDtcclxub3BhY2l0eTogLjU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main-page/chat-list/chat-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-page/chat-list/chat-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\">\r\n  <ul>\r\n    <li class=\"contact \" *ngFor=\"let chat of chats\">\r\n      <div class=\"wrap\">\r\n        <span class=\"contact-status online\"></span>\r\n        <img src=\"{{chat.imageUrl}}\" alt=\"\" />\r\n        <div class=\"meta\">\r\n          <p class=\"name\">{{chat.name}}</p>\r\n          <p class=\"preview\">{{chat.message}}</p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-page/chat-list/chat-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-page/chat-list/chat-list.component.ts ***!
  \************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatListComponent = /** @class */ (function () {
    function ChatListComponent() {
        this.chats = [
            {
                'name': 'Louis Litt',
                'message': 'You just got litt up',
                'imageUrl': 'http://emilcarlsson.se/assets/louislitt.png'
            },
            {
                'name': 'Tom Spectar',
                'message': 'Meow meow',
                'imageUrl': 'http://emilcarlsson.se/assets/louislitt.png'
            },
            {
                'name': 'Donna Paulsen',
                'message': 'I am too busy being awesome',
                'imageUrl': 'http://emilcarlsson.se/assets/louislitt.png'
            },
            {
                'name': 'Rachel Zane',
                'message': 'Louis, loot at this!',
                'imageUrl': 'http://emilcarlsson.se/assets/louislitt.png'
            },
            {
                'name': 'Jessica Pearson',
                'message': 'In my cabin, now!',
                'imageUrl': 'http://emilcarlsson.se/assets/louislitt.png'
            },
            {
                'name': 'Kartrina Bennet',
                'message': 'here are the files you wanted',
                'imageUrl': 'http://emilcarlsson.se/assets/louislitt.png'
            }
        ];
    }
    ChatListComponent.prototype.ngOnInit = function () {
    };
    ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! ./chat-list.component.html */ "./src/app/main-page/chat-list/chat-list.component.html"),
            styles: [__webpack_require__(/*! ./chat-list.component.css */ "./src/app/main-page/chat-list/chat-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./src/app/main-page/current-chat/current-chat.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main-page/current-chat/current-chat.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n  float: right;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 1000px;\r\n  min-width: 300px !important;\r\n\r\n}\r\n\r\n.content .contact-profile {\r\n  width: 1500px;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  background: #f5f5f5;\r\n  position: absolute;\r\n\r\n\r\n}\r\n\r\n.content .contact-profile img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 9px 12px 0 9px;\r\n}\r\n\r\n.content .contact-profile p {\r\n  float: left;\r\n}\r\n\r\n.content .messages {\r\n  position: relative;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  height: auto;\r\n  margin-top: 80px;\r\n  margin-left: -30px;\r\n  margin-right: -20px;\r\n}\r\n\r\n.content .messages ul li {\r\n  display: inline-block;\r\n  clear: both;\r\n  float: left;\r\n  margin: 15px 15px 5px 15px;\r\n  width: calc(100% - 25px);\r\n  font-size: 0.9em;\r\n}\r\n\r\n.content .messages ul li.sent img {\r\n  margin: 6px 8px 0 0;\r\n}\r\n\r\n.content .messages ul li.sent p {\r\n\r\n  background: #ae52d4;\r\n  color: #f5f5f5;\r\n}\r\n\r\n.content .messages ul li.replies img {\r\n  float: right;\r\n  margin: 6px 0 0 8px;\r\n}\r\n\r\n.content .messages ul li.replies p {\r\n  background: #f5f5f5;\r\n  float: right;\r\n}\r\n\r\n.content .messages ul li img {\r\n  width: 22px;\r\n  border-radius: 50%;\r\n  float: left;\r\n}\r\n\r\n.content .messages ul li p {\r\n  display: inline-block;\r\n  padding: 10px 15px;\r\n  border-radius: 20px;\r\n  max-width: 205px;\r\n  line-height: 130%;\r\n}\r\n\r\n.content .messages ul li p {\r\n  max-width: 800px;\r\n}\r\n\r\n.content .message-input {\r\n  position: fixed;\r\n  padding-left: 20px;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n.content .message-input .wrap {\r\n  position: relative;\r\n}\r\n\r\n.content .message-input .wrap input {\r\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n  float: left;\r\n\r\n  width: calc(100% - 90px);\r\n  padding: 11px 32px 10px 8px;\r\n  font-size: 0.8em;\r\n  color: #32465a;\r\n}\r\n\r\n.content .message-input .wrap input {\r\n  padding: 15px 32px 16px 8px;\r\n}\r\n\r\n.content .message-input .wrap input:focus {\r\n  outline: none;\r\n}\r\n\r\n.content .message-input .wrap button {\r\n  float: right;\r\n\r\n  width: 50px;\r\n\r\n  cursor: pointer;\r\n  background-color: cornflowerblue;\r\n\r\n\r\n}\r\n\r\n.content .message-input .wrap button {\r\n  padding: 16px 0;\r\n}\r\n\r\n.content .message-input .wrap button:hover {\r\n  background: #435f7a;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL2N1cnJlbnQtY2hhdC9jdXJyZW50LWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDRCQUE0Qjs7Q0FFN0I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1COzs7Q0FHcEI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7Q0FDeEI7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBR0Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFDRDs7RUFFRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtDQUNkOztBQUNEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25COztBQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLDREQUE0RDtFQUM1RCxZQUFZOztFQUVaLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7O0FBR0Q7RUFDRSxhQUFhOztFQUViLFlBQVk7O0VBRVosZ0JBQWdCO0VBQ2hCLGlDQUFpQzs7O0NBR2xDOztBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL2N1cnJlbnQtY2hhdC9jdXJyZW50LWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSB7XHJcbiAgd2lkdGg6IDE1MDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cclxufVxyXG4uY29udGVudCAuY29udGFjdC1wcm9maWxlIGltZyB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogOXB4IDEycHggMCA5cHg7XHJcbn1cclxuLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSBwIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29udGVudCAubWVzc2FnZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAxNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IGltZyB7XHJcbiAgbWFyZ2luOiA2cHggOHB4IDAgMDtcclxufVxyXG4uY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBwIHtcclxuXHJcbiAgYmFja2dyb3VuZDogI2FlNTJkNDtcclxuICBjb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4uY29udGVudCAubWVzc2FnZXMgdWwgbGkucmVwbGllcyBpbWcge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDZweCAwIDAgOHB4O1xyXG59XHJcbi5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIHAge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBpbWcge1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMjA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcbn1cclxuXHJcbiAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcbi5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCAgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcclxuICBmbG9hdDogbGVmdDtcclxuXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gIHBhZGRpbmc6IDExcHggMzJweCAxMHB4IDhweDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGNvbG9yOiAjMzI0NjVhO1xyXG59XHJcbi5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcclxuICBwYWRkaW5nOiAxNXB4IDMycHggMTZweCA4cHg7XHJcbn1cclxuLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbiAgd2lkdGg6IDUwcHg7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuXHJcblxyXG59XHJcbi5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG59XHJcbi5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/main-page/current-chat/current-chat.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-page/current-chat/current-chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"contact-profile\">\r\n    <img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\r\n    <p>Tom Spectar</p>\r\n  </div>\r\n  <div class=\"messages\" >\r\n    <ul>\r\n      <li *ngFor=\"let msg of msgs\" class=\"{{msg.status}}\">\r\n        <img src=\"{{msg.imageUrl}}\" alt=\"\" />\r\n        <p>{{msg.message}}</p>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n  <div class=\"message-input\">\r\n    <div class=\"wrap\">\r\n    <input type=\"text\" placeholder=\"Write your message...\" />\r\n    <i class=\"fa fa-paperclip attachment\" aria-hidden=\"true\"></i>\r\n    <button class=\"submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/main-page/current-chat/current-chat.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-page/current-chat/current-chat.component.ts ***!
  \******************************************************************/
/*! exports provided: CurrentChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChatComponent", function() { return CurrentChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrentChatComponent = /** @class */ (function () {
    function CurrentChatComponent() {
        this.msgs = [
            { "status": "sent",
                "message": "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!",
                "imageUrl": "http://emilcarlsson.se/assets/mikeross.png" },
            { "status": "replies",
                "message": "When you're backed against the wall, break the god damn thing down.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "replies",
                "message": "Excuses don't win championships.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "sent",
                "message": "Oh yeah, did Michael Jordan tell you that?",
                "imageUrl": "http://emilcarlsson.se/assets/mikeross.png" },
            { "status": "replies",
                "message": "No, I told him that.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "replies",
                "message": "What are your choices when someone puts a gun to your head?",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "sent",
                "message": "What are you talking about? You do what they say or they shoot you.",
                "imageUrl": "http://emilcarlsson.se/assets/mikeross.png" },
            { "status": "replies",
                "message": "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "replies",
                "message": "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "replies",
                "message": "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "replies",
                "message": "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "replies",
                "message": "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" },
            { "status": "replies",
                "message": "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
                "imageUrl": "http://emilcarlsson.se/assets/harveyspecter.png" }
        ];
    }
    CurrentChatComponent.prototype.ngOnInit = function () {
    };
    CurrentChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-chat',
            template: __webpack_require__(/*! ./current-chat.component.html */ "./src/app/main-page/current-chat/current-chat.component.html"),
            styles: [__webpack_require__(/*! ./current-chat.component.css */ "./src/app/main-page/current-chat/current-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrentChatComponent);
    return CurrentChatComponent;
}());



/***/ }),

/***/ "./src/app/main-page/current-user/current-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-page/current-user/current-user.component.ts ***!
  \******************************************************************/
/*! exports provided: CurrentUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserComponent", function() { return CurrentUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrentUserComponent = /** @class */ (function () {
    function CurrentUserComponent() {
    }
    CurrentUserComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
    };
    CurrentUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-user',
            template: "\n    <div>\n      <img style=\"border-radius:50px; width:80px; margin:10px;\" [src]=\"currentUser.image\"  />\n     <h4 style=\"float:right; margin-top:30px;margin-left:30px; color:white\"> {{currentUser.name}}</h4>\n  </div>\n  "
        })
    ], CurrentUserComponent);
    return CurrentUserComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left: 15px;\">\r\n  <div style=\"background-color:#4a0072  ; height:50px; margin-left:-16px; \" >\r\n    <app-search-chat></app-search-chat>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"row\" style=\"background-color:#7b1fa2; height:100px;\">\r\n        <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><app-current-user></app-current-user></a>\r\n      </div>\r\n      <div class=\"row\" style=\" height:500px;\">\r\n        <app-chat-list></app-chat-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row\" style=\"background-color: #d1c4e9; height:auto;\">\r\n        <app-current-chat></app-current-chat>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-user-profile></app-user-profile>\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
        console.log(localStorage.get("user"));
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/search-chat/search-chat.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/main-page/search-chat/search-chat.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9zZWFyY2gtY2hhdC9zZWFyY2gtY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main-page/search-chat/search-chat.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main-page/search-chat/search-chat.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline my-2 my-lg-0\" >\r\n  <div style=\"margin-left: 450px; margin-top: 7px;\">\r\n\r\n  <input  class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" style=\"width: 450px; border-radius: 30px;\">\r\n  <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n</div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/main-page/search-chat/search-chat.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main-page/search-chat/search-chat.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchChatComponent", function() { return SearchChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchChatComponent = /** @class */ (function () {
    function SearchChatComponent() {
    }
    SearchChatComponent.prototype.ngOnInit = function () {
    };
    SearchChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-chat',
            template: __webpack_require__(/*! ./search-chat.component.html */ "./src/app/main-page/search-chat/search-chat.component.html"),
            styles: [__webpack_require__(/*! ./search-chat.component.css */ "./src/app/main-page/search-chat/search-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchChatComponent);
    return SearchChatComponent;
}());



/***/ }),

/***/ "./src/app/main-page/user-profile/user-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main-page/user-profile/user-profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-title{\r\n  font-weight: bold;\r\n  margin-left: 150px;\r\n  font-size: 30px;\r\n}\r\n.modal-image{\r\n  border-radius: 50%;\r\n  width: 50%;\r\n  margin-left: 115px;\r\n}\r\n.modal-description{\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-size: 15px;\r\n  margin-top: 40px;\r\n  text-align: justify;\r\n  color: cornflowerblue;\r\n}\r\n.modal-emailId{\r\n  color: cornflowerblue;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaURBQWlEO0VBQ2pELGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0Usc0JBQXNCOztDQUV2QiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ubW9kYWwtaW1hZ2V7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDExNXB4O1xyXG59XHJcbi5tb2RhbC1kZXNjcmlwdGlvbntcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbn1cclxuLm1vZGFsLWVtYWlsSWR7XHJcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main-page/user-profile/user-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-page/user-profile/user-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- Trigger the modal with a button -->\r\n\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{this.name}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <img class=\"modal-image\" src='{{this.imageUrl}}' /><br>\r\n          <p class=\"modal-description\">{{this.description}}</p>\r\n          <p class=\"modal-emailID\">Email ID: {{this.emailId}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-page/user-profile/user-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-page/user-profile/user-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.name = "Mikado Litt";
        this.imageUrl = "http://emilcarlsson.se/assets/harveyspecter.png";
        this.description = "I am Litt, I love my owner cum best friend Loius.";
        this.emailId = "mikadolitt@bagelislove.com";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/main-page/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/main-page/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular stuff\ChatApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map