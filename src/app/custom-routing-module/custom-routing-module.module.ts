import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';
import { ThreeComponent } from '../three/three.component';

const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: '', component: OneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class CustomRoutingModuleModule {}
