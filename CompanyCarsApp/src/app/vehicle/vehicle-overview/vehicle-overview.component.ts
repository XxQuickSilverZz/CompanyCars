import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { VehicleModel } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrls: ['./vehicle-overview.component.scss']
})
export class VehicleOverviewComponent implements OnInit {

  public vehicles: VehicleModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.vehicles = [
      {
        marke: 'Volkswagen',
        modell: 'Golf 6',
        erstzulassung : '05/2011',
        nameFahrzeugfahrer: 'Jamez Fatout',
        kfzKennzeichen: 'GAP-JF-18',
        kmStand: 249000,
        datumKmStand: new Date()
      },
      {
        marke: 'Mercedes',
        modell: 'C 200',
        erstzulassung : '02/1992',
        nameFahrzeugfahrer: 'Robert Müller',
        kfzKennzeichen: 'M-U-44',
        kmStand: 71029,
        datumKmStand: new Date(2021,3,1)
      },
      {
        marke: 'BMW',
        modell: '320 d',
        erstzulassung : '11/2005',
        nameFahrzeugfahrer: 'Kevin Jäger',
        kfzKennzeichen: 'HAL-LO-3',
        kmStand: 412300,
        datumKmStand: new Date()
      },
      {
        marke: 'BMW',
        modell: '320 d',
        erstzulassung : '11/2005',
        nameFahrzeugfahrer: 'Kevin Jäger',
        kfzKennzeichen: 'HAL-LO-3',
        kmStand: 412300,
        datumKmStand: new Date()
      }
    ];
  }

  public formatDate(date: Date){
    return moment(date).format('DD.MM.yyyy')

  }

}
