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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _visitor_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor/signup/signup.component */ "./src/app/visitor/signup/signup.component.ts");
/* harmony import */ var _visitor_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitor/login/login.component */ "./src/app/visitor/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book.service */ "./src/app/book.service.ts");
/* harmony import */ var _visitor_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visitor/home/home.component */ "./src/app/visitor/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visitor/visitor.component */ "./src/app/visitor/visitor.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _member_addbooks_addbooks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./member/addbooks/addbooks.component */ "./src/app/member/addbooks/addbooks.component.ts");
/* harmony import */ var _member_memberhome_memberhome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./member/memberhome/memberhome.component */ "./src/app/member/memberhome/memberhome.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./member/wishlist/wishlist.component */ "./src/app/member/wishlist/wishlist.component.ts");
/* harmony import */ var _member_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./member/messages/messages.component */ "./src/app/member/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _visitor_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
                _visitor_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _visitor_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_9__["VisitorComponent"],
                _member_member_component__WEBPACK_IMPORTED_MODULE_10__["MemberComponent"],
                _member_addbooks_addbooks_component__WEBPACK_IMPORTED_MODULE_11__["AddbooksComponent"],
                _member_memberhome_memberhome_component__WEBPACK_IMPORTED_MODULE_12__["MemberhomeComponent"],
                _member_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["WishlistComponent"],
                _member_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_14__["appRoutes"])
            ],
            providers: [_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book.service.ts":
/*!*********************************!*\
  !*** ./src/app/book.service.ts ***!
  \*********************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = /** @class */ (function () {
    function BookService(ht) {
        this.ht = ht;
    }
    BookService.prototype.postdata = function (data) {
        this.ht.post('/api/users', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookService.prototype.setActiveID = function (value) {
        this.cid = value;
    };
    BookService.prototype.getActiveID = function () { return this.cid; };
    BookService.prototype.getsomething = function () {
        return this.ht.get('/api/users');
    };
    BookService.prototype.listpostdata = function (data) {
        this.ht.post('/api/listings', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookService.prototype.getbook = function () {
        return this.ht.get('/api/listings');
    };
    BookService.prototype.wishpostdata = function (data) {
        this.ht.post('/api/wishlist', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookService.prototype.postmsg = function (data) {
        this.ht.post('/api/message1', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/member/addbooks/addbooks.component.css":
/*!********************************************************!*\
  !*** ./src/app/member/addbooks/addbooks.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#d1\r\n{\r\n    width: 40%;\r\n    margin-top: 110px;\r\n    opacity: 0.76;\r\n}\r\n\r\n#f2{\r\n    background-image: url(\"/assets/book42.jpg\");\r\n    margin-top: 0%;\r\n    margin-bottom: 0%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    height: 550px;\r\n}"

/***/ }),

/***/ "./src/app/member/addbooks/addbooks.component.html":
/*!*********************************************************!*\
  !*** ./src/app/member/addbooks/addbooks.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset id=\"f2\">\n  <!-- Card -->\n<div class=\"card mx-xl-5\" id =\"d1\">\n\n    <!-- Card body -->\n    <div class=\"card-body\">\n\n        <!-- Default form subscription -->\n        <fieldset>\n            <p class=\"h4 text-center py-4\">Add Book To The List</p>\n\n            <!-- Default input name -->\n            <table>\n              <tr>\n            <td><label  class=\"grey-text font-weight-light\">Book Name:  </label></td>\n            <td><input type=\"text\"  [(ngModel)]=\"register.Bookname\" ></td>\n          </tr>\n            <br>\n            <tr>\n          <td>  <label  class=\"grey-text font-weight-light\">Price:    </label></td>\n           <td> <input type=\"text\" [(ngModel)]=\"register.price\"  ></td>\n          </tr>\n            <br>\n            <!-- Default input email -->\n            <tr>\n          <td>  <label   class=\"grey-text font-weight-light\">Author Name:  </label></td>\n          <td>  <input type=\"email\" required [(ngModel)]=\"register.author\"></td>\n          </tr>\n          <tr>\n               <td> <span id=\"span\">Condition of the book  :</span></td>\n                \n              <td>  <input type=\"radio\" name=\"condition\" value=\"New\" [(ngModel)]=\"register.condition\" >\n                New\n                <input type=\"radio\" name=\"condition\" value=\"Almost New\" [(ngModel)]=\"register.condition\">\n                Almost New\n                <input type=\"radio\" name=\"condition\" value=\"Sight Damaged\" [(ngModel)]=\"register.condition\">\n                Sight Damaged\n                <input type=\"radio\" name=\"condition\" value=\"Worn\" [(ngModel)]=\"register.condition\">\n                Worn\n              </td>\n              </tr>\n            </table>\n            <div class=\"text-center py-4 mt-3\">\n                <button class=\"btn btn-outline-purple\" (click)=\"adddata()\" type=\"submit\">Send<i class=\"fa fa-paper-plane-o ml-2\"></i></button>\n            </div>\n        </fieldset>\n        <!-- Default form subscription -->\n\n    </div>\n    <!-- Card body -->\n\n</div>\n</fieldset>\n<!-- Card -->\n"

/***/ }),

/***/ "./src/app/member/addbooks/addbooks.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/member/addbooks/addbooks.component.ts ***!
  \*******************************************************/
/*! exports provided: AddbooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbooksComponent", function() { return AddbooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../book.service */ "./src/app/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddbooksComponent = /** @class */ (function () {
    function AddbooksComponent(serv) {
        this.serv = serv;
        this.register = {
            Bookname: '',
            author: '',
            price: 0,
            condition: '',
            sellerEmail: ''
        };
    }
    AddbooksComponent.prototype.ngOnInit = function () {
        console.log(this.serv.getActiveID());
        this.user = this.serv.getActiveID();
        this.register.sellerEmail = this.user;
        console.log(this.user);
    };
    AddbooksComponent.prototype.adddata = function () {
        this.register.sellerEmail = this.user;
        var val = this.register;
        this.serv.listpostdata(val);
    };
    AddbooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addbooks',
            template: __webpack_require__(/*! ./addbooks.component.html */ "./src/app/member/addbooks/addbooks.component.html"),
            styles: [__webpack_require__(/*! ./addbooks.component.css */ "./src/app/member/addbooks/addbooks.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], AddbooksComponent);
    return AddbooksComponent;
}());



/***/ }),

/***/ "./src/app/member/member.component.css":
/*!*********************************************!*\
  !*** ./src/app/member/member.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color:black;\r\n    color: white;\r\n    text-align: center;\r\n }"

/***/ }),

/***/ "./src/app/member/member.component.html":
/*!**********************************************!*\
  !*** ./src/app/member/member.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark sticky-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Look Inna Book</a>\n    </div>\n  \n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"active nav-item\"><a [routerLink]=\"['/MemberHome',cuser]\">Home</a></li>\n      <li class=\" nav-item\"><a class=\"nav-link\"  routerLink=\"/Addbooks\"><span class=\"glyphicon glyphicon-plus\"></span> Add Books</a></li>\n      <li class=\" nav-item\"><a class=\"nav-link\" routerLink=\"/whishlist\"><span class=\"glyphicon glyphicon-heart\"></span> Wishlist</a></li>\n      <li class=\" nav-item\"><a class=\"nav-link\" routerLink=\"/message1\"><span class=\"glyphicon glyphicon-envelope\"></span> Message</a></li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<div class=\"footer\">\n  <p>Made By Sugandh</p>\n</div>"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberComponent = /** @class */ (function () {
    function MemberComponent(serv) {
        this.serv = serv;
    }
    MemberComponent.prototype.ngOnInit = function () {
        this.cuser = this.serv.id;
        console.log(this.cuser);
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/member/memberhome/memberhome.component.css":
/*!************************************************************!*\
  !*** ./src/app/member/memberhome/memberhome.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f1{\r\n    background-image: url(\"/assets/book31.jpg\");\r\n    margin-top: 0%;\r\n    margin-bottom: 0%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}"

/***/ }),

/***/ "./src/app/member/memberhome/memberhome.component.html":
/*!*************************************************************!*\
  !*** ./src/app/member/memberhome/memberhome.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"f1\">\n\n<fieldset class=\"navbar-form navbar-left\" action=\"/action_page.php\" >\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Type {{filter}} here\" [(ngModel)]=\"value\">\n    <button type=\"submit\" (click)=\"filteration()\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span></button>\n  </div>\n</fieldset>\n<br>\n<div class=\"div1\">\n  <span id=\"span\" >Filter by  : </span>\n  \n  <input type=\"radio\" name=\"filter\" value=\"price\" [(ngModel)]=\"filter\">\n   Price \n  <input type=\"radio\" name=\"filter\" value=\"condition\" [(ngModel)]=\"filter\">\n   Condition \n  <input type=\"radio\" name=\"filter\" value=\"Bookname\" [(ngModel)]=\"filter\">\n   Bookname \n  <input type=\"radio\" name=\"filter\" value=\"author\" [(ngModel)]=\"filter\">\n   Author \n</div>\n\n<br>\n<br>\n<div>Message:<input type=\"text\" [(ngModel)]=\"message12\" placeholder=\"Type message here\"><br></div>\n<div *ngFor=\"let i of x ;let t=index\" class=\"row text-center\" style=\"width: 1500px;;margin-top: 3%;margin-left: 35%; margin-bottom: 4%;opacity: 0.8;\">\n<div class=\"card col-sm-3\" style=\"width:350px\">\n    <img class=\"card-img-top\" src=\"./assets/book.jpg\" alt=\"Card image\" style=\"width:30%;margin-left: 38%;margin-top: 8%\">\n    <div class=\"card-body\">\n      <h1 class=\"card-img-overlay\" style=\" margin-top:15%\">{{i.Bookname}}</h1>\n      <h5 class=\"card-text\"><b>Author: </b>{{i.author}}</h5>\n      <h5 class=\"card-text\"><b>Price: </b>{{i.price}}</h5>\n      <h5 class=\"card-text\"><b>Condition: </b>{{i.condition}}</h5> \n      <h5 class=\"card-text\"><b>Contact: </b>{{i.sellerEmail}}</h5> \n      <button (click)=\"addwish(t)\" class=\"btn btn-success\"><a >Add To <span class=\"glyphicon glyphicon-heart\"></span></a></button>\n      <button (click)=\"msg(t)\"  class=\"btn btn-success\"><a >message<span class=\"glyphicon glyphicon-envelope\"></span></a></button>\n    </div>\n  </div>\n</div>\n</fieldset>"

/***/ }),

/***/ "./src/app/member/memberhome/memberhome.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/member/memberhome/memberhome.component.ts ***!
  \***********************************************************/
/*! exports provided: MemberhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberhomeComponent", function() { return MemberhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../book.service */ "./src/app/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberhomeComponent = /** @class */ (function () {
    function MemberhomeComponent(serv, router, ht) {
        this.serv = serv;
        this.router = router;
        this.ht = ht;
        this.filter = "filter";
        this.x = [];
        this.k = {
            message: '',
            userid: '',
            selleridEmail: ''
        };
        this.wish1 = {
            Bookname: '',
            Booksellerid: '',
            useridEmail: ''
        };
    }
    MemberhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.show();
        this.router.paramMap.subscribe(function (params) {
            _this.userid1 = params.get(('id'));
        });
        console.log(this.userid1);
    };
    MemberhomeComponent.prototype.show = function () {
        var _this = this;
        this.serv.getbook().subscribe(function (book) {
            _this.x = book;
            console.log(_this.x);
        });
    };
    MemberhomeComponent.prototype.addwish = function (index) {
        console.log(index);
        this.wish1 = ({
            Bookname: this.x[index].Bookname,
            Booksellerid: this.x[index].sellerEmail,
            useridEmail: this.userid1
        });
        console.log(this.wish1);
        var val = this.wish1;
        console.log(this.wish1);
        this.serv.wishpostdata(val);
    };
    MemberhomeComponent.prototype.ngOnDestroy = function () {
        this.serv.setActiveID(this.userid1);
        console.log(this.userid1);
        console.log(this.serv.getActiveID());
    };
    MemberhomeComponent.prototype.filteration = function () {
        var _this = this;
        console.log(this.value);
        if (this.filter == 'condition') {
            this.ht.post('/api/listings/filterbycondition', { condition: this.value }).subscribe(function (data) {
                _this.x = data;
            });
        }
        if (this.filter == 'price') {
            this.m = +this.value;
            this.ht.post('/api/listings/filterbyprice', { price: this.m }).subscribe(function (data) {
                _this.x = data;
            });
        }
        if (this.filter == 'Bookname') {
            this.ht.post('/api/listings/filterbyBookname', { Bookname: this.value }).subscribe(function (data) {
                _this.x = data;
            });
        }
        if (this.filter == 'author') {
            this.ht.post('/api/listings/filterbyauthor', { author: this.value }).subscribe(function (data) {
                _this.x = data;
            });
        }
    };
    MemberhomeComponent.prototype.msg = function (index) {
        console.log(this.userid1);
        console.log(this.x[index].sellerEmail);
        this.k = ({
            message: this.message12,
            userid: this.userid1,
            selleridEmail: this.x[index].sellerEmail
        });
        var val = this.k;
        this.serv.postmsg(val);
    };
    MemberhomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memberhome',
            template: __webpack_require__(/*! ./memberhome.component.html */ "./src/app/member/memberhome/memberhome.component.html"),
            styles: [__webpack_require__(/*! ./memberhome.component.css */ "./src/app/member/memberhome/memberhome.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MemberhomeComponent);
    return MemberhomeComponent;
}());



/***/ }),

