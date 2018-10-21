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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigationbar (logout)=\"logout()\" *ngIf=\"authorized && type!=undefined\" [type]=\"type\"> </app-navigationbar>\n<router-outlet></router-outlet> \n\n\n\n\n\n\n\n\n\n"

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
/* harmony import */ var _services_httpsevice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/httpsevice.service */ "./src/app/services/httpsevice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/loginservice */ "./src/app/services/loginservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, httpservice, authorize) {
        var _this = this;
        this.router = router;
        this.httpservice = httpservice;
        this.authorize = authorize;
        this.authorized = false;
        this.authorize.authenticatedEvent.subscribe(function (data) {
            _this.type = data.role;
            _this.authorized = true;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authorized = this.authorize.getToken.token == undefined ? false : true;
    };
    AppComponent.prototype.logout = function () {
        this.authorized = true;
        this.type = undefined;
        this.authorize.destroySession();
        this.router.navigate(['']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_httpsevice_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"], _services_loginservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _front_front_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front/front.component */ "./src/app/front/front.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _navigationbar_navigationbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigationbar/navigationbar.component */ "./src/app/navigationbar/navigationbar.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _display_super_display_super_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./display-super/display-super.component */ "./src/app/display-super/display-super.component.ts");
/* harmony import */ var _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useredit/useredit.component */ "./src/app/useredit/useredit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpsevice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/httpsevice.service */ "./src/app/services/httpsevice.service.ts");
/* harmony import */ var _services_loginservice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/loginservice */ "./src/app/services/loginservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    { path: '', component: _front_front_component__WEBPACK_IMPORTED_MODULE_5__["FrontComponent"] },
    { path: 'adminuser', component: _display_display_component__WEBPACK_IMPORTED_MODULE_8__["DisplayComponent"] },
    { path: 'superadmin', component: _display_super_display_super_component__WEBPACK_IMPORTED_MODULE_9__["DisplaySuperComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule(auth) {
        this.auth = auth;
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _front_front_component__WEBPACK_IMPORTED_MODULE_5__["FrontComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _navigationbar_navigationbar_component__WEBPACK_IMPORTED_MODULE_7__["NavigationbarComponent"],
                _display_display_component__WEBPACK_IMPORTED_MODULE_8__["DisplayComponent"],
                _display_super_display_super_component__WEBPACK_IMPORTED_MODULE_9__["DisplaySuperComponent"],
                _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_10__["UsereditComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_httpsevice_service__WEBPACK_IMPORTED_MODULE_13__["HttpRequestService"], _services_loginservice__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"], _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_services_loginservice__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loginservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/loginservice */ "./src/app/services/loginservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authentication) {
        this.authentication = authentication;
        this.access = false;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authentication.getToken.id != undefined ? true : false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_loginservice__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile\n{\n    background-color: lightgray;\n    width:100%;\n    height:100%;\n}\n.flip-card {\n    background-color: transparent;\n    width: 300px;\n    height: 300px;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n.flip-card-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    transition: -webkit-transform 0.6s;\n    transition: transform 0.6s;\n    transition: transform 0.6s, -webkit-transform 0.6s;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  }\n.flip-card:hover .flip-card-inner {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n  }\n.flip-card-front, .flip-card-back {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n.flip-card-front {\n    background-color: #bbb;\n    color: black;\n  }\n.flip-card-back {\n    background-color: #2980b9;\n    color: white;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"row\">\n   <div *ngIf=\"userInfo.role=='user'\" class=\"alert alert-success\">HI {{userInfo.firstname}} {{userInfo.lastname}}!!You are valued customer</div>\n   <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n    <div class=\"flip-card\">\n      <div class=\"flip-card-inner\">\n        <div class=\"flip-card-front\">\n          <img src=\"../../assets/userprofile.png\" alt=\"Avatar\" style=\"width:300px;height:300px;\">\n        </div>\n        <div class=\"flip-card-back\">\n          <h1>{{userInfo.firstname.toUpperCase()}} {{userInfo.lastname.toUpperCase()}}</h1> \n          <p>{{userInfo.username.toLowerCase()}}</p> \n          <p>{{userInfo.role}}</p>\n          <p> {{ userInfo.email }}</p>\n        </div>\n      </div>\n    </div>\n    \n   </div>\n   \n   <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8 \">\n      <div class=\"container profile\">\n\n        <h1 class=\"text-primary \">Profile Details</h1>\n        <span><h3>Name:{{userInfo.firstname.toUpperCase()}} {{userInfo.lastname.toUpperCase()}}</h3></span>\n        <span><h3>FirstName:{{userInfo.firstname.toUpperCase()}} </h3></span>\n        <span><h3>LastName:{{userInfo.lastname.toUpperCase()}}</h3></span>\n        <span><h3>Username:{{userInfo.username.toLowerCase()}}</h3></span>\n        <span><h3>Role:{{userInfo.role.toUpperCase()}}</h3></span>\n        <span><h3>Email:{{userInfo.email}}</h3></span>\n        <span><h3>Email:{{userInfo.cdate}}</h3></span>\n  </div>\n   </div>\n   \n </div>  \n</div>\n\n\n "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpsevice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/httpsevice.service */ "./src/app/services/httpsevice.service.ts");
/* harmony import */ var _services_loginservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loginservice */ "./src/app/services/loginservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(httphandle, credentials) {
        this.httphandle = httphandle;
        this.credentials = credentials;
        this.userInfo = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userInfo = this.credentials.userInfo;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_httpsevice_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"], _services_loginservice__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/display-super/display-super.component.css":
/*!***********************************************************!*\
  !*** ./src/app/display-super/display-super.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid\n{\n    padding:10px;\n}\n*{\n    padding  : 0px;\n    padding-left:0px;\n    margin-top:0px;\n}\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n    width: 200px;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n}\n/* Add a background color when the inputs get focus */\ninput[type=text]:focus, input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n    width: 300px;\n    height: inherit;\n}\n/* Set a style for all buttons */\n.button1 {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    opacity: 0.9;\n}\n.button1:hover {\n    opacity:1;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n/* Add padding to container elements */\n.container {\n    padding: 16px;\n}\n/* The Modal (background) */\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #474e5d;\n    padding-top: 50px;\n}\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 100%; /* Could be more or less, depending on screen size */\n}\n/* Style the horizontal ruler */\nhr {\n    border: 1px solid #f1f1f1;\n    margin-bottom: 25px;\n}\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    font-size: 40px;\n    font-weight: bold;\n    color: #f1f1f1;\n}\n.close:hover,\n.close:focus {\n    color: #f44336;\n    cursor: pointer;\n}\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n       width: 100%;\n    }\n}\n.vertical-menu {\n    height:100%;\n    width: 100%;\n    background-color: blanchedalmond;\n    \n  \n}\n.vertical-menu a {\n    background-color: #eee;\n    color: black;\n    display: block;\n    padding: 12px;\n    text-decoration: none;\n}\n.vertical-menu a:hover {\n    background-color: #ccc;\n}\n.vertical-menu a.active {\n    background-color: #4CAF50;\n    color: white;\n}\n.button {\n  border-radius: 4px;\n  background-color:lightskyblue;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 18px;\n  padding: 3px;\n  width: 150px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n  position: relative;\n  right:0px;\n}\n.button span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n.button span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n.button:hover span {\n  padding-right: 25px;\n}\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\ninput.ng-valid{\n    border-bottom: 4px solid green; \n }\ninput.ng-invalid{\n     border-bottom: 4px solid red; \n  }"

/***/ }),

/***/ "./src/app/display-super/display-super.component.html":
/*!************************************************************!*\
  !*** ./src/app/display-super/display-super.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n <div class=\"row\">\n<div class=\"col-md-2\">\n\n     <div class=\"vertical-menu\">\n        <button class=\"button\" (click)=\"addUser($event)\"><span>Add Admin </span></button>\n      <a [id]=\"adminList.indexOf(admin)\" (click)=\"displayAdmin($event)\" *ngFor=\"let admin of adminList\">{{admin.firstname}}</a>\n     </div>\n\n     </div>\n     \n   <div class=\"col-md-10\" *ngFor=\"let admin of adminList\">\n        <ng-template [ngIf]=\"selectedAdmin==adminList.indexOf(admin)\">\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <img src=\"../../assets/user.png\" class=\"img img-responsive img-circle\">\n                  </div>\n                  <div class=\"col-md-10\">\n                    <h3 class=\"text-primary\">Admin Details</h3>\n                    <p class=\"myfont\">Name:{{adminList[selectedAdmin].firstname}} {{adminList[selectedAdmin].lastname}}</p>\n                    <p class=\"myfont\">Username:{{adminList[selectedAdmin].username}}</p>\n                    <p class=\"myfont\">Email:{{adminList[selectedAdmin].email}}</p>\n                    <p class=\"myfont\">Date:{{adminList[selectedAdmin].cdate}}</p>\n              \n                    \n                  </div>\n                </div>\n                <app-display (adminDeleteEvent)=\"destroyAdmin($event)\"  [id]=\"admin.UID\"></app-display>\n             </div> \n         </ng-template>\n     </div>\n\n   \n  </div>\n</div>\n\n\n<div class=\"modal\" *ngIf=\"add\">\n  <span (click)=\"addUser()\" class=\"close\" title=\"Close Modal\">&times;</span>\n  <form class=\"modal-content\" #userForm=\"ngForm\" (ngSubmit)=\"addNewUser(userForm.value)\">\n    <div class=\"container\">\n      <h1>ADD USER</h1>\n      <p>Please fill in this form to create a new user.</p>\n      <hr>\n      <label for=\"firstname\"><b>Firstname</b></label>\n      <input ngModel #fnameRef=\"ngModel\"  type=\"text\" placeholder=\"Enter Firstname\" name=\"firstname\" required>\n      <div [hidden]=\"fnameRef.valid || fnameRef.pristine\" class=\"alert alert-danger\">\n        Firstname cannot be empty   \n      </div>\n      <label for=\"lastname\"><b>Lastname</b></label>\n      <input ngModel #lnameRef=\"ngModel\"  type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" required>\n      <div [hidden]=\"lnameRef.valid || lnameRef.pristine\" class=\"alert alert-danger\">\n        Lastname cannot be empty   \n      </div>\n      <label for=\"username\"><b>Username</b></label>\n      <input #unameRef=\"ngModel\" ngModel type=\"text\" placeholder=\"Enter Username\" pattern=\"[a-z]*\" name=\"username\" required>\n       <div [hidden]=\"unameRef.valid || unameRef.pristine || !unameRef.errors.pattern\" class=\"alert alert-danger\">\n        Username cannot be empty  and should only consist of lowercase \n      </div>\n      <label for=\"Password\"><b>Password</b></label>\n      <input #passRef=\"ngModel\" ngModel type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n      <div [hidden]=\"passRef.valid || passRef.pristine\" class=\"alert alert-danger\">\n        Password cannot be empty   \n      </div>\n    \n      <label for=\"email\"><b>Email</b></label>\n      <input #eRef=\"ngModel\" ngModel  type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\n      <div [hidden]=\"eRef.valid || eRef.pristine\" class=\"alert alert-danger\">\n        Email cannot be empty   \n      </div>\n\n    <div class=\"clearfix\">\n        <button type=\"button\" (click)=\"addUser($event)\" class=\" button cancelbtn\">Cancel</button>\n        <button [disabled]=\"!userForm.form.valid\" type=\"submit\" class=\" button signupbtn\">Add Admin</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n   "

/***/ }),

/***/ "./src/app/display-super/display-super.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/display-super/display-super.component.ts ***!
  \**********************************************************/
/*! exports provided: DisplaySuperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaySuperComponent", function() { return DisplaySuperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loginservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loginservice */ "./src/app/services/loginservice.ts");
/* harmony import */ var _services_httpsevice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpsevice.service */ "./src/app/services/httpsevice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplaySuperComponent = /** @class */ (function () {
    function DisplaySuperComponent(httpHandle, credentials) {
        this.httpHandle = httpHandle;
        this.credentials = credentials;
        this.add = false;
        this.adminList = [
            {
                uid: 6,
                firstname: 'Abhiyan',
                lastname: 'Timilsina',
                username: 'abhiyan',
                role: 'admin'
            }
        ];
        this.selectedAdmin = 0;
    }
    DisplaySuperComponent.prototype.displayAdmin = function (event) {
        this.selectedAdmin = event.target.getAttribute('id');
    };
    DisplaySuperComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = "users/2/" + this.credentials.getToken.id;
        this.suscription = true;
        this.httpHandle.getData1(url, this.credentials.getToken);
        this.httpHandle.callComplete1.subscribe(function (data) {
            _this.adminList = data.result;
        });
    };
    DisplaySuperComponent.prototype.addUser = function (event) {
        this.add = !this.add;
    };
    DisplaySuperComponent.prototype.addNewUser = function (formValue) {
        var _this = this;
        this.add = !this.add;
        formValue.sid = this.credentials.getToken.id;
        formValue.role = "admin";
        this.httpHandle.postRequestWithCredentials("users", {
            id: this.credentials.getToken.id,
            token: this.credentials.getToken.token
        }, formValue).subscribe(function () {
            var url = "users/2/" + _this.credentials.getToken.id;
            _this.httpHandle.getData1(url, _this.credentials.getToken);
            _this.httpHandle.callComplete1.subscribe(function (data) {
                _this.adminList = data.result;
            });
        });
    };
    DisplaySuperComponent.prototype.destroyAdmin = function (event) {
        var _this = this;
        this.adminList.forEach(function (element) {
            if (event.id == element.UID) {
                _this.adminList.splice(_this.adminList.indexOf(element), 1);
            }
        });
    };
    DisplaySuperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-super',
            template: __webpack_require__(/*! ./display-super.component.html */ "./src/app/display-super/display-super.component.html"),
            styles: [__webpack_require__(/*! ./display-super.component.css */ "./src/app/display-super/display-super.component.css")]
        }),
        __metadata("design:paramtypes", [_services_httpsevice_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"], _services_loginservice__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], DisplaySuperComponent);
    return DisplaySuperComponent;
}());



/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 1000px;\n    border: 1px solid #ddd;\n    overflow-x:scroll;\n}\nth, td {\n    text-align: left;\n    padding: 8px;\n}\n.mybtn{\n    font-size: 12px;\n    padding:2px;\n    margin:5px;\n}\nthead tr {\n     background-color:purple;\n     color:white;\n }\ntbody tr:nth-child(even){background-color:lightgray}\n.loader {\n    position: absolute;\n    top:40%;\n    left:45%;\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #3498db;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n    \n  }\n/* Safari */\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.loading\n  {\n      position: absolute;\n      top:30%;\n      left:50%;\n  }\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n    width: 200px;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n}\n/* Add a background color when the inputs get focus */\ninput[type=text]:focus, input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n    width: 300px;\n    height: inherit;\n}\n/* Set a style for all buttons */\n.button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    opacity: 0.9;\n}\n.button:hover {\n    opacity:1;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n/* Add padding to container elements */\n.container {\n    padding: 16px;\n}\n/* The Modal (background) */\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #474e5d;\n    padding-top: 50px;\n}\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 100%; /* Could be more or less, depending on screen size */\n}\n/* Style the horizontal ruler */\nhr {\n    border: 1px solid #f1f1f1;\n    margin-bottom: 25px;\n}\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    font-size: 40px;\n    font-weight: bold;\n    color: #f1f1f1;\n}\n.close:hover,\n.close:focus {\n    color: #f44336;\n    cursor: pointer;\n}\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n       width: 100%;\n    }\n}\ninput.ng-valid{\n    border-bottom: 4px solid green; \n }\ninput.ng-invalid{\n     border-bottom: 4px solid red; \n  }\n  "

/***/ }),

