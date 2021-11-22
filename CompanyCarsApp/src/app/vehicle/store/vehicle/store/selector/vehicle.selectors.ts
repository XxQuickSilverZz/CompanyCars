import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromVehicle from '../reducer/vehicle.reducer';

export const selectVehiclesState = createFeatureSelector<fromVehicle.VehicleState>(
    fromVehicle.vehicleFeatureKey,
);

export const selectVehicles = createSelector(
  selectVehiclesState,
  (state: fromVehicle.VehicleState) => state.vehicles
);
