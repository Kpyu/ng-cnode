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
var router_1 = require('@angular/router');
var HeaderBarComponent = (function () {
    function HeaderBarComponent(route, router) {
        this.route = route;
        this.router = router;
        this.onToggle = new core_1.EventEmitter();
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    HeaderBarComponent.prototype.navbarToggle = function () {
        this.isShowNavbar = true;
        this.onToggle.emit(true);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], HeaderBarComponent.prototype, "isShowNavbar", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HeaderBarComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeaderBarComponent.prototype, "onToggle", void 0);
    HeaderBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header-bar',
            templateUrl: 'header-bar.component.html',
            styleUrls: ['header-bar.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());
exports.HeaderBarComponent = HeaderBarComponent;
//# sourceMappingURL=header-bar.component.js.map