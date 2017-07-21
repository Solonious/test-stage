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
var AppSidebarComponent = (function () {
    function AppSidebarComponent(widgetService) {
        this.widgetService = widgetService;
        this.onGetData = new core_1.EventEmitter();
        this.isActive = false;
    }
    AppSidebarComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    AppSidebarComponent.prototype.getCategories = function () {
        var _this = this;
        this.widgetService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    AppSidebarComponent.prototype.onSelectCategory = function (category) {
        var _this = this;
        this.isActive = category !== this.selectedCategory ?
            true : !this.isActive;
        this.widgetService.getWidgets(category.widgetsCount, category.title)
            .subscribe(function (widgets) { return _this.widgetsList = widgets; });
        this.selectedCategory = category;
    };
    AppSidebarComponent.prototype.onSelectWidget = function (widget) {
        var _this = this;
        this.selectedWidget = widget;
        this.widgetService.getWidget(widget.slug).subscribe(function (data) {
            // this.widgetService.createWidgetData(data.custom_init_code);
            _this.sendData(data);
        });
    };
    AppSidebarComponent.prototype.sendData = function (data) {
        this.onGetData.emit(data);
    };
    return AppSidebarComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppSidebarComponent.prototype, "onGetData", void 0);
AppSidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        templateUrl: './app-sidebar.component.html',
        styleUrls: ['./app-sidebar.component.css'],
        providers: [widget_service_1.WidgetService]
    }),
    __metadata("design:paramtypes", [widget_service_1.WidgetService])
], AppSidebarComponent);
exports.AppSidebarComponent = AppSidebarComponent;
//# sourceMappingURL=app-sidebar.component.js.map