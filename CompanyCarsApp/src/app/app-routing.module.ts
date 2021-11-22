import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '**', redirectTo: '/vehicle', pathMatch: 'full' }, //standardroute! muss danach wieder raus
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./vehicle/vehicle.module').then((m) => m.VehicleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
