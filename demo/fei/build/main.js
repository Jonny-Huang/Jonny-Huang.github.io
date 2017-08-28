webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, userData) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.priceRange = { lower: 0, upper: 1000 };
        this.segment = 'all';
        this.excludeTracks = [];
        this.all_list = [];
        this.vip_list = [];
        this.all_list = [
            { url: 'assets/img/sample/A_01.jpg', name: '西洋名畫01', author: '不明', price: 10000 },
            { url: 'assets/img/sample/A_02.jpg', name: '西洋名畫02', author: '不明', price: 30000 },
            { url: 'assets/img/sample/A_03.jpg', name: '西洋名畫03', author: '不明', price: 150000 },
            { url: 'assets/img/sample/A_04.jpg', name: '西洋名畫04', author: '不明', price: 60000 },
            { url: 'assets/img/sample/A_05.jpg', name: '西洋名畫05', author: '不明', price: 120000 },
            { url: 'assets/img/sample/A_06.jpg', name: '西洋名畫06', author: '不明', price: 30000 },
            { url: 'assets/img/sample/A_07.jpg', name: '西洋名畫07', author: '不明', price: 80000 },
            { url: 'assets/img/sample/A_08.jpg', name: '西洋名畫08', author: '不明', price: 330000 },
            { url: 'assets/img/sample/A_09.jpg', name: '西洋名畫09', author: '不明', price: 23000 },
            { url: 'assets/img/sample/A_10.jpg', name: '西洋名畫10', author: '不明', price: 580000 },
            { url: 'assets/img/sample/A_11.jpg', name: '西洋名畫11', author: '不明', price: 63000 },
            { url: 'assets/img/sample/A_12.jpg', name: '西洋名畫12', author: '不明', price: 60000 },
            { url: 'assets/img/sample/A_13.jpg', name: '西洋名畫13', author: '不明', price: 10000 },
            { url: 'assets/img/sample/A_14.jpg', name: '西洋名畫14', author: '不明', price: 50000 },
            { url: 'assets/img/sample/A_15.jpg', name: '西洋名畫15', author: '不明', price: 150000 },
            { url: 'assets/img/sample/A_16.jpg', name: '西洋名畫16', author: '不明', price: 86000 },
            { url: 'assets/img/sample/A_17.jpg', name: '西洋名畫17', author: '不明', price: 50000 },
            { url: 'assets/img/sample/A_18.jpg', name: '西洋名畫18', author: '不明', price: 30000 },
            { url: 'assets/img/sample/A_19.jpg', name: '西洋名畫19', author: '不明', price: 50000 },
            { url: 'assets/img/sample/A_20.jpg', name: '西洋名畫20', author: '不明', price: 80000 },
            { url: 'assets/img/sample/B_01.jpg', name: '潮汕家園01', author: '不明', price: 10000 },
            { url: 'assets/img/sample/B_02.jpg', name: '潮汕家園02', author: '不明', price: 600000 },
            { url: 'assets/img/sample/B_03.jpg', name: '潮汕家園03', author: '不明', price: 50000 },
            { url: 'assets/img/sample/B_04.jpg', name: '潮汕家園04', author: '不明', price: 150000 },
            { url: 'assets/img/sample/B_05.jpg', name: '潮汕家園05', author: '不明', price: 30000 },
            { url: 'assets/img/sample/B_06.jpg', name: '潮汕家園06', author: '不明', price: 10000 },
            { url: 'assets/img/sample/B_07.jpg', name: '潮汕家園07', author: '不明', price: 60000 },
            { url: 'assets/img/sample/B_08.jpg', name: '潮汕家園08', author: '不明', price: 80000 },
            { url: 'assets/img/sample/B_09.jpg', name: '潮汕家園09', author: '不明', price: 30000 },
            { url: 'assets/img/sample/B_10.jpg', name: '潮汕家園10', author: '不明', price: 660000 },
            { url: 'assets/img/sample/C_01.jpg', name: '中國水墨畫01', author: '不明', price: 50000 },
            { url: 'assets/img/sample/C_02.jpg', name: '中國水墨畫02', author: '不明', price: 150000 },
            { url: 'assets/img/sample/C_03.jpg', name: '中國水墨畫03', author: '不明', price: 80000 },
            { url: 'assets/img/sample/C_04.jpg', name: '中國水墨畫04', author: '不明', price: 50000 },
            { url: 'assets/img/sample/C_05.jpg', name: '中國水墨畫05', author: '不明', price: 60000 },
            { url: 'assets/img/sample/C_06.jpg', name: '中國水墨畫06', author: '不明', price: 10000 },
            { url: 'assets/img/sample/C_07.jpg', name: '中國水墨畫07', author: '不明', price: 30000 },
            { url: 'assets/img/sample/C_08.jpg', name: '中國水墨畫08', author: '不明', price: 80000 },
            { url: 'assets/img/sample/C_09.jpg', name: '中國水墨畫09', author: '不明', price: 150000 },
            { url: 'assets/img/sample/C_10.jpg', name: '中國水墨畫10', author: '不明', price: 60000 }
        ];
        this.vip_list = [
            { url: 'assets/img/sample/D_01.jpg', name: '清明上河圖01', author: '張擇端', price: 10000 },
            { url: 'assets/img/sample/D_02.jpg', name: '清明上河圖02', author: '張擇端', price: 50000 },
            { url: 'assets/img/sample/D_03.jpg', name: '清明上河圖03', author: '張擇端', price: 100000 },
            { url: 'assets/img/sample/D_04.jpg', name: '清明上河圖04', author: '張擇端', price: 500000 },
            { url: 'assets/img/sample/D_05.jpg', name: '清明上河圖05', author: '張擇端', price: 1000000 },
            { url: 'assets/img/sample/D_06.jpg', name: '清明上河圖06', author: '張擇端', price: 5000000 },
            { url: 'assets/img/sample/D_07.jpg', name: '清明上河圖07', author: '張擇端', price: 10000000 },
            { url: 'assets/img/sample/D_08.jpg', name: '清明上河圖08', author: '張擇端', price: 50000000 }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.segment = 'all';
    };
    HomePage.prototype.updateSchedule = function () {
    };
    HomePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    HomePage.prototype.showDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], item);
    };
    HomePage.prototype.addCartItem = function (item) {
        this.userData.addCartItem(item);
    };
    HomePage.prototype.search = function (event) {
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ng-container *ngIf="!userData.isLogin; else elseHeader">\n      <ion-title>所有商品</ion-title>\n    </ng-container>\n    <ng-template #elseHeader>\n      <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n        <ion-segment-button value="all">\n          所有商品\n        </ion-segment-button>\n        <ion-segment-button value="vip">\n          會員專區\n        </ion-segment-button>\n      </ion-segment>\n    </ng-template>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ng-container [ngSwitch]="segment">\n      <ng-container *ngSwitchCase="\'vip\'">\n        <ion-item>\n          <ion-range min="0" max="1000" step="100" dualKnobs="true" pin="true" [(ngModel)]="priceRange" color="secondary">\n            <ion-icon range-left small color="primary" name="logo-usd"></ion-icon>\n            <ion-icon range-right color="primary" name="logo-usd"></ion-icon>\n          </ion-range>\n        </ion-item>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n          <ion-searchbar (ionInput)="search($event)"></ion-searchbar>\n      </ng-container>\n    </ng-container>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div [ngSwitch]="segment">\n    <ng-container *ngSwitchCase="\'vip\'">\n      <ion-list>\n        <ion-item-sliding *ngFor="let item of vip_list">\n          <button ion-item (click)="showDetail(item)">\n            <ion-thumbnail item-start>\n              <img src="{{item.url}}">\n              </ion-thumbnail>\n              <h2>{{item.name}}</h2>\n              <p>{{item.price | currency:\'TWD\':false}}</p>\n            </button>\n          <ion-item-options side="right">\n            <button ion-button (click)="addCartItem(item)">\n                <ion-icon name="cart"></ion-icon>\n                訂購\n              </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ng-container>\n    <ng-container *ngSwitchDefault>\n      <ion-list>\n        <button ion-item (click)="showDetail(item)" *ngFor="let item of all_list">\n          <ion-thumbnail item-start>\n            <img src="{{item.url}}">\n          </ion-thumbnail>\n          <h2>{{item.name}}</h2>\n          <p>{{item.price | currency:\'TWD\':false}}</p>\n        </button>\n      </ion-list>\n    </ng-container>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserDataProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, userData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.isCartItem = false;
        this.item = this.navParams.data;
        this.isCartItem = (this.item.no || this.item.no > 0);
    }
    DetailPage.prototype.addCartItem = function () {
        this.userData.addCartItem(this.item);
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    };
    DetailPage.prototype.removeCartItem = function () {
        this.userData.removeCartItem(this.item);
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\detail\detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>商品資訊</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-fab top right edge #fab1>\n    <button ion-fab mini color="danger"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n        <ng-container *ngIf="isCartItem; else elseView">\n          <button ion-fab><ion-icon name="trash" color="danger" (click)="removeCartItem()"></ion-icon></button>\n        </ng-container>\n        <ng-template #elseView>\n          <button ion-fab><ion-icon name="cart" color="secondary" (click)="addCartItem()"></ion-icon></button>\n        </ng-template>\n      <button ion-fab><ion-icon name="logo-facebook" color="primary"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter" color="primary"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <img src="{{item.url}}">\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserDataProvider */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>關於</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pay_pay__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = (function () {
    function CartPage(navCtrl, alertCtrl, userData) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = userData;
    }
    CartPage.prototype.showDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], item);
    };
    CartPage.prototype.removeCartItem = function (item) {
        this.userData.removeCartItem(item);
    };
    CartPage.prototype.pay = function () {
        if (this.userData.cartPrice <= 0) {
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pay_pay__["a" /* PayPage */]);
    };
    CartPage.prototype.changePrice = function (item) {
        var alert = this.alertCtrl.create({
            title: '議價',
            message: '請輸入您期望的售價',
            inputs: [
                {
                    name: 'price',
                    placeholder: '價格'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '確定',
                    handler: function (data) {
                        item.newPrice = data.price;
                    }
                }
            ]
        });
        alert.present();
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>購物車</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-item>\n      <ion-label color="primary">總價：{{userData.cartPrice | currency:\'TWD\':false}}</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-fab top right edge #fab1>\n    <button ion-fab mini color="danger" (click)="pay()"><ion-icon name="logo-usd"></ion-icon></button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of userData.cartList">\n      <button ion-item (click)="showDetail(item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.url}}">\n        </ion-thumbnail>\n        <h2>{{item.name}}</h2>\n        <P>{{item.price | currency:\'TWD\':false}}</P>\n        <ng-container *ngIf="item.newPrice">\n            <ion-icon class="newPrice" name="pricetag"></ion-icon>\n          <span class="newPrice">{{item.newPrice | currency:\'TWD\':false}}</span>\n        </ng-container>\n      </button>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="removeCartItem(item)">\n          <ion-icon name="trash"></ion-icon>\n          取消\n        </button>\n        <button ion-button color="secondary" (click)="changePrice(item)">\n          <ion-icon name="pricetag"></ion-icon>\n          議價\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserDataProvider */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
    }
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\notifications\notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>交易通知</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen>\n  <ng-container *ngFor="let item of userData.messageList">\n    <ion-card>\n      <ion-card-content>\n        <h2>訂單編號：{{item.no}}</h2>\n        <h2>交易金額{{item.price | currency:\'TWD\':false}}</h2>\n        <P>交易進度：{{item.state}}</P>\n        <ion-range min="0" max="5" step="1" pin="true" snaps="true" [(ngModel)]="item.setp" disabled>\n          <ion-icon range-left color="danger" name="cart"></ion-icon>\n          <ion-icon range-right color="primary" name="logo-dropbox"></ion-icon>\n        </ion-range>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserDataProvider */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>註冊</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = (function () {
    function FilterPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // let excludedTrackNames = this.navParams.data;
        // this.confData.getTracks().subscribe((trackNames: string[]) => {
        //   trackNames.forEach(trackName => {
        //     this.tracks.push({
        //       name: trackName,
        //       isChecked: (excludedTrackNames.indexOf(trackName) === -1)
        //     });
        //   });
        // });
    }
    FilterPage.prototype.resetFilters = function () {
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    FilterPage.prototype.applyFilters = function () {
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    FilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\filter\filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="applyFilters()">返回</button>\n    </ion-buttons>\n    <ion-title>\n      設定\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n    <ion-list-header>平面</ion-list-header>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>水彩類</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>水墨</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>油畫</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>版畫</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>書法</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>膠彩</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>立體</ion-list-header>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>紙藝</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>陶藝</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>篆刻</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>雕塑</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>玉石</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span item-start class="dot"></span>\n      <ion-label>雅石</ion-label>\n      <ion-toggle color="secondary" checked></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\filter\filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\tutorial\tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">略過</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image" />\n      <h2 class="slide-title">\n        歡迎使用<b>Fei 線上交易系統</b>\n      </h2>\n      <p>\n        彈性、及時、便捷\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image" />\n      <h2 class="slide-title">什麼 Fei?</h2>\n      <p><b>雅浦島石幣（Rai Stones）</b>是原始貨幣之一，產自雅浦島。雅浦島是一個位於太平洋，人口只有約5000到6000人的小島。島上的土著人使用一種巨大石幣作為流通貨幣。由於當地不出產金屬，於是石頭便成為當地重要的資源，並發展出以石頭充當交易媒介的貿易模式。當地人稱這種石幣為費（Fei）。</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image" />\n      <h2 class="slide-title">平台定位?</h2>\n      <p>市面上的購物平台提供快速的建置環境，模組化的系統帶來一致性與簡單的優勢，但是同時也衍生出難以提供差異化的調整與客製化的服務，<b>Fei</b>便是為了少數市場所發展的系統。</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n      <h2 class="slide-title">準備好了嗎?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        開 始\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\tutorial\tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NotificationsPage } from '../notifications/notifications';
var PayPage = (function () {
    function PayPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.sendType = 0;
        this.payType = 0;
    }
    PayPage.prototype.saveOrder = function () {
        this.userData.saveOrder();
        // if (this.navCtrl.canGoBack()) {
        //   this.navCtrl.remove(0);
        // }
        // this.navCtrl.push(NotificationsPage);
        this.navCtrl.pop();
    };
    return PayPage;
}());
PayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pay',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\pay\pay.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>結帳</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-item>\n      <ion-label color="primary">總價：{{userData.cartPrice | currency:\'TWD\':false}}</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list-header>\n    <ion-icon name="logo-usd"></ion-icon>\n    託運方式\n  </ion-list-header>\n  <ion-item>\n    <ion-segment [(ngModel)]="sendType">\n      <ion-segment-button value="0">\n        賣家處理\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        委託貨運\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        自行取貨\n      </ion-segment-button>\n    </ion-segment>\n  </ion-item>\n\n  <ion-list radio-group>\n    <ion-list-header>\n      <ion-icon name="logo-usd"></ion-icon>\n      付款方式\n    </ion-list-header>\n    <ion-item>\n      <ion-label>ATM付款</ion-label>\n      <ion-radio checked="true"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>信用卡</ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>超商取貨付款</ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>貨到付款</ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button icon-start round full color="danger" (click)="saveOrder()">\n    <ion-icon name="basket"></ion-icon>\n    結帳\n  </button>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\pay\pay.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserDataProvider */]])
], PayPage);

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>登入</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="logo">\n    <img src="assets/img/login.png" alt="login">\n  </div>\n\n  <form #loginForm="ngForm" novalidate>\n    <ion-list no-lines>\n      <ion-item>\n        <ion-label stacked color="primary">帳號</ion-label>\n        <ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n          required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n        帳號為必填欄位\n      </p>\n\n      <ion-item>\n        <ion-label stacked color="primary">密碼</ion-label>\n        <ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n        密碼為必填欄位\n      </p>\n    </ion-list>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button (click)="onLogin(loginForm)" type="submit" block>登入</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="onSignup()" color="light" block>註冊</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserDataProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDataProvider = (function () {
    function UserDataProvider(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.isLogin = false;
        this.cartItemCount = '';
        this.cartPrice = 0;
        this.messageCount = '';
        this.cartList = [];
        this.messageList = [];
    }
    UserDataProvider.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserDataProvider.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserDataProvider.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserDataProvider.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
        this.isLogin = true;
    };
    ;
    UserDataProvider.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
        this.isLogin = true;
    };
    ;
    UserDataProvider.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
        this.isLogin = false;
    };
    ;
    UserDataProvider.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserDataProvider.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserDataProvider.prototype.hasLoggedIn = function () {
        var _this = this;
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            _this.isLogin = (value === true);
            return _this.isLogin;
        });
    };
    ;
    UserDataProvider.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserDataProvider.prototype.addCartItem = function (item) {
        var copy = Object.assign({ no: new Date(Date.now()).getTime() }, item);
        this.cartList.push(copy);
        this.refreshCart();
        console.log('add Cart');
    };
    ;
    UserDataProvider.prototype.removeCartItem = function (item) {
        console.log('remove Cart');
        console.log(item);
        if (!item.no) {
            return;
        }
        var index = 0;
        var indexValue = -1;
        this.cartList.forEach(function (element) {
            if (element.no == item.no) {
                indexValue = index;
            }
            index++;
        });
        if (indexValue < 0) {
            return;
        }
        console.log(indexValue);
        this.cartList.splice(indexValue, 1);
        this.refreshCart();
    };
    ;
    UserDataProvider.prototype.refreshCart = function () {
        var price = 0;
        var newlist = [];
        this.cartList.forEach(function (element) {
            price += element.price;
            newlist.push(element);
        });
        this.cartList = newlist;
        this.cartItemCount = this.cartList.length;
        if (this.cartItemCount == '') {
            this.cartItemCount = '';
        }
        this.cartPrice = price;
    };
    UserDataProvider.prototype.saveOrder = function () {
        var now = Date.now();
        this.messageList.push({
            no: new Date(now).getTime(),
            creativeDate: now,
            price: this.cartPrice,
            step: 0,
            state: '待付款'
        });
        this.messageCount = this.messageList.length;
        this.cartList = [];
        this.cartPrice = 0;
        this.cartItemCount = '';
    };
    return UserDataProvider;
}());
UserDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserDataProvider);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pay_pay__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_pay_pay__["a" /* PayPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                    { component: __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                    { component: __WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                    { component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                    { component: __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */], name: 'Cart', segment: 'cart' },
                    { component: __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */], name: 'Notifications', segment: 'notifications' },
                    { component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                    { component: __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */], name: 'Filter', segment: 'filter' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__["a" /* DetailPage */], name: 'Detail', segment: 'detail' },
                    { component: __WEBPACK_IMPORTED_MODULE_18__pages_pay_pay__["a" /* PayPage */], name: 'Pay', segment: 'pay' }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_pay_pay__["a" /* PayPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__providers_user_data__["a" /* UserDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(events, userData, menu, platform, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.appPages = [
            { title: '首頁', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], index: 0, icon: 'home' },
            { title: '購物車', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */], index: 1, icon: 'cart' },
            { title: '通知', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */], index: 2, icon: 'notifications' },
            { title: '關於', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: '登出', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: '登入', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: '註冊', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        // confData.load();
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    MyApp.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            this.userData.logout();
        }
    };
    MyApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Projects\fei-mobile\src\app\app.html"*/'<ion-split-pane>\n\n    <!-- logged out menu -->\n    <ion-menu id="loggedOutMenu" [content]="content">\n\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>選單</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class="outer-content">\n\n        <ion-list>\n          <ion-list-header>\n            導覽\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            帳戶\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            幫助\n          </ion-list-header>\n          <button ion-item menuClose (click)="openTutorial()">\n            <ion-icon item-start name="hammer"></ion-icon>\n            播放教程\n          </button>\n        </ion-list>\n      </ion-content>\n\n    </ion-menu>\n\n    <!-- logged in menu -->\n    <ion-menu id="loggedInMenu" [content]="content">\n\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>選單</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class="outer-content">\n\n        <ion-list>\n          <ion-list-header>\n            導覽\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n              帳戶\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            幫助\n          </ion-list-header>\n          <button ion-item menuClose (click)="openTutorial()">\n            <ion-icon item-start name="hammer"></ion-icon>\n            播放教程\n          </button>\n        </ion-list>\n\n      </ion-content>\n\n    </ion-menu>\n\n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n  </ion-split-pane>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_12__providers_user_data__["a" /* UserDataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, userData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__["a" /* NotificationsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Projects\fei-mobile\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex">\n  <ion-tab [root]="tab1Root" tabTitle="首頁" tabIcon="home" tabUrlPath="shop"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="購物車" tabIcon="cart" tabUrlPath="cart" tabBadge="{{userData.cartItemCount}}" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="通知" tabIcon="notifications" tabUrlPath="msg" tabBadge="{{userData.messageCount}}" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="關於" tabIcon="information-circle" tabUrlPath="about"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\Projects\fei-mobile\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_user_data__["a" /* UserDataProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map