/***/ "./src/app/member/messages/messages.component.css":
/*!********************************************************!*\
  !*** ./src/app/member/messages/messages.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/messages/messages.component.html":
/*!*********************************************************!*\
  !*** ./src/app/member/messages/messages.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <tr class=\"success\">\n      <th>From</th>\n      <th>Message</th>\n      \n    </tr>\n    <div *ngFor=\"let i of masg ;\" >\n   <tr class=\"warning\">\n      <td>{{i.userid}}</td>\n      <td>{{i.message}}</td>\n    </tr>\n    </div>\n</table>"

/***/ }),

/***/ "./src/app/member/messages/messages.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/member/messages/messages.component.ts ***!
  \*******************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../book.service */ "./src/app/book.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(serv, http) {
        this.serv = serv;
        this.http = http;
        this.masg = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.y = this.serv.getActiveID();
        this.http.post('/api/message1/getmessage', { selleridEmail: this.y }).subscribe(function (data) {
            _this.masg = data;
            console.log(_this.masg);
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/member/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/member/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/member/wishlist/wishlist.component.css":
/*!********************************************************!*\
  !*** ./src/app/member/wishlist/wishlist.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/wishlist/wishlist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/member/wishlist/wishlist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table\">\n    <tr class=\"success\">\n      <th>Name</th>\n      <th>Contact</th>\n      \n    </tr>\n    <div *ngFor=\"let i of wish1 ;\" >\n   <tr class=\"warning\">\n      <td>{{i.Bookname}}</td>\n      <td>{{i.Booksellerid}}</td>\n    </tr>\n    </div>\n</table>"

/***/ }),

