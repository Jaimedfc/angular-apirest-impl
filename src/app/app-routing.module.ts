import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationComponent } from './components/location/location.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [{
  path: "locations",
  component: LocationListComponent
},
{
  path:"locations/:id",
  component: LocationComponent
},{
  path: "" ,
  //Redireccionar a otra ruta (redirectTo) con /
  redirectTo: "locations",
  //Hacer que la URL de navegación y el atributo path sean IDENTICOS (pathMatch)
  pathMatch: "full"
},
{
  // Peticion invalida o a ruta no contemplada
  path: "**" ,
  //Mostrar pagina de error
  component: NotFoundComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
