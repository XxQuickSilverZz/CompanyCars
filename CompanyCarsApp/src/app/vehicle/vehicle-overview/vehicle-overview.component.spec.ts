import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { VehicleOverviewComponent } from './vehicle-overview.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialVehicleState as initialVehicleState } from '../store/vehicle/store/reducer/vehicle.reducer';
import { By } from '@angular/platform-browser';
import { CreateVehicleModalComponent } from '../modals/create-vehicle/create-vehicle-modal.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { addVehicle } from '../store/vehicle/store/action/vehicle.actions';
import { select } from '@ngrx/store';
import { selectVehicles } from '../store/vehicle/store/selector/vehicle.selectors';
import { IVehicle } from '../models/vehicle-model';

describe('VehicleOverviewComponent', () => {
  let component: VehicleOverviewComponent;
  let fixture: ComponentFixture<VehicleOverviewComponent>;
  let mockStore: MockStore;
  let bsModalService: BsModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ModalModule.forRoot(),
        ToastrModule.forRoot(),
        ReactiveFormsModule
      ],
      declarations: [VehicleOverviewComponent],
      providers: [
        BsModalService,
        provideMockStore({}),
      ]
    })
      .compileComponents();

    mockStore = TestBed.inject(MockStore);
    mockStore.setState(initialVehicleState)
    bsModalService = TestBed.inject(BsModalService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should check the initial vehicles in the store`, async () => {
    const fixture = TestBed.createComponent(VehicleOverviewComponent);

    mockStore.subscribe(data => {
      let vehicles = <IVehicle[]>data;

      expect(vehicles[0].marke).toBe('Volkswagen')
      expect(vehicles[0].modell).toBe('Golf 6')
      expect(vehicles[0].kfzKennzeichen).toBe('GAP-JF-18')
      expect(vehicles[0].kmStand).toBe(249000)

      expect(vehicles[1].marke).toBe('Mercedes')
      expect(vehicles[1].modell).toBe('C 200')
      expect(vehicles[1].kfzKennzeichen).toBe('M-U-44')
      expect(vehicles[1].kmStand).toBe(71029)

      expect(vehicles[2].marke).toBe('BMW')
      expect(vehicles[2].modell).toBe('320 d')
      expect(vehicles[2].kfzKennzeichen).toBe('HAL-LO-3')
      expect(vehicles[2].kmStand).toBe(412300)
    });
  });

  it(`should format the car first registration date to MM/yyyy`, async () => {
    const fixture = TestBed.createComponent(VehicleOverviewComponent);
    const vehicleOverviewComponent = fixture.componentInstance;
    expect(vehicleOverviewComponent.formatEZDate(new Date(2012, 4, 12))).toBe('05/2012')
  });

  it(`should format the car km stand date to DD.MM.yyyy`, async () => {
    const fixture = TestBed.createComponent(VehicleOverviewComponent);
    const vehicleOverviewComponent = fixture.componentInstance;
    expect(vehicleOverviewComponent.formatDatumKmStand(new Date(2012, 8, 1))).toBe('01.09.2012')
  });
});