/***/ "./src/app/display/display.component.html":
/*!************************************************!*\
  !*** ./src/app/display/display.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span title=\"Close Form\" style=\"font-size: 30px;float: right;cursor: pointer; background-color: burlywood;border-radius: 50%;\" *ngIf=\"updateFlag\" (click)=\"updateFlag=false\" >&times;</span>\n\n<div class=\"container\">\n  <div *ngIf=\"dataLoaded && !updateFlag\"  class=\"row\">\n  <div style=\"position:absolute;\n  right:0px;\">\n   <button t=\"del\"  [id]=\"adminId\" *ngIf=\"adminId!=credentials.getToken.id\" (click)=\"delete($event)\"  [ngClass]=\"(userList.length==0)?'enabled':'disabled'\" class=\"btn btn-danger\">DELETE ADMIN</button> \n  <button class=\"btn btn-primary\" (click)=\"addUser($event)\" style=\"width:auto;\">Add User</button>\n  </div>\n  \n    <br>\n    <br>\n      <table class=\"table table-striped table-dark\">\n          <thead>\n               <tr>\n                 <th>#</th>\n                 <th>Firstname</th>\n                 <th>Lastname</th>\n                 <th>Username</th>\n                 <th>Role</th>\n                 <th>Email</th>\n                 <th>Date</th>\n                 <th>Actions</th>\n               </tr>\n             </thead>\n             <tbody>\n              \n          <tr *ngFor=\"let user of userList\" class=\"table-info\">\n                 <th scope=\"row\">{{user.UID}}</th>\n                 <td>{{user.firstname}}</td>\n                 <td>{{user.lastname}}</td>\n                 <td>{{user.username}}</td>\n                 <td>{{user.role}}</td>\n                 <td>{{user.email}}</td>\n                 <td>{{user.cdate}}</td>\n                \n                 <td>\n                     <button [id]=\"userList.indexOf(user)\" (click)=\"update($event)\" class=\"btn btn-primary mybtn\">Update</button>\n                     <button [id]=\"user.UID\" (click)=\"delete($event)\" class=\"btn btn-danger mybtn \">Delete</button>\n                 </td>  \n           </tr>\n            \n             </tbody>\n             </table>\n  </div>\n  <div *ngIf=\"!dataLoaded\">\n    Loading...\n    <div   class=\"loader\">\n  \n    </div>\n  </div>\n</div>\n\n<app-useredit (dbEvent)=\"perform($event)\" [toEdit]=\"toUpdate\" *ngIf=\"updateFlag\"></app-useredit>\n<div class=\"modal\" *ngIf=\"add\">\n  <span (click)=\"addUser()\" class=\"close\" title=\"Close Modal\">&times;</span>\n  <form class=\"modal-content\" #userForm=\"ngForm\" (ngSubmit)=\"addNewUser(userForm.value)\">\n    <div class=\"container\">\n      <h1>ADD USER</h1>\n      <p>Please fill in this form to create a new user.</p>\n      <hr>\n      <label for=\"firstname\"><b>Firstname</b></label>\n      <input ngModel #fnameRef=\"ngModel\"  type=\"text\" placeholder=\"Enter Firstname\" name=\"firstname\" required>\n      <div [hidden]=\"fnameRef.valid || fnameRef.pristine\" class=\"alert alert-danger\">\n        Firstname cannot be empty   \n      </div>\n      <label for=\"lastname\"><b>Lastname</b></label>\n      <input ngModel #lnameRef=\"ngModel\"  type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" required>\n      <div [hidden]=\"lnameRef.valid || lnameRef.pristine\" class=\"alert alert-danger\">\n        Lastname cannot be empty   \n      </div>\n      <label for=\"username\"><b>Username</b></label>\n      <input #unameRef=\"ngModel\" ngModel type=\"text\" placeholder=\"Enter Username\" pattern=\"[a-z]*\" name=\"username\" required>\n       <div [hidden]=\"unameRef.valid || unameRef.pristine || !unameRef.errors.pattern\" class=\"alert alert-danger\">\n        Username cannot be empty  and should only consist of lowercase \n      </div>\n      <label for=\"Password\"><b>Password</b></label>\n      <input #passRef=\"ngModel\" ngModel type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n      <div [hidden]=\"passRef.valid || passRef.pristine\" class=\"alert alert-danger\">\n        Password cannot be empty   \n      </div>\n    \n      <label for=\"email\"><b>Email</b></label>\n      <input #eRef=\"ngModel\" ngModel  type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\n      <div [hidden]=\"eRef.valid || eRef.pristine\" class=\"alert alert-danger\">\n        Email cannot be empty   \n      </div>\n\n    <div class=\"clearfix\">\n        <button type=\"button\" (click)=\"addUser($event)\" class=\" button cancelbtn\">Cancel</button>\n        <button [disabled]=\"!userForm.form.valid\" type=\"submit\" class=\" button signupbtn\">Add User</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loginservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loginservice */ "./src/app/services/loginservice.ts");