/***/ "./src/app/member/wishlist/wishlist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/member/wishlist/wishlist.component.ts ***!
  \*******************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../book.service */ "./src/app/book.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(serv, http) {
        this.serv = serv;
        this.http = http;
        this.wish1 = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.y = this.serv.getActiveID();
        this.http.post('/api/wishlist/getwishlist', { useridEmail: this.y }).subscribe(function (data) {
            _this.wish1 = data;
            console.log(_this.wish1);
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/member/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/member/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">BookShop</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink=\"/home\">Home</a></li>\n      <li><a routerLink=\"/Registration\">Signup</a></li>\n      <li><a routerLink=\"/Login\">Login</a></li>\n    </ul>\n    <form class=\"navbar-form navbar-left\" action=\"/action_page.php\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor/visitor.component */ "./src/app/visitor/visitor.component.ts");
/* harmony import */ var _visitor_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitor/home/home.component */ "./src/app/visitor/home/home.component.ts");
/* harmony import */ var _visitor_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor/signup/signup.component */ "./src/app/visitor/signup/signup.component.ts");
/* harmony import */ var _visitor_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor/login/login.component */ "./src/app/visitor/login/login.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _member_memberhome_memberhome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member/memberhome/memberhome.component */ "./src/app/member/memberhome/memberhome.component.ts");
/* harmony import */ var _member_addbooks_addbooks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member/addbooks/addbooks.component */ "./src/app/member/addbooks/addbooks.component.ts");
/* harmony import */ var _member_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member/wishlist/wishlist.component */ "./src/app/member/wishlist/wishlist.component.ts");
/* harmony import */ var _member_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./member/messages/messages.component */ "./src/app/member/messages/messages.component.ts");









