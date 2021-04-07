import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from 'src/material.module';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ApplicationFormModule } from './user/application.module';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    HttpClientModule,
    HomeModule,
    ApplicationFormModule,
    CommonModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
