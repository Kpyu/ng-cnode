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
var NavBarComponent = (function () {
    function NavBarComponent(route) {
        this.route = route;
        this.navSet = NAVS.navSet;
        this.currentNav = NAVS.nav;
        this.onToggle = new core_1.EventEmitter();
        this.onNavigate = new core_1.EventEmitter();
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.navigatorTo = function ($event, tab) {
        var title = '';
        $event.stopPropagation();
        this.isShowNavbar = false;
        this.onToggle.emit(false);
        switch (tab) {
            case 'all':
                title = '全部';
                break;
            case 'good':
                title = '精华';
                break;
            case 'share':
                title = '分享';
                break;
            case 'ask':
                title = '问答';
                break;
            case 'job':
                title = '招聘';
                break;
            case 'message':
                title = '消息';
                break;
            case 'about':
                title = '关于';
                break;
            case 'perinfo':
                title = '个人信息';
                break;
            case 'newtopic':
                title = '发帖';
                break;
            default:
                title = '全部';
                break;
        }
        this.onNavigate.emit(title);
    };
    NavBarComponent.prototype.hide = function () {
        this.isShowNavbar = false;
        this.onToggle.emit(false);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavBarComponent.prototype, "isShowNavbar", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavBarComponent.prototype, "isLogin", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavBarComponent.prototype, "onToggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavBarComponent.prototype, "onNavigate", void 0);
    NavBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nav-bar',
            templateUrl: 'nav-bar.component.html',
            styleUrls: ['nav-bar.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
var NAVS = {
    nav: 1,
    navSet: [
        [
            {
                icon: '&#xe602;',
                name: '全部',
                view: 'list',
                tab: 'all'
            }, {
                icon: '&#xe605;',
                name: '精华',
                view: 'list',
                tab: 'good'
            }, {
                icon: '&#xe600;',
                name: '分享',
                view: 'list',
                tab: 'share'
            }, {
                icon: '&#xe608;',
                name: '问答',
                view: 'list',
                tab: 'ask'
            }, {
                icon: '&#xe606;',
                name: '招聘',
                view: 'list',
                tab: 'job'
            }],
        [{
                icon: '&#xe607;',
                accessToken: true,
                name: '消息',
                view: 'message'
            }, {
                icon: '&#xe608;',
                name: '关于',
                view: 'about'
            }],
        [{
                icon: '&#xe608;',
                name: '个人信息',
                accessToken: true,
                view: 'perinfo'
            }, {
                icon: '&#xe608;',
                name: '发帖',
                accessToken: true,
                view: 'newtopic'
            }]]
};
//# sourceMappingURL=nav-bar.component.js.map