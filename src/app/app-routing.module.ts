import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { InsightsComponent } from './insights/insights.component';
import { TeamsComponent } from './teams/teams.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'quicklinks', component: QuicklinksComponent },
  { path: 'my-favorites', component: MyFavoritesComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
