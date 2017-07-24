import { Component } from '@angular/core';
import { AppTestPageComponent} from './app-test-page/app-test-page.component';

@Component({
    selector: 'my-app',
    template: `
        <section class="container-fluid">
            <app-test-page></app-test-page>
                <!--<app-header></app-header>-->
                <!--<nav>-->
                <!--<a routerLink="/test" routerLinkActive="active">test</a>-->
                <!--</nav>-->
                <!--<router-outlet></router-outlet>-->
        </section>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {}
