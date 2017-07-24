import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { WidgetService } from '../../services/widget.service';
import { Widget } from '../../models/widget';

@Component({
    selector: 'app-main',
    templateUrl: './app-main.component.html',
    styleUrls: ['./app-main.component.css'],
    providers: [WidgetService]
})

export class AppMainComponent implements OnChanges, OnInit {
    @Input() widgetData: Widget;
    @Input() envUrl: string;
    widgetFrameParams: any;
    message = `Please select widget`;
    constructor(
        private widgetService: WidgetService
    ) {}
    ngOnChanges(changes: SimpleChanges) {
      for (const prop in changes) {
        if (changes.hasOwnProperty(prop)) {
          const chpr = changes[prop];
          if (chpr.isFirstChange()) {
            return;
          }
            this.createWidget(chpr.currentValue.custom_init_code, this.envUrl);
        }
      }
    }
    ngOnInit() {
        this.widgetService.getWidget('chart').subscribe(data => {
            this.widgetData = data;
            this.createWidget(this.widgetData.custom_init_code, this.envUrl);
        });
    }
    openInWindow(widget: string, url: string) {
        this.widgetService.openInNewWindow(widget, url);
    }
    openInEditor(widget: string, url: string) {
        this.widgetService.showInEditor(widget, url);
    }
    createWidget(embedCode: string, envurl: string) {
            this.widgetFrameParams = this.widgetService.createWidgetData(embedCode, envurl);
    }

}


