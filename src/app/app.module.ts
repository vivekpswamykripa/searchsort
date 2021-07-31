import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations:[
    AppComponent,
    StudentdetailsComponent,
    SearchfilterPipe
  ],
  imports:[
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}