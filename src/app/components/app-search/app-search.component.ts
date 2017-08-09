import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { WidgetsData } from '../../models/widget-data';
import { Widget } from '../../models/widget';

import { WidgetService } from '../../services/widget.service';

@Component({
    selector: 'app-search',
    templateUrl: './app-search.component.html',
    styleUrls: [ './app-search.component.css' ],
    providers: [WidgetService]
})
export class AppSearchComponent implements OnInit {
    @Output() getSelectedWidgetData = new EventEmitter<Widget>();
    @Input() widgetsData: WidgetsData;
    searchInput = new FormControl();
    selectedWidget: Widget;
    widgetsList = [];

    constructor(private service: WidgetService) {}

    ngOnInit(): void {
        this.getWidgets(this.widgetsData);
    }
    getWidgets(data: WidgetsData): void {
        this.widgetsList = this.service.getWidgets(data);
    }
    onSelectWidget(widget: Widget): void {
        this.getSelectedWidgetData.emit(widget);
        this.selectedWidget = widget;
        this.searchInput.setValue(widget.title);
        console.log(widget);
    };
}
