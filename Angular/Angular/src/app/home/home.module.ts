import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeRoutingModule } from './home-routing.module';
import { CustomMaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ServiceComponent } from '../shared/user.service';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [ServiceComponent],
})
export class HomeModule { }
