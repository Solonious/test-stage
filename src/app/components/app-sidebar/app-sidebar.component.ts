import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { WidgetsData } from '../../models/widget-data';
import { Category } from '../../models/category';
import { Widget } from '../../models/widget';


@Component({
    selector: 'app-sidebar',
    templateUrl: './app-sidebar.component.html',
    styleUrls: ['./app-sidebar.component.css']
})

export class AppSidebarComponent implements OnInit {
    @Output() getSelectedWidgetData = new EventEmitter<Widget>();
    @Input() widgetsData: WidgetsData;
    selectedCategory: Category;
    selectedWidget: Widget;
    categories: Category[];
    widgetsList: Widget[];
    constructor() {}
    ngOnInit(): void {
        this.getCategories();
    }
    getCategories(): void {
        this.categories = this.widgetsData.categories;
    }
    onSelectCategory(category: number): void {
        this.widgetsList = this.categories[category].widgets;
        this.selectedCategory = this.categories[category];
    }
    onSelectWidget(widget: Widget): void {
        this.getSelectedWidgetData.emit(widget);
        this.selectedWidget = widget;
    };
}
