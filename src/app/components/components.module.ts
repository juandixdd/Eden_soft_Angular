import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { CotizacionComponent } from './modules/ventas/cotizacion/cotizacion.component';
import { RolesComponent } from './modules/configuracion/roles/roles.component';
import { LoginComponent } from './modules/usuarios/login/login.component';
import { RegistroComponent } from './modules/usuarios/registro/registro.component';
import { SideBarMenuComponent } from './shared/side-bar-menu/side-bar-menu.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderMenuComponent,
    CotizacionComponent,
    RolesComponent,
    LoginComponent,
    RegistroComponent,
    SideBarMenuComponent
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
