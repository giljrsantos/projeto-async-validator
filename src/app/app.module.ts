import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button'
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,    
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