/* harmony import */ var _services_httpsevice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpsevice.service */ "./src/app/services/httpsevice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(credentials, httpHandle) {
        this.credentials = credentials;
        this.httpHandle = httpHandle;
        this.adminDel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataLoaded = false;
        this.updateFlag = false;
        this.add = false;
        this.userList = [{
                uid: 1,
                firstname: 'Abhiyan',
                lastname: 'Timilsina',
                username: 'abhiyan',
                role: 'user'
            }
        ];
    }
    DisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url;
        if (this.adminId == undefined)
            this.adminId = this.credentials.userInfo.UID;
        url = "users/1/" + this.adminId;
        this.httpHandle.getData(url, { id: this.credentials.getToken.id,
            token: this.credentials.getToken.token
        });
        this.httpHandle.callComplete.subscribe(function (data) {
            _this.userList = data.result;
            _this.dataLoaded = true;
        });
    };
    DisplayComponent.prototype.update = function (event) {
        var id = event.target.getAttribute('id');
        this.toUpdate = this.userList[id];
        this.updateFlag = true;
    };
    DisplayComponent.prototype.perform = function (event) {
        var _this = this;
        if (event.update)
            this.updateFlag = false;
        var url = "modifyUser";
        this.httpHandle.postRequestWithCredentials(url, {
            id: this.credentials.getToken.id,
            token: this.credentials.getToken.token
        }, event).subscribe(function () {
            var url = "users/1/" + _this.adminId;
            _this.httpHandle.getData(url, { id: _this.credentials.getToken.id,
                token: _this.credentials.getToken.token
            });
            _this.httpHandle.callComplete.subscribe(function (data) {
                _this.userList = data.result;
                _this.dataLoaded = true;
            });
        });
    };
    DisplayComponent.prototype.delete = function (event) {
        var id = parseInt(event.target.getAttribute('id'));
        this.perform({ type: 0,
            id: id
        });
        if (event.target.hasAttribute('t'))
            this.adminDel.emit({ id: this.adminId });
    };
    DisplayComponent.prototype.addUser = function (event) {
        this.add = !this.add;
    };
    DisplayComponent.prototype.addNewUser = function (formValue) {
        var _this = this;
        this.add = !this.add;
        formValue.aid = this.adminId;
        formValue.role = "user";
        this.httpHandle.postRequestWithCredentials("users", {
            id: this.credentials.getToken.id,
            token: this.credentials.getToken.token
        }, formValue).subscribe(function (data) {
            var url = "users/1/" + _this.adminId;
            _this.httpHandle.getData(url, { id: _this.credentials.getToken.id,
                token: _this.credentials.getToken.token
            });
            _this.httpHandle.callComplete.subscribe(function (data) {
                _this.userList = data.result;
                _this.dataLoaded = true;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('adminDeleteEvent'),
        __metadata("design:type", Object)
    ], DisplayComponent.prototype, "adminDel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Number)
    ], DisplayComponent.prototype, "adminId", void 0);
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [_services_loginservice__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_httpsevice_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/front/front.component.css":
/*!*******************************************!*\
  !*** ./src/app/front/front.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " *\n {\n     margin: 0px;\n     padding:0px;\n }\n .main\n{\n    position:absolute;\n    width:100%;\n    height:100%;\n\tmargin: 0;\n\tpadding: 0;\n    background: url('bg.jpg');\n    opacity: 1.0;\n\tbackground-size: cover;\n\tfont-family: sans-serif;\n}\n .loginBox\n{\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%,-50%);\n\t        transform: translate(-50%,-50%);\n\twidth: 350px;\n\theight: 420px;\n\tpadding: 80px 40px;\n\tbox-sizing: border-box;\n\tbackground: rgba(0,0,0,.5);\n}\n .user\n{\n\twidth: 100px;\n\theight: 100px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tposition: absolute;\n\ttop: calc(-100px/2);\n\tleft: calc(50% - 50px);\n}\n h2\n{\n\tmargin: 0;\n\tpadding: 0 0 20px;\n\tcolor: #efed40;\n\ttext-align: center;\n}\n .loginBox p\n{\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: bold;\n\tcolor: #fff;\n}\n .loginBox input\n{\n\twidth: 100%;\n\tmargin-bottom: 20px;\n}\n .loginBox input[type=\"text\"],\n.loginBox input[type=\"password\"]\n{\n\tborder: none;\n\tborder-bottom: 1px solid #fff;\n\tbackground: transparent;\n\toutline: none;\n\theight: 40px;\n\tcolor: #fff;\n\tfont-size: 16px;\n}\n ::-webkit-input-placeholder\n{\n\tcolor: rgba(255,255,255,.5);\n}\n ::-ms-input-placeholder\n{\n\tcolor: rgba(255,255,255,.5);\n}\n ::placeholder\n{\n\tcolor: rgba(255,255,255,.5);\n}\n .loginBox input[type=\"submit\"]\n{\n\tborder: none;\n\toutline: none;\n\theight: 40px;\n\tcolor: #fff;\n\tfont-size: 16px;\n\tbackground: #ff267e;\n\tcursor: pointer;\n\tborder-radius: 20px;\n}\n .loginBox input[type=\"submit\"]:hover\n{\n\tbackground: #efed40;\n\tcolor: #262626;\n}\n .loginBox a\n{\n\tcolor: #fff;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\ttext-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/front/front.component.html":
/*!********************************************!*\
  !*** ./src/app/front/front.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main\">\n  <div class=\"loginBox\">\n    <img src=\"../../assets/user.png\" class=\"user\">\n    <h2>Log In Here</h2>\n    <form>\n      <p>Username</p>\n      <input [(ngModel)]=\"username\" type=\"text\" name=\"uname\" placeholder=\"Enter Username\" required>\n      <p>Password</p>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"pass\" placeholder=\"••••••\" required>\n      <input (click)=\"onSubmit($event)\" type=\"submit\" name=\"\" value=\"Sign In\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/front/front.component.ts":
/*!******************************************!*\
  !*** ./src/app/front/front.component.ts ***!
  \******************************************/
/*! exports provided: FrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontComponent", function() { return FrontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loginservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loginservice */ "./src/app/services/loginservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrontComponent = /** @class */ (function () {
    function FrontComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    FrontComponent.prototype.ngOnInit = function () {
    };
    FrontComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.auth.authorizeUser(this.username, this.password);
        this.auth.authenticatedEvent.subscribe(function (data) {
            if (data == "ACCESS DENIED")
                alert("ACCESS DENIED INVALID CREDENTIALS");
            else
                _this.router.navigate(['/dashboard']);
        });
    };
    FrontComponent.prototype.ngOnDestroy = function () {
    };
    FrontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front',
            template: __webpack_require__(/*! ./front.component.html */ "./src/app/front/front.component.html"),
            styles: [__webpack_require__(/*! ./front.component.css */ "./src/app/front/front.component.css")]
        }),
        __metadata("design:paramtypes", [_services_loginservice__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FrontComponent);
    return FrontComponent;
}());



