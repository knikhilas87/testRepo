import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CustomMaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ApplicationDetailsComponent,
    SearchDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationRoutingModule,
    CustomMaterialModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ApplicationFormModule { }
