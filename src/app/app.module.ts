import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppMainComponent } from './components/app-main/app-main.component';

import { AppSearchComponent } from './components/app-search/app-search.component';
import { AppTestPageComponent} from './components/app-test-page/app-test-page.component';
import { WidgetService } from './services/widget.service';
import { FilterPipe } from './pipes/filter-pipe';

import { AppRoutingModule } from './router/app-routing.module';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      AppTestPageComponent,
      AppSidebarComponent,
      AppMainComponent,
      AppSearchComponent,
      FilterPipe
  ],
    providers: [ WidgetService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
