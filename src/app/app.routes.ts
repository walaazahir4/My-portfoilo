import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home',pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    {path: 'about', component: AboutMeComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent}
];
// the first line of path is for making the home page is a defualt page open
// the last line ** is meaning anything else 
