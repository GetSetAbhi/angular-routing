import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneCompponentComponent } from './one-compponent/one-compponent.component';
import { TwoComponentComponent } from './two-component/two-component.component';
import { ThreeComponentComponent } from './three-component/three-component.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OneCompponentComponent, TwoComponentComponent, ThreeComponentComponent, OneComponent, TwoComponent, ThreeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
