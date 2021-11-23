import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromVehicle from '../reducer/vehicle.reducer';

export const selectVehiclesState = createFeatureSelector<fromVehicle.IVehicleState>(
    fromVehicle.vehicleFeatureKey,
);

export const selectVehicles = createSelector(
  selectVehiclesState,
  (state: fromVehicle.IVehicleState) => state.vehicles
);
