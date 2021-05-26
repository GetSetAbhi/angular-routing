import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { CustomRoutingModuleModule } from './custom-routing-module/custom-routing-module.module';
import { AddNamePipe } from './add-name.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, CustomRoutingModuleModule],
  declarations: [
    AppComponent,
    HelloComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    AddNamePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
