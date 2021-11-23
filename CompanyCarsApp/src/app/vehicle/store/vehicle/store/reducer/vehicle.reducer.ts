import { Action, createReducer, on } from '@ngrx/store';
import { IVehicle } from 'src/app/vehicle/models/vehicle-model';
import * as VehicleActions from '../action/vehicle.actions';

export const vehicleFeatureKey = 'vehicle';

export interface IVehicleState {
  vehicles: IVehicle[]
}

export const initialVehicleState: IVehicleState = {
  vehicles: [
    {
      marke: 'Volkswagen',
      modell: 'Golf 6',
      erstzulassung: new Date(2011, 5),
      nameFahrzeugfahrer: 'Jamez Fatout',
      kfzKennzeichen: 'GAP-JF-18',
      kmStand: 249000,
      datumKmStand: new Date()
    },
    {
      marke: 'Mercedes',
      modell: 'C 200',
      erstzulassung: new Date(1992, 2),
      nameFahrzeugfahrer: 'Robert Müller',
      kfzKennzeichen: 'M-U-44',
      kmStand: 71029,
      datumKmStand: new Date(2021, 3, 1)
    },
    {
      marke: 'BMW',
      modell: '320 d',
      erstzulassung: new Date(2005, 11),
      nameFahrzeugfahrer: 'Kevin Jäger',
      kfzKennzeichen: 'HAL-LO-3',
      kmStand: 412300,
      datumKmStand: new Date()
    }
  ]
};

export const vehicleReducer = createReducer(
  initialVehicleState,
  on(VehicleActions.addVehicle,
    (state: IVehicleState, { vehicle }) =>
    ({
      ...state,
      vehicles: [vehicle, ...state.vehicles]
    }))
);


export function reducer(state: IVehicleState | undefined, action: Action): any {
  return vehicleReducer(state, action);
}
