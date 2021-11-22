import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { CreateVehicleModalComponent } from './modals/create-vehicle/create-vehicle-modal.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    VehicleOverviewComponent,
    CreateVehicleModalComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class VehicleModule { }