/***/ }),

/***/ "./src/app/navigationbar/navigationbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/navigationbar/navigationbar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    width: 100%;\n    background-color: #555;\n    overflow: auto;\n  }\n  \n  .navbar a {\n    float: left;\n    padding: 12px;\n    color: white;\n    text-decoration: none;\n    font-size: 17px;\n  }\n  \n  .navbar a:hover {\n    background-color: #000;\n  }\n  \n  .active {\n    background-color: #4CAF50;\n  }\n  \n  @media screen and (max-width: 500px) {\n    .navbar a {\n      float: none;\n      display: block;\n    }\n  }\n  \n  .haze\n  {\n      position:absolute;\n      right: 0px;\n      background: lightcoral; \n  }\n\n\n\n  "

/***/ }),

/***/ "./src/app/navigationbar/navigationbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/navigationbar/navigationbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">TEST PROJECT</a>\n      </div>\n  <a routerLinkActive=\"active\"  [routerLink]=\"['/dashboard']\"><i class=\"fa fa-fw fa-home\"></i> Home</a> \n  <a routerLinkActive=\"active\" [routerLink]=\"['/adminuser']\" *ngIf=\"type==='admin'\" ><i class=\"fa fa-fw fa-user\"></i> Users</a>\n  <a routerLinkActive=\"active\" [routerLink]=\"['/superadmin']\" *ngIf=\"type==='superadmin'\" ><i class=\"fa fa-fw fa-user\"></i> Admins</a>\n    <a  class=\"btn btn-info btn-lg haze\"\n    (click)=\"logoutUser()\"\n    >\n        <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n      </a>\n    \n    \n</div>\n"

