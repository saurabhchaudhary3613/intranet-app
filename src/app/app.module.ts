import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MzCollapsibleModule } from 'ngx-materialize';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { TeamsComponent } from './teams/teams.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { FiltersComponent } from './filters/filters.component';
import { ListActionComponent } from './list-action/list-action.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    InsightsComponent,
    TeamsComponent,
    QuicklinksComponent,
    MyFavoritesComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    FiltersComponent,
    ListActionComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MzCollapsibleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
