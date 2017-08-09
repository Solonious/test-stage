import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { AppTestPageComponent }         from '../components/app-test-page/app-test-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '',    component: AppTestPageComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
