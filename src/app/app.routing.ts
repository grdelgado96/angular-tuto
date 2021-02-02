import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const appRoutes = [
    { path: 'home', component: HomeComponent}
];
export const routing = RouterModule.forRoot(appRoutes);