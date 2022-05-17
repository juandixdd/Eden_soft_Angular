import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RolesComponent } from './modules/configuracion/roles/roles.component';
import { LoginComponent } from './modules/usuarios/login/login.component';
import { RegistroComponent } from './modules/usuarios/registro/registro.component';
import { CotizacionComponent } from './modules/ventas/cotizacion/cotizacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