/***/ }),

/***/ "./src/app/navigationbar/navigationbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/navigationbar/navigationbar.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationbarComponent", function() { return NavigationbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationbarComponent = /** @class */ (function () {
    function NavigationbarComponent(router) {
        this.router = router;
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavigationbarComponent.prototype.logoutUser = function () {
        this.logout.emit({ logout: true });
    };
    NavigationbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", String)
    ], NavigationbarComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationbarComponent.prototype, "logout", void 0);
    NavigationbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigationbar',
            template: __webpack_require__(/*! ./navigationbar.component.html */ "./src/app/navigationbar/navigationbar.component.html"),
            styles: [__webpack_require__(/*! ./navigationbar.component.css */ "./src/app/navigationbar/navigationbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationbarComponent);
    return NavigationbarComponent;
}());



/***/ }),

/***/ "./src/app/services/httpsevice.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/httpsevice.service.ts ***!
  \************************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(httpclient) {
        this.httpclient = httpclient;
        this.baseUrl = "/";
        this.callComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.callComplete1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HttpRequestService.prototype.getData1 = function (url, credentials) {
        var _this = this;
        this.completeUrl = this.baseUrl + url + ("?id=" + credentials.id + "&token=" + credentials.token);
        this.httpclient.get(this.completeUrl).subscribe(function (data) {
            if (data.statusCode != 200) {
                _this.callComplete1.emit({
                    responseId: 1,
                    type: 'faliure',
                    code: data.statusCode,
                    result: []
                });
            }
            else {
                _this.callComplete1.emit({
                    responseId: 1,
                    type: 'success',
                    code: data.statusCode,
                    result: data.result
                });
            }
        });
    };
    HttpRequestService.prototype.getData = function (url, credentials) {
        var _this = this;
        this.completeUrl = this.baseUrl + url + ("?id=" + credentials.id + "&token=" + credentials.token);
        this.httpclient.get(this.completeUrl).subscribe(function (data) {
            if (data.statusCode != 200) {
                _this.callComplete.emit({
                    responseId: 1,
                    type: 'faliure',
                    code: data.statusCode,
                    result: []
                });
            }
            else {
                _this.callComplete.emit({
                    responseId: 1,
                    type: 'success',
                    code: data.statusCode,
                    result: data.result
                });
            }
        });
    };
    HttpRequestService.prototype.postRequest = function (url, body) {
        url = "/" + url;
        return this.httpclient.post(url, body);
    };
    HttpRequestService.prototype.postRequestWithCredentials = function (url, credentials, body) {
        this.completeUrl = "/modifyUser?id=" + credentials.id + "&token=" + credentials.token;
        if (url != undefined)
            this.completeUrl = "/" + url + "?id=" + credentials.id + "&token=" + credentials.token;
        // this.httpclient.post(this.completeUrl,body).subscribe((data)=>{
        //     console.log(data);
        //   });
        return this.httpclient.post(this.completeUrl, body);
    };
    HttpRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/app/services/loginservice.ts":
/*!******************************************!*\
  !*** ./src/app/services/loginservice.ts ***!
  \******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpsevice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpsevice.service */ "./src/app/services/httpsevice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpHandle) {
        this.httpHandle = httpHandle;
        this.authenticatedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.authenticated = false;
        this.userInfo = {};
    }
    Object.defineProperty(AuthenticationService.prototype, "getToken", {
        get: function () {
            return { token: window.sessionStorage.getItem('token'),
                id: window.sessionStorage.getItem('id') };
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.authorizeUser = function (username, password) {
        var _this = this;
        this.httpHandle
            .postRequest('authorize', { username: username, password: password }).subscribe(function (data) {
            if (data.statusCode == 200) {
                _this.setToken(data.token, data.id);
                _this.authenticated = true;
                _this.userInfo = data.userInfo;
                _this.authenticatedEvent.emit(_this.userInfo);
            }
            else {
                _this.authenticatedEvent.emit("ACCESS DENIED");
            }
        });
    };
    AuthenticationService.prototype.setToken = function (token, id) {
        this.authenticated = true;
        window.sessionStorage.clear();
        window.sessionStorage.setItem('token', token);
        window.sessionStorage.setItem('id', id);
    };
    AuthenticationService.prototype.destroySession = function () {
        this.authenticated = false;
        window.sessionStorage.clear();
        this.userInfo = undefined;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_httpsevice_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/useredit/useredit.component.css":
/*!*************************************************!*\
  !*** ./src/app/useredit/useredit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n    width:250px;\n    background:whitesmoke;\n}"

/***/ }),

/***/ "./src/app/useredit/useredit.component.html":
/*!**************************************************!*\
  !*** ./src/app/useredit/useredit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"row\">\n   <div class=\"col-xs-3\">\n <h4>Current Values</h4>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" [type]=\"'firstname'\">FirstName:  {{user.firstname}}\n      <button (click)=\"updateSingle($event)\" class=\"btn btn-primary\">EDIT</button>\n\n  </li>\n  <li  [type]=\"'lastname'\" class=\"list-group-item\">LastName: {{user.lastname}}\n      <button (click)=\"updateSingle($event)\" class=\"btn btn-primary\">EDIT</button>\n  </li>\n  <li class=\"list-group-item\"  [type]=\"'username'\">UserName: {{user.username}}\n      <button (click)=\"updateSingle($event)\" class=\"btn btn-primary\">EDIT</button>\n  </li>\n  <li class=\"list-group-item\"  [type]=\"'role'\">Role: {{user.role}}\n      <button (click)=\"updateSingle($event)\" class=\"btn btn-primary\">EDIT</button>\n  </li>\n  <li class=\"list-group-item\"  [type]=\"'email'\">Role: {{user.role}}\n    <button (click)=\"updateSingle($event)\" class=\"btn btn-primary\">EDIT</button>\n  </li>\n\n</ul>\n   </div>\n   <div class=\"col-xs-9\" #editbox>\n      <h4>PLEASE FILL THE FIELDS TO UPDATE AND LEAVE BLANK FOR OTHERS:</h4> \n    <div *ngIf=\"!singleEdit else single\">\n\n        <form>\n          <div class=\"form-group\">\n            <label for=\"fname\">FirstName:</label>\n            <input name=\"fname\" required [(ngModel)]=\"firstname\"  type=\"text\" class=\"form-control\" id=\"fname\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lname\">LastName:</label>\n            <input required name=\"lname\" type=\"text\" [(ngModel)]=\"lastname\" class=\"form-control\" id=\"lname\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"uname\">UserName:</label>\n              <input required  name=\"uname\" type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" id=\"uname\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <input required name=\"pwd\" [(ngModel)]=\"password\" type=\"password\"  class=\"form-control\" id=\"lname\">\n              </div>\n          \n          <div class=\"form-group\">\n                <label for=\"role\">Email:</label>\n                <input required name=\"email\" type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" id=\"email\">\n              </div>\n          <button (click)=\"haze($event)\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form> \n     \n     </div>\n   </div>\n </div>  \n</div>\n<ng-template #single>\n  <form><h4 class=\"text text-primary\"> Enter new value for {{field}} </h4> <div class=\"form-group\">\n    <label for=\"\"></label>\n    <input type=\"text\" [(ngModel)]=\"value\"  name=\"haze\" class=\"form-control\" id=\"{{field}}\">\n  </div>\n  <button type=\"submit\" [name]=\"field\" (click)=\"haze($event)\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "./src/app/useredit/useredit.component.ts":
/*!************************************************!*\
  !*** ./src/app/useredit/useredit.component.ts ***!
  \************************************************/
/*! exports provided: UsereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditComponent", function() { return UsereditComponent; });
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

var UsereditComponent = /** @class */ (function () {
    function UsereditComponent() {
        this.dbEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleEdit = false;
    }
    UsereditComponent.prototype.ngOnInit = function () {
    };
    UsereditComponent.prototype.updateSingle = function (event) {
        this.singleEdit = true;
        this.field = event.target.parentElement.getAttribute('type');
    };
    UsereditComponent.prototype.haze = function (event) {
        if (this.singleEdit) {
            var obj = {};
            obj[this.field] = this.value;
            obj["type"] = 1;
            obj["id"] = this.user.UID;
            obj["update"] = true;
            this.dbEvent.emit(obj);
        }
        else {
            this.dbEvent.emit({
                update: true,
                type: 1,
                id: this.user.UID,
                firstname: this.firstname,
                lastname: this.lastname,
                username: this.username,
                password: this.password,
                email: this.email
            });
        }
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.username = "";
        this.password = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('toEdit'),
        __metadata("design:type", Object)
    ], UsereditComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editbox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UsereditComponent.prototype, "editbox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsereditComponent.prototype, "dbEvent", void 0);
    UsereditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-useredit',
            template: __webpack_require__(/*! ./useredit.component.html */ "./src/app/useredit/useredit.component.html"),
            styles: [__webpack_require__(/*! ./useredit.component.css */ "./src/app/useredit/useredit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsereditComponent);
    return UsereditComponent;
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

module.exports = __webpack_require__(/*! /home/abhiyan/Desktop/kernova/client/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map