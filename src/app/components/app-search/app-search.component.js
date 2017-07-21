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
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var widget_service_1 = require("../../services/widget.service");
var AppSearchComponent = (function () {
    function AppSearchComponent(widgetService) {
        this.widgetService = widgetService;
        this.onGetData = new core_1.EventEmitter();
    }
    AppSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getWidgets().subscribe(function (data) { return _this.widgets = data; });
    };
    AppSearchComponent.prototype.getWidgets = function () {
        return this.widgetService.getWidgets(100);
    };
    AppSearchComponent.prototype.selectWidget = function (widget) {
        var _this = this;
        this.widgetService.getWidget(widget.slug).subscribe(function (data) {
            // this.widgetService.createWidgetData(data.custom_init_code);
            _this.sendData(data);
        });
    };
    AppSearchComponent.prototype.sendData = function (data) {
        this.onGetData.emit(data);
    };
    AppSearchComponent.prototype.setData = function (data) {
        this.widgetService.setData(data);
    };
    return AppSearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppSearchComponent.prototype, "onGetData", void 0);
AppSearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search',
        templateUrl: './app-search.component.html',
        styleUrls: ['./app-search.component.css'],
        providers: [widget_service_1.WidgetService]
    }),
    __metadata("design:paramtypes", [widget_service_1.WidgetService])
], AppSearchComponent);
exports.AppSearchComponent = AppSearchComponent;
//# sourceMappingURL=app-search.component.js.map