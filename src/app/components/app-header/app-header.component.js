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
var widget_service_1 = require("../../services/widget.service");
var AppHeaderComponent = (function () {
    function AppHeaderComponent(widgetService) {
        this.widgetService = widgetService;
        this.onGetEnvUrl = new core_1.EventEmitter();
        this.titles = [
            { title: 'TEST ENV.', url: 'https://freeserv.php-test.site.dukascopy.com', type: 'TEST' },
            { title: 'PRE ENV.', url: 'http://freeserv-pre.php-test.site.dukascopy.com', type: 'PRE' },
            { title: 'LIVE ENV.', url: 'https://freeserv.dukascopy.com/2.0', type: 'LIVE' },
            { title: 'LOCAL ENV.', url: '//172.16.73.35/widgetserver', type: 'LOCAL' },
        ];
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.titlesData = this.titles[0];
        this.sendEnvUrl(this.titlesData.url);
        this.getVersion(this.titlesData.url);
    };
    AppHeaderComponent.prototype.getVersion = function (url) {
        var _this = this;
        this.version = '';
        this.widgetService.getVersion(url).subscribe(function (res) { return _this.version = res; });
    };
    AppHeaderComponent.prototype.onChange = function (title) {
        this.setTitlesData(this.titles.filter(function (item) { return item.title === title; })[0]);
        this.sendEnvUrl(this.titlesData.url);
        this.getVersion(this.titlesData.url);
    };
    AppHeaderComponent.prototype.sendEnvUrl = function (url) {
        this.onGetEnvUrl.emit(url);
    };
    AppHeaderComponent.prototype.setTitlesData = function (data) {
        this.titlesData = data;
    };
    return AppHeaderComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "onGetEnvUrl", void 0);
AppHeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './app-header.component.html',
        styleUrls: ['./app-header.component.css'],
        providers: [widget_service_1.WidgetService]
    }),
    __metadata("design:paramtypes", [widget_service_1.WidgetService])
], AppHeaderComponent);
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app-header.component.js.map