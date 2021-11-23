import { createAction } from '@ngrx/store';
import { IVehicle } from 'src/app/vehicle/models/vehicle-model';

export const addVehicle = createAction(
  '[Vehicle] Add Vehicle', (vehicle: IVehicle) => ({ vehicle })
);