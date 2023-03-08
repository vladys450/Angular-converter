import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentRateComponent } from './components/current-rate/current-rate.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { CustomInputComponent } from './components/UI/custominput/custominput.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentRateComponent,
    CurrencyConverterComponent,
    CustomInputComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
