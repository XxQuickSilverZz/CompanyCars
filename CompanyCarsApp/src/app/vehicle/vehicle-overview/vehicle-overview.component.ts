import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Vehicle } from '../models/vehicle-model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CreateVehicleModalComponent } from '../modals/create-vehicle/create-vehicle-modal.component';
import { ToastrService } from 'ngx-toastr';
import { VehicleState } from '../store/vehicle/store/reducer/vehicle.reducer';
import { select, Store } from '@ngrx/store';
import { addVehicle } from '../store/vehicle/store/action/vehicle.actions';
import { selectVehicles } from '../store/vehicle/store/selector/vehicle.selectors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrls: ['./vehicle-overview.component.scss']
})
export class VehicleOverviewComponent implements OnInit {

  public vehicles$: Observable<Vehicle[]> = of([]);

  constructor(
    private readonly modalService: BsModalService,
    private readonly toastrService: ToastrService,
    private store: Store<VehicleState>) {
      
    this.vehicles$ = this.store.pipe(select(selectVehicles));
  }

  ngOnInit(): void {
  }

  public formatEZDate(date: Date) {
    return moment(date).format('MM/YYYY')
  }

  public formatDatumKmStand(date: Date) {
    return moment(date).format('DD.MM.yyyy')
  }

  public openCreateVehicleModal() {
    let modal = this.modalService.show(CreateVehicleModalComponent);

    modal.content?.onClose.subscribe(async saved => {
      if (saved) {
        try {
          let vehicle = <Vehicle>modal.content?.form.value;
          this.store.dispatch(addVehicle(vehicle));
          this.toastrService.success('Das Fahrzeug wurde zum Bestand hinzugefügt.')
        } catch (error) {
          this.toastrService.error('Das Fahrzeug konnte nicht zum Bestand hinzugefügt werden. Bitte wiederholen Sie den Vorgang!')
        }
      }
    });
  }

}