var appRoutes = [
    {
        path: 'Home', component: _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_0__["VisitorComponent"],
        children: [{ path: '', component: _visitor_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }]
    },
    {
        path: 'Signup', component: _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_0__["VisitorComponent"],
        children: [{ path: '', component: _visitor_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] }]
    },
    {
        path: 'Login', component: _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_0__["VisitorComponent"],
        children: [{ path: '', component: _visitor_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }]
    },
    {
        path: 'MemberHome/:id', component: _member_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberComponent"],
        children: [{ path: '', component: _member_memberhome_memberhome_component__WEBPACK_IMPORTED_MODULE_5__["MemberhomeComponent"] }]
    },
    {
        path: 'whishlist', component: _member_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberComponent"],
        children: [{ path: '', component: _member_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"] }]
    },
    {
        path: 'message1', component: _member_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberComponent"],
        children: [{ path: '', component: _member_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"] }]
    },
    {
        path: 'Addbooks', component: _member_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberComponent"],
        children: [{ path: '', component: _member_addbooks_addbooks_component__WEBPACK_IMPORTED_MODULE_6__["AddbooksComponent"] }]
    },
    {
        path: '', redirectTo: '/Home', pathMatch: 'full'
    },
];


/***/ }),

/***/ "./src/app/visitor/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/visitor/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset\r\n{\r\n    background-image: url(\"/assets/Books.jpg\");\r\n    margin-top: 0%;\r\n    margin-bottom: 0%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}"

/***/ }),

