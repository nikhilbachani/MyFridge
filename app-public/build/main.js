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

/***/ "./src/app/app-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/app-data.service.ts ***!
  \*************************************/
/*! exports provided: AppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataService", function() { return AppDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppDataService = /** @class */ (function () {
    function AppDataService(http) {
        this.http = http;
        this.apiUrl = '/api/food';
    }
    AppDataService.prototype.getFoodItems = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AppDataService.prototype.createFoodItem = function (newFoodItem) {
        return this.http.post(this.apiUrl, newFoodItem)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AppDataService.prototype.deleteFoodItem = function (delFoodItemId) {
        return this.http.delete(this.apiUrl + '/' + delFoodItemId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AppDataService.prototype.updateFoodItem = function (putFoodItem) {
        var putUrl = this.apiUrl + '/' + putFoodItem._id;
        return this.http.put(putUrl, putFoodItem)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AppDataService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server Error';
        console.error(errMsg);
    };
    AppDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppDataService);
    return AppDataService;
}());



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

module.exports = "<app-food-list></app-food-list>"

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
        this.title = 'MyFridge';
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-list/food-list.component */ "./src/app/food-list/food-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-detail/food-detail.component */ "./src/app/food-detail/food-detail.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_3__["FoodListComponent"],
                _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_6__["FoodDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/food-detail/food-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QtZGV0YWlsL2Zvb2QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"foodItem\" class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<h2 *ngIf=\"foodItem._id\">Food Item Details</h2>\n\t\t<h2 *ngIf=\"!foodItem._id\">New Food Item</h2>\n\t</div>\n</div>\n<div *ngIf=\"foodItem\" class=\"row\">\n\t<form class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"name\">Name</label>\n\t\t\t<input class=\"form-control\" name=\"name\" [(ngModel)]=\"foodItem.name\" placeholder=\"Name\" required #name=\"ngModel\" />\n\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n\t\t\t  <div *ngIf=\"name.errors.required\">\n\t\t\t\tName is required.\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"item-date\">Date</label>\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"item-date\" [(ngModel)]=\"foodItem.date\" placeholder=\"Date\" required #date=\"ngModel\"/>\n\t\t\t<div *ngIf=\"date.invalid && (date.dirty || date.touched)\" class=\"alert alert-danger\">\n\t\t\t  <div *ngIf=\"date.errors.required\">\n\t\t\t\tDate is required.\n\t\t\t  </div>\n\t\t\t</div>\n    </div>\n    <div class=\"form-group\">\n\t\t\t<label for=\"item-expiry\">Expiry Date</label>\n\t\t\t<input class=\"form-control\" type=\"text\"  name=\"item-expiry\" [(ngModel)]=\"foodItem.expiry\" placeholder=\"Expiry Date\"/>\n    </div>\n    <div class=\"form-group\">\n\t\t\t<label for=\"item-left_overs\">Left Overs?</label>\n\t\t<select class=\"form-control\" name=\"item-left_overs\" [(ngModel)]=\"foodItem.left_overs\" >\n\t\t\t<option value=\"true\">Yes</option>\n\t\t\t<option value=\"false\">No</option>\n\t\t</select>\n    </div>\n    <div class=\"form-group\">\n\t\t\t<label for=\"item-quantity\">Quantity</label>\n\t\t\t<input class=\"form-control\" type=\"number\" min=\"1\" name=\"item-quantity\" [(ngModel)]=\"foodItem.quantity\" placeholder=\"Quantity\"/>\n    </div>\n\t\t<button class=\"btn btn-primary\" *ngIf=\"!foodItem._id\" (click)=\"createFoodItem(foodItem)\">Create</button>\n\t\t<button class=\"btn btn-info\" *ngIf=\"foodItem._id\" (click)=\"updateFoodItem(foodItem)\">Update</button>\n\t\t<button class=\"btn btn-danger\" *ngIf=\"foodItem._id\" (click)=\"deleteFoodItem(foodItem._id)\">Delete</button>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FoodDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailComponent", function() { return FoodDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food-item */ "./src/app/food-item.ts");
/* harmony import */ var _app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-data.service */ "./src/app/app-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodDetailComponent = /** @class */ (function () {
    function FoodDetailComponent(dataService) {
        this.dataService = dataService;
    }
    FoodDetailComponent.prototype.createFoodItem = function (foodItem) {
        var _this = this;
        this.dataService.createFoodItem(foodItem)
            .then(function (newFoodItem) {
            _this.createHandler(newFoodItem);
        });
    };
    FoodDetailComponent.prototype.updateFoodItem = function (foodItem) {
        var _this = this;
        this.dataService.updateFoodItem(foodItem)
            .then(function (updatedFoodItem) {
            _this.updateHandler(updatedFoodItem);
        });
    };
    FoodDetailComponent.prototype.deleteFoodItem = function (foodItemId) {
        var _this = this;
        this.dataService.deleteFoodItem(foodItemId)
            .then(function (delFoodItemId) {
            _this.deleteHandler(delFoodItemId);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _food_item__WEBPACK_IMPORTED_MODULE_1__["FoodItem"])
    ], FoodDetailComponent.prototype, "foodItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], FoodDetailComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], FoodDetailComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], FoodDetailComponent.prototype, "deleteHandler", void 0);
    FoodDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-detail',
            template: __webpack_require__(/*! ./food-detail.component.html */ "./src/app/food-detail/food-detail.component.html"),
            styles: [__webpack_require__(/*! ./food-detail.component.css */ "./src/app/food-detail/food-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], FoodDetailComponent);
    return FoodDetailComponent;
}());



/***/ }),

/***/ "./src/app/food-item.ts":
/*!******************************!*\
  !*** ./src/app/food-item.ts ***!
  \******************************/
/*! exports provided: FoodItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItem", function() { return FoodItem; });
var FoodItem = /** @class */ (function () {
    function FoodItem() {
    }
    return FoodItem;
}());



/***/ }),

