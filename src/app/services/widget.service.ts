import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { Category } from '../models/category';
import { WidgetsData } from '../models/widget-data';
import { Widget } from '../models/widget';

@Injectable()
export class WidgetService {
    windowObjectReference: any;
    private apiUrl = 'http://widgetserver/?path=common/widgetslist';
    constructor(
        private http: Http,
        private sanitizer: DomSanitizer
    ) {}
    // getCategoryData(): Observable<Category[]> {
    //     return this.http.get(this.apiUrl)
    //         .map(res => res.json().categories as Category[])
    //         .catch(this.handleError);
    // }
    // getVersion(): Observable<string> {
    //     return this.http.get(this.apiUrl)
    //         .map(res => res.json().version as string)
    // }
    handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
    getData(): Observable<WidgetsData> {
        return this.http.get(this.apiUrl)
            .map(res => res.json() as WidgetsData)
            .catch(this.handleError);
    }
    getWidgets(data: WidgetsData): Array<Widget> {
        const res = [];
        data.categories.forEach(item => {
            item.widgets.forEach(widget => res.push(widget));
        });
        return res;
    }
    createWidgetData(embedCode: string, url: string): any {
        const params = this.convertEmbedCodeToObject(embedCode);
        const qs = Object.keys(params.params)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params.params[k])}`)
            .join('&');
        return {
            dataSrc: this.sanitizer.bypassSecurityTrustResourceUrl(`${url}/?path=${params.type}/index&${qs}`),
            width: params.params.width,
            height: params.params.height
        };
    }
    private convertEmbedCodeToObject(embedCode: string): any {
        if (!embedCode) {
            return;
        }
        try {
            return JSON.parse(embedCode.slice(embedCode.indexOf('{'), embedCode.lastIndexOf(';')));
        } catch (err) {
            console.log('Invalid JSON', err);
        }
    }
    showInEditor(module_name: string, url: string): void {
        this.windowOpen(`${url}/?path=widget_editor/${module_name}`);
    }
    openInNewWindow(module_name: string, url: string): void {
        this.windowOpen(`${url}/?path=${module_name}/index`);
    }
    private windowOpen(url: string): void {
        if (this.windowObjectReference == null || this.windowObjectReference.closed) {
            this.windowObjectReference = window.open(url,
                'DescriptiveWindowName', 'width=600px,height=450px,resizable,scrollbars=yes,status=1');
        } else {
            this.windowObjectReference.focus();
        }
    }
}
