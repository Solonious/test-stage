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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var WidgetService = (function () {
    function WidgetService(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.apiUrl = 'https://www.dukascopy.com/trading-tools/api/';
        this.categoriesUrl = "categories/list.json";
    }
    WidgetService.prototype.getCategories = function () {
        return this.http.get("" + (this.apiUrl + this.categoriesUrl))
            .map(function (res) {
            var categoriesList = res.json();
            var categories = [];
            for (var index in categoriesList) {
                var category = categoriesList[index];
                categories.push({
                    id: category.id,
                    title: category.title,
                    widgetsCount: category.widgetsCount
                });
            }
            return categories;
        })
            .catch(this.handleError);
    };
    WidgetService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    WidgetService.prototype.getWidgets = function (limit, category) {
        var _this = this;
        var url;
        if (category) {
            url = this.apiUrl + "widgets/list.json?limit=" + limit + "&category=" + category + "&offset=0";
        }
        else {
            url = this.apiUrl + "widgets/list.json?limit=" + limit;
        }
        return this.http.get(url)
            .map(function (res) { return _this.widgets = res.json().data; });
    };
    WidgetService.prototype.getWidget = function (slug) {
        return this.http.get(this.apiUrl + "widget/" + slug)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    WidgetService.prototype.getVersion = function (url) {
        return this.http.get(url + "/?path=common/version")
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    WidgetService.prototype.setData = function (data) {
        this.widgetData = data;
    };
    WidgetService.prototype.getData = function () {
        return this.widgetData;
    };
    WidgetService.prototype.setUrl = function (url) {
        this.envUrl = url;
    };
    WidgetService.prototype.getUrl = function () {
        return this.envUrl;
    };
    WidgetService.prototype.createWidgetData = function (embedCode, url) {
        var params = this.convertEmbedCodeToObject(embedCode);
        var qs = Object.keys(params.params)
            .map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(params.params[k]); })
            .join('&');
        return {
            dataSrc: this.sanitizer.bypassSecurityTrustResourceUrl(url + "/?path=" + params.type + "/index&" + qs),
            width: params.params.width,
            height: params.params.height
        };
    };
    WidgetService.prototype.convertEmbedCodeToObject = function (embedCode) {
        if (!embedCode) {
            return;
        }
        try {
            return JSON.parse(embedCode.slice(embedCode.indexOf('{'), embedCode.lastIndexOf(';')));
        }
        catch (err) {
            console.log('Invalid JSON', err);
        }
    };
    WidgetService.prototype.showInEditor = function (module_name, url) {
        this.windowOpen(url + "/?path=widget_editor/" + module_name);
    };
    WidgetService.prototype.openInNewWindow = function (module_name, url) {
        this.windowOpen(url + "/?path=" + module_name + "/index");
    };
    WidgetService.prototype.windowOpen = function (url) {
        if (this.windowObjectReference == null || this.windowObjectReference.closed) {
            this.windowObjectReference = window.open(url, 'DescriptiveWindowName', 'width=600px,height=450px,resizable,scrollbars=yes,status=1');
        }
        else {
            this.windowObjectReference.focus();
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        platform_browser_1.DomSanitizer])
], WidgetService);
exports.WidgetService = WidgetService;
//# sourceMappingURL=widget.service.js.map