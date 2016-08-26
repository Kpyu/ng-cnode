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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var DataServiceService = (function () {
    function DataServiceService(http) {
        this.http = http;
        this.apiUrl = 'https://cnodejs.org/api/v1/'; // URL to web api
    }
    DataServiceService.prototype.handleError = function (error) {
        console.error(error);
    };
    DataServiceService.prototype.getTopicList = function (params) {
        return this.http.get(this.apiUrl + "topics?page=" + params.page + "\n      &limit=" + params.limit + "&tab=" + params.tab + "&mdrender=" + params.mdrender).toPromise();
    };
    DataServiceService.prototype.getTopic = function () {
    };
    DataServiceService.prototype.newTopic = function () {
    };
    DataServiceService.prototype.topicCollect = function () {
    };
    DataServiceService.prototype.topicDeCollect = function () {
    };
    DataServiceService.prototype.getUserCollect = function () {
    };
    DataServiceService.prototype.newReply = function () {
    };
    DataServiceService.prototype.ups = function () {
    };
    DataServiceService.prototype.getUserInfo = function () {
    };
    DataServiceService.prototype.validateAccessToken = function () {
    };
    DataServiceService.prototype.getMessage = function () {
    };
    DataServiceService.prototype.unreadCount = function (accesstoken) {
        return this.http.get(this.apiUrl + "message/count?accesstoken=" + accesstoken)
            .toPromise();
    };
    DataServiceService.prototype.markAll = function () {
    };
    DataServiceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataServiceService);
    return DataServiceService;
}());
exports.DataServiceService = DataServiceService;
//# sourceMappingURL=data-service.service.js.map