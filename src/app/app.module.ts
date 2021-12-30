import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculationComponent } from './components/calculation/calculation.component';
import { TipAmountComponent } from './components/calculation/tip-amount/tip-amount.component';
import { TipHistoryComponent } from './components/calculation/tip-history/tip-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculationComponent,
    TipAmountComponent,
    TipHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
