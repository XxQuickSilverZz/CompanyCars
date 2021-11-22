import { createAction } from '@ngrx/store';
import { Vehicle } from 'src/app/vehicle/models/vehicle-model';

export const addVehicle = createAction(
  '[Vehicle] Add Vehicle',  (customer: Vehicle) => ({customer})
);




