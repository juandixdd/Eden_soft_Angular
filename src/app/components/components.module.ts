import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class ComponentsModule { }