/***/ "./src/app/visitor/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/visitor/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n<div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"./assets/book41.jpg\" alt=\"Book1\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"./assets/book13.jpg\" alt=\"book2\" style=\"width:100%;\">\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"./assets/book12.jpg\" alt=\"book3\" style=\"width:100%;\">\n      </div>\n    </div>\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n<div *ngFor=\"let i of x ;\" class=\"row text-center\" style=\"width: 1500px;;margin-top: 3%;margin-left: 35%; margin-bottom: 4%;opacity: 0.8;\">\n    <div class=\"card col-sm-3\" style=\"width:350px\">\n        <img class=\"card-img-top\" src=\"./assets/book.jpg\" alt=\"Card image\" style=\"width:30%;margin-left: 38%;margin-top: 8%\">\n        <div class=\"card-body\">\n          <h1 class=\"card-img-overlay\" style=\" margin-top:15%\">{{i.Bookname}}</h1>\n          <h5 class=\"card-text\"><b>Author: </b>{{i.author}}</h5>\n          <h5 class=\"card-text\"><b>Price: </b>{{i.price}}</h5>\n          <h5 class=\"card-text\"><b>Condition: </b>{{i.condition}}</h5> \n          <h5 class=\"card-text\"><b>Contact: </b>{{i.sellerEmail}}</h5> \n          <button (click)=\"add()\" class=\"btn btn-success\"><a >Add To <span class=\"glyphicon glyphicon-heart\"></span></a></button>\n        </div>\n      </div>\n</div>\n</fieldset>"

