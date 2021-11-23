import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IVehicle } from '../models/vehicle-model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CreateVehicleModalComponent } from '../modals/create-vehicle/create-vehicle-modal.component';
import { ToastrService } from 'ngx-toastr';
import { IVehicleState } from '../store/vehicle/store/reducer/vehicle.reducer';
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

  public vehicles$: Observable<IVehicle[]> = of([]);

  constructor(
    private readonly modalService: BsModalService,
    private readonly toastrService: ToastrService,
    public store: Store<IVehicleState>) {
  }

  public ngOnInit(): void {  
    this.loadVehiclesFromStore();
  }

  public formatEZDate(date: Date) {
    return moment(date).format('MM/YYYY')
  }

  public formatDatumKmStand(date: Date) {
    return moment(date).format('DD.MM.yyyy')
  }

  public openCreateVehicleModal(): Partial<IVehicle> {
    let modal = this.modalService.show(CreateVehicleModalComponent);

    let vehicle = {};
    modal.content?.onClose.subscribe(async saved => {
      if (saved) {
        try {
          let newVehicle = <IVehicle>modal.content?.form?.value;
          if(newVehicle){
            this.store.dispatch(addVehicle(newVehicle));
            this.loadVehiclesFromStore();
            this.toastrService.success('Das Fahrzeug wurde zum Bestand hinzugefügt.');
            vehicle = newVehicle;
          }
        } catch (error) {
          this.toastrService.error('Das Fahrzeug konnte nicht zum Bestand hinzugefügt werden. Bitte wiederholen Sie den Vorgang!');
          console.error(error);
          vehicle = {};
        }
      }
    });

    return vehicle;
  }

  private loadVehiclesFromStore() {
    this.vehicles$ = this.store.pipe(select(selectVehicles));
  }
}