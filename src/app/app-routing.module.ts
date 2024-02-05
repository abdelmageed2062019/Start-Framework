import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompnent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [ 
  { path: '', redirectTo:"/home", pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'about', component: AboutCompnent, title: "About" },
  { path: 'portfolio', component: PortfolioComponent, title: "Portfolio" },
  { path: 'contact', component: ContactComponent, title: "Contact" },
  { path: '**', component: NotFoundComponent, title: "NotFound" },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