/***/ }),

/***/ "./src/app/visitor/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/visitor/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../book.service */ "./src/app/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(serv, route) {
        this.serv = serv;
        this.route = route;
        this.x = [];
    }
    HomeComponent.prototype.show = function () {
        var _this = this;
        this.serv.getbook().subscribe(function (book) {
            _this.x = book;
            console.log(_this.x);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.show();
    };
    HomeComponent.prototype.add = function () {
        this.route.navigate(['/Signup']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/visitor/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/visitor/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/visitor/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/visitor/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div1{\r\n    background-image: url(\"/assets/book1.jpg\");\r\n    margin-top: 0%;\r\n    margin-bottom: 0%;\r\n    height:580px;\r\n    margin-top: 0%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n};"

/***/ }),

/***/ "./src/app/visitor/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/visitor/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<fieldset id=\"div1\">\r\n<div style=\"width: 30%;margin-left:35%;margin-top:10%\">\r\n    <p class=\"h2 text-center mb-4\">Log In</p>\r\n\r\n    <!-- Material input email -->\r\n    <div class=\"md-form\">\r\n        <input type=\"email\"  [(ngModel)]= \"user.email\" placeholder=\"Your email\" class=\"form-control\">\r\n    </div>\r\n    <br>\r\n    <!-- Material input password -->\r\n    <div class=\"md-form\">\r\n        <input type=\"password\"  [(ngModel)]= \"user.pass\" placeholder=\"Your password\" class=\"form-control\">\r\n    </div>\r\n\r\n    <div class=\"text-center mt-4\">\r\n        <button (click)=\"login()\" class=\"btn btn-default\" type=\"submit\">Login</button>\r\n    </div>\r\n    <p class=\"h2 text-center mb-4\">Not a user</p>\r\n    <div class=\"text-center mt-4\">\r\n            <button (click)=\"signup()\" class=\"btn btn-default\" type=\"submit\">Signup</button>\r\n    </div>\r\n</div>\r\n</fieldset>"

/***/ }),

/***/ "./src/app/visitor/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/visitor/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../book.service */ "./src/app/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(serv, route) {
        this.serv = serv;
        this.route = route;
        this.user = {
            email: "",
            pass: ""
        };
        this.x = [];
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        this.serv.id = this.user.email;
        console.log(this.serv.id);
    };
    LoginComponent.prototype.login = function () {
        this.count = 0;
        for (this.i = 0; this.i < this.x.length; this.i++) {
            if (this.x[this.i].email == this.user.email) {
                if (this.x[this.i].pass == this.user.pass) {
                    this.count = 1;
                    break;
                }
            }
        }
        if (this.count == 0) {
            alert("Invalid User");
        }
        else {
            this.route.navigate(['/MemberHome', this.user.email]);
        }
    };
    LoginComponent.prototype.signup = function () {
        this.route.navigate(['/Signup']);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getsomething().subscribe(function (cred) {
            _this.x = cred;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/visitor/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/visitor/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/visitor/signup/signup.component.css":
/*!*****************************************************!*\
  !*** ./src/app/visitor/signup/signup.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div2{\r\n    background-image: url(\"/assets/book4.jpg\");\r\n    margin-top: 0%;\r\n    margin-bottom: 0%;\r\n    height:580px;\r\n    margin-top: 0%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n};\r\n"

/***/ }),

/***/ "./src/app/visitor/signup/signup.component.html":
/*!******************************************************!*\
  !*** ./src/app/visitor/signup/signup.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset id=\"div2\">\n<div class=\"card\" style=\"width: 30%;margin-left: 35%;opacity: 0.8;background-color:BurlyWood\">\n\n    <!-- Card body -->\n    <div class=\"card-body\">\n\n        <!-- Material form register -->\n        <div>\n            <p class=\"h4 text-center py-4\">Sign up</p>\n\n            <!-- Material input text -->\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <label for=\"materialFormCardNameEx\" class=\"font-weight-light\">Your name</label>\n\n                <input type=\"text\" [(ngModel)]= \"newi.name\"  class=\"form-control\">\n            </div>\n\n            <!-- Material input email -->\n            <div class=\"md-form\">\n                <i class=\"fa fa-envelope prefix grey-text\"></i>\n                <label  class=\"font-weight-light\">Your email</label>\n                <input type=\"email\" [(ngModel)]= \"newi.email\" class=\"form-control\">\n            </div>\n\n            <!-- Material input email -->\n            <div class=\"md-form\">\n                <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\n                <label class=\"font-weight-light\">College</label>\n                <input type=\"text\"  [(ngModel)]= \"newi.college\" class=\"form-control\">\n                \n            </div>\n            <div class=\"md-form\">\n                <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\n                <label class=\"font-weight-light\">Address</label>\n                <input type=\"text\" id=\"materialFormCardConfirmEx\" [(ngModel)]= \"newi.address\" class=\"form-control\">\n                \n            </div>\n            <div class=\"md-form\">\n                <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\n                <label  class=\"font-weight-light\">Contact</label>\n                <input type=\"email\" [(ngModel)]= \"newi.phno\" class=\"form-control\">\n                \n            </div>\n            <!-- Material input password -->\n            <div class=\"md-form\">\n                <i class=\"fa fa-lock prefix grey-text\"></i>\n                <label  class=\"font-weight-light\">Your password</label>\n                <input type=\"password\"[(ngModel)]= \"newi.pass\" class=\"form-control\">\n                \n            </div>\n\n            <div class=\"text-center py-4 mt-3\">\n                <button (click)=\"add()\" class=\"btn btn-cyan\" type=\"submit\">Signup</button>\n            </div>\n        </div>\n        <!-- Material form register -->\n\n    </div>\n    <!-- Card body -->\n\n</div>\n</fieldset>"

/***/ }),

/***/ "./src/app/visitor/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/visitor/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../book.service */ "./src/app/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(serv, route) {
        this.serv = serv;
        this.route = route;
        this.newi = {
            name: "",
            email: "",
            college: "",
            address: "",
            phno: 0,
            pass: ""
        };
    }
    SignupComponent.prototype.add = function () {
        this.serv.postdata({ name: this.newi.name, email: this.newi.email, college: this.newi.college, address: this.newi.address, phno: this.newi.phno, pass: this.newi.pass });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/visitor/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/visitor/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/visitor/visitor.component.css":
/*!***********************************************!*\
  !*** ./src/app/visitor/visitor.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color:black;\r\n    color: white;\r\n    text-align: center;\r\n }"

/***/ }),

