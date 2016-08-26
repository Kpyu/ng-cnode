"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_service_1 = require('./api/data-service.service');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.isShowNavbar = false;
        this.isShowConfirm = false;
        this.title = '全部';
    }
    AppComponent.prototype.showConfirm = function () {
        this.isShowConfirm = !this.isShowConfirm;
    };
    /**
     * 监听头部点击
     * @param {boolean} toggle
     */
    AppComponent.prototype.onToggle = function (toggle) {
        this.isShowNavbar = toggle;
    };
    AppComponent.prototype.onNavigate = function (tab) {
        this.title = tab;
    };
    AppComponent.prototype.getUnreadCount = function () {
        this.apiService.unreadCount(this.accesstoken);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            providers: [data_service_service_1.DataServiceService]
        }), 
        __metadata('design:paramtypes', [data_service_service_1.DataServiceService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map