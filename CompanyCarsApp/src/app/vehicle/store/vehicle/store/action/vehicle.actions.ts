import { createAction } from '@ngrx/store';
import { Vehicle } from 'src/app/vehicle/models/vehicle-model';

export const addVehicle = createAction(
  '[Vehicle] Add Vehicle',  (vehicle: Vehicle) => ({vehicle})
);




