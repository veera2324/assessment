import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnalogClockComponent } from '../components/analog-clock/analog-clock.component';
import { DigitalClockComponent } from '../components/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
