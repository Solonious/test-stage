"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./components/app.component");
var app_header_component_1 = require("./components/app-header/app-header.component");
var app_sidebar_component_1 = require("./components/app-sidebar/app-sidebar.component");
var app_main_component_1 = require("./components/app-main/app-main.component");
var app_search_component_1 = require("./components/app-search/app-search.component");
var app_test_page_component_1 = require("./components/app-test-page/app-test-page.component");
var widget_service_1 = require("./services/widget.service");
var filter_pipe_1 = require("./pipes/filter-pipe");
var app_routing_module_1 = require("./router/app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            app_header_component_1.AppHeaderComponent,
            app_test_page_component_1.AppTestPageComponent,
            app_sidebar_component_1.AppSidebarComponent,
            app_main_component_1.AppMainComponent,
            app_search_component_1.AppSearchComponent,
            filter_pipe_1.FilterPipe
        ],
        providers: [widget_service_1.WidgetService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map