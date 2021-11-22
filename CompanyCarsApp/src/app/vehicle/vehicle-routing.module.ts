import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';

const routes: Routes = [
    { path: '', component: VehicleOverviewComponent },
    {
        path: 'overview',
        component: VehicleOverviewComponent,
        pathMatch: 'full',
        data: {
            title: 'Übersicht',
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VehicleRoutingModule { }
