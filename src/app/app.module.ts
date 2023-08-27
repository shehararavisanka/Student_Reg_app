import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MststudentComponent } from './Component/mststudent/mststudent.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewstudentComponent } from './Component/viewstudent/viewstudent.component';  

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MststudentComponent,
    LoginComponent,
    ViewstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule     ,HttpClientModule,Ng2SearchPipeModule,NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