/***/ "./src/app/food-list/food-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/food-list/food-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QtbGlzdC9mb29kLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/food-list/food-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/food-list/food-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-5 col-md-offset-1\">\n\t<h2>Food Items</h2>\n\t<h4><strong>Click</strong> on each one to get details about it.</h4>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"\n\t\t\t*ngFor=\"let foodItem of foodItems\"\n\t\t\t(click)=\"selectFoodItem(foodItem)\">\n\t\t\t{{ foodItem.name }}\n\t\t</li>\n\t</ul>\n\t<button class=\"btn btn-warning\" (click)=\"createNewFoodItem()\">New</button>\n\t</div>\n\t<div class=\"col-md-5 \">\n\t\t<app-food-detail\n\t\t\t[foodItem]=\"selectedFoodItem\"\n\t\t\t[createHandler]=\"addFoodItem\"\n\t\t\t[updateHandler]=\"updateFoodItem\"\n\t\t\t[deleteHandler]=\"deleteFoodItem\">\n\t\t</app-food-detail>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/food-list/food-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/food-list/food-list.component.ts ***!
  \**************************************************/
/*! exports provided: FoodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListComponent", function() { return FoodListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-data.service */ "./src/app/app-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodListComponent = /** @class */ (function () {
    function FoodListComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.getIndexOfFoodItem = function (foodItemId) {
            return _this.foodItems.findIndex(function (foodItem) {
                return foodItem._id === foodItemId;
            });
        };
        this.deleteFoodItem = function (foodItemId) {
            if (confirm("Do you really wish to delete?")) {
                var delId = _this.getIndexOfFoodItem(foodItemId);
                if (delId !== -1) {
                    if (_this.foodItems[delId].quantity > 1) {
                        _this.foodItems[delId].quantity--;
                        alert(_this.foodItems[delId].name + "'s quantity has been reduced to " + _this.foodItems[delId].quantity);
                    }
                    else {
                        _this.foodItems.splice(delId, 1);
                        _this.selectFoodItem(null);
                        alert("Deleted successfully!");
                    }
                }
            }
            return _this.foodItems;
        };
        this.addFoodItem = function (foodItem) {
            foodItem.date = _this.dateFormat(foodItem.date);
            foodItem.expiry = _this.dateFormat(foodItem.expiry);
            _this.foodItems.push(foodItem);
            _this.selectFoodItem(foodItem);
            alert("New Food Item: " + foodItem.name + " created");
            return _this.foodItems;
        };
        this.updateFoodItem = function (foodItem) {
            if (confirm("Do you really wish to update?")) {
                var upId = _this.getIndexOfFoodItem(foodItem._id);
                if (upId !== -1) {
                    foodItem.date = _this.dateFormat(foodItem.date);
                    foodItem.expiry = _this.dateFormat(foodItem.expiry);
                    _this.foodItems[upId] = foodItem;
                    _this.selectFoodItem(foodItem);
                    alert("Update successful!");
                }
            }
            return _this.foodItems;
        };
        this.dateFormat = function (stringDate) {
            var foodDate = new Date(stringDate);
            var dateString = foodDate.getFullYear() + '-' + (foodDate.getMonth() + 1) + '-' + foodDate.getUTCDate();
            return dateString;
        };
    }
    FoodListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getFoodItems()
            .then(function (foodItems) {
            if (foodItems != null) {
                _this.foodItems = foodItems.map(function (foodItem) {
                    foodItem.date = _this.dateFormat(foodItem.date);
                    foodItem.expiry = _this.dateFormat(foodItem.expiry);
                    ;
                    return foodItem;
                });
            }
        });
    };
    FoodListComponent.prototype.selectFoodItem = function (foodItem) {
        this.selectedFoodItem = foodItem;
    };
    FoodListComponent.prototype.createNewFoodItem = function () {
        var foodItem = {
            name: '',
            date: '',
            expiry: '',
            left_overs: false,
            quantity: 1
        };
        this.selectFoodItem(foodItem);
    };
    FoodListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-list',
            template: __webpack_require__(/*! ./food-list.component.html */ "./src/app/food-list/food-list.component.html"),
            styles: [__webpack_require__(/*! ./food-list.component.css */ "./src/app/food-list/food-list.component.css")],
            providers: [_app_data_service__WEBPACK_IMPORTED_MODULE_1__["AppDataService"]]
        }),
        __metadata("design:paramtypes", [_app_data_service__WEBPACK_IMPORTED_MODULE_1__["AppDataService"]])
    ], FoodListComponent);
    return FoodListComponent;
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

module.exports = __webpack_require__(/*! /Users/nikhilbachani/Desktop/MyFridge/app-public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map