# TestStage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to install

You need Node 6.9.0 or higher.

###Typescript
 
 `npm install -g typescript`
 
###Angular CLI 

 `npm install -g @angular/cli`

`git clone ...`

`cd test-stage && npm install`

`ng serve` For build production use `ng build --prod`

navigate to `http://localhost:4200/`


`ng build --target=production --base-href '/'` base-href - url to app;


##Modules

###app.module.ts
	Root module of application
	@NgModule properties
		imports - import external dependency modules
		declarations - describe all used components
		providers - descride DI(dependency injection) components
		bootstrap - root application component
		

##Router
###app-routing.module.ts
	routes - array of routes
	
##Components

###app-test-page.component.ts

properties
	titles - Array<object> (Hardcoded title, url and type)
	widgetDataUrl - FormControl component(Angular Reactive form) 
	currentTitleType - selected title item
	selectedWidgetData - selected widgets
	widgetsData - data from backend
	defaultWidgetName - widget slug that loaded by default when application is running)
	defaultWidgetData - data default widget
	
methods

	ngOnInit - lifecycle angular component method (calling after constructor created)

	public
	
	getVersionData - get version from backend
	getWidgetsData - get Data from backend
	setSelectedWidgetData - set selected widget
	
	private
	
	getDefaultWidget - return filtered array of widgets
	getUrlType - return url type
	
###app-search.component.ts

	properties
	
	getSelectedWidgetData (Output) - emmited data to parent component (AppTestPageComponent)
	widgetsData (Input) - get data from parent component
	searchInput - From Control component (Angular Reactive form)
	selectedWidget - selected widget data
	widgetList - array
	
	methods
	
	ngOnInit - lifecycle angular method
	
	getWidgets - get widgets data from backend
	onSelectWidget - emmited data to parent component
	
###app-sidebar.component.ts

	properties
	
	getSelectedWidgetData(Output) - emited data to parent component
	widgetsData (Input) - get data from parent component
	selectedCategory - selected category data
	selectedWidget - selected widget data
	categories - array of available categories
	widgetsList - array of available widgets
	
	ngOnChanges -lifecycle angular method call each time when Input property has changed (before constructor)
	ngOnInit - lifecycle angular method
	
	public
	
	getCategories - get categories data from backend
	onSelectedCategory
	onSelectedWidget
	
###app-main.component.ts

	properties
	
	envUrl (Input) - environment url data from parent component
	selectedWidgetData (Input) - widget data from parent component
	widgetFrameParams - params for build iframe
	errorMessage
	
	methods
	
	ngOnChanges - lifecycle angular method
	ngOnInit - lifecycle angular method
	
	openInWindow - create new window widget frame
	openInEditor - create new window in widget editor mode
	createWidget - create widget
	
##Models

###Category 

###Widget

###WidgetData

###EnvTitle


##Services

###widget.service.ts

Dependency injection component 

	properties
	windowObjectReference
	qs - query string
	
	methods
	
	public
	
	handleError
	getData - return Observable data from backend
	getWidgets - return widgetsList for search component
	createWidgetData - return frame param object
	showInEditor
	openInNewWindow
	
	private
	
	convertEmbedCodeToObject
	window open
	
##Pipes

###filter-pipe.ts
	use in AppSearchComponent
	
Project Hierarchy
	
AppComponent
-AppRoutingModule
	-AppTestPageComponent
		-AppSearchComponent
		-AppSidebarComponent
		-AppMainComponent
		