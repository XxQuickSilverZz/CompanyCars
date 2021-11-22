import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

@NgModule({
  declarations: [
    VehicleOverviewComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
