import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule} from '@angular/router' ;
import {HttpClientModule} from '@angular/common/http';
import { SheetComponent } from './sheet/sheet.component' ;
import {FormsModule} from '@angular/forms';

const Routes = [
  {
    path: '',
    redirectTo: 'sheet',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'sheet',
    component: SheetComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(Routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
