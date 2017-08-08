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
    @Input() envUrl: string;
    @Input() selectedWidgetData: Widget;
    widgetFrameParams: {
        dataSrc: string;
        height: string;
        width: string;
    };
    message = `Please select widget`;
    errorMessage: string;
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
          if (chpr.currentValue.get_widget_url) {
              this.errorMessage = 'Oops! Something wrong... Widget don\'t show!!! Sorry!';
              return;
          } else {
              this.errorMessage = '';
          }
            this.createWidget(chpr.currentValue.custom_init_code, this.envUrl);
        }
      }
    }
    ngOnInit() {
        this.createWidget(this.selectedWidgetData.custom_init_code, this.envUrl);
    }
    openInWindow(widget: string, url: string) {
        this.widgetService.openInNewWindow(widget, url);
    }
    openInEditor(widget: string, url: string) {
        this.widgetService.showInEditor(widget, url);
    }
    createWidget(embedCode: string, envurl: string) {
        if (!embedCode) {
        return;
      }
        this.widgetFrameParams = this.widgetService.createWidgetData(embedCode, envurl);
    }
}