/***/ "./src/app/visitor/visitor.component.html":
/*!************************************************!*\
  !*** ./src/app/visitor/visitor.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark sticky-top\" style=\"padding-bottom: 0%\">\n  <div class=\"container-fluid\" style=\"padding-bottom: 0%\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Look Inna Book</a>\n    </div>\n    \n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"active nav-item\"><a class=\"nav-link\" routerLink=\"/Home\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/Signup\"><span class=\"glyphicon glyphicon-user\"></span> Signup</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n    </ul>\n  </div>\n</nav><router-outlet></router-outlet>\n<div class=\"footer\">\n  <p>Made By Sugandh</p>\n</div>\n"

/***/ }),

/***/ "./src/app/visitor/visitor.component.ts":
/*!**********************************************!*\
  !*** ./src/app/visitor/visitor.component.ts ***!
  \**********************************************/
/*! exports provided: VisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return VisitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisitorComponent = /** @class */ (function () {
    function VisitorComponent() {
    }
    VisitorComponent.prototype.ngOnInit = function () {
    };
    VisitorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visitor',
            template: __webpack_require__(/*! ./visitor.component.html */ "./src/app/visitor/visitor.component.html"),
            styles: [__webpack_require__(/*! ./visitor.component.css */ "./src/app/visitor/visitor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VisitorComponent);
    return VisitorComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lenovo\Desktop\final\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map