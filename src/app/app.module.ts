import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header.component';
import { DatePipe } from '@angular/common';
import { ConvertToDolarPipe } from './pipes/convert-to-dolar.pipe';
import { DetailScoresComponent } from './detail-scores/detail-scores.component';
import { DetailHostComponent } from './detail-host/detail-host.component';
import { DetailLocationComponent } from './detail-location/detail-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    SearchComponent,
    HeaderComponent,
    ConvertToDolarPipe,
    DetailScoresComponent,
    DetailHostComponent,
    DetailLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
