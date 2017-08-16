import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { WidgetService } from '../../services/widget.service';

import { WidgetsData } from '../../models/widget-data';
import { Widget } from '../../models/widget';

@Component({
    selector: 'app-test-page',
    templateUrl: './app-test-page.component.html',
    styleUrls: ['./app-test-page.component.css'],
    providers: [WidgetService]
})

export class AppTestPageComponent implements OnInit {
    titles = [
        {title: 'TEST ENV.', url: 'https://freeserv.php-test.site.dukascopy.com', type: 'TEST'},
        {title: 'PRE ENV.', url: 'http://freeserv-pre.php-test.site.dukascopy.com', type: 'PRE'},
        {title: 'LIVE ENV.', url: 'https://freeserv.dukascopy.com/2.0', type: 'LIVE'},
        {title: 'LOCAL ENV.', url: '//172.16.73.35/widgetserver', type: 'LOCAL'},
    ];
    widgetDataUrl = new FormControl(this.titles[3].url);
    currentTitleType: string;
    version: string;
    selectedWidgetData: Widget;
    widgetsData: WidgetsData;
    defaultWidgetName = 'chart';
    defaultWidgetData: Widget;
    constructor(private widgetService: WidgetService) {
        this.widgetDataUrl.valueChanges.subscribe(val => this.getWidgetsData(val));
    }
    ngOnInit() {
        this.getWidgetsData(this.widgetDataUrl.value);
    }
    getVersionData(): void {
        this.version = this.widgetsData.version;
    }
    getWidgetsData(url: string): void {
        this.widgetService.getData(url).subscribe(data => {
            this.currentTitleType = this.getUrlType(url);
            this.widgetsData = data;
            this.getVersionData();
            this.defaultWidgetData = this.getDefaultWidget(this.defaultWidgetName)[0];
        })
    }
    setSelectedWidgetData(data: Widget): void {
        this.selectedWidgetData = data;
    }
    private getDefaultWidget(name: string): Widget[] {
        return this.widgetService.getWidgets(this.widgetsData)
            .filter(item => item.module_name === name);
    }
    private getUrlType(url: string): string {
        return this.titles.filter(item => item['url'] === url)[0].type;
    }
}
