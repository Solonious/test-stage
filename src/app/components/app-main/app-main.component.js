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
var widget_1 = require("../../models/widget");
var AppMainComponent = (function () {
    function AppMainComponent(widgetService) {
        this.widgetService = widgetService;
        this.message = "Please select widget";
    }
    AppMainComponent.prototype.openInWindow = function (widget, url) {
        this.widgetService.openInNewWindow(widget, url);
    };
    AppMainComponent.prototype.openInEditor = function (widget, url) {
        this.widgetService.showInEditor(widget, url);
    };
    AppMainComponent.prototype.createWidget = function (embedCode, envurl) {
        this.widgetFrameParams = this.widgetService.createWidgetData(embedCode, envurl);
    };
    return AppMainComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", widget_1.Widget)
], AppMainComponent.prototype, "widgetData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppMainComponent.prototype, "envUrl", void 0);
AppMainComponent = __decorate([
    core_1.Component({
        selector: 'app-main',
        templateUrl: './app-main.component.html',
        styleUrls: ['./app-main.component.css'],
        providers: [widget_service_1.WidgetService]
    }),
    __metadata("design:paramtypes", [widget_service_1.WidgetService])
], AppMainComponent);
exports.AppMainComponent = AppMainComponent;
//# sourceMappingURL=app-main.component.js.map