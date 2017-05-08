import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppComponent }   from './app.component';
import { KwickiesComponent }   from './components/kwickies/kwickies.component';
import { LoginComponent }   from './components/login/login.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, KwickiesComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

