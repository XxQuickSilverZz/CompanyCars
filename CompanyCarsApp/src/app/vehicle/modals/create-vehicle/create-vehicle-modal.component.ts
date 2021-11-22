import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle-modal.component.html',
  styleUrls: ['./create-vehicle-modal.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }
  ],
})
export class CreateVehicleModalComponent implements OnInit {
  public onClose: Subject<boolean> = new Subject();
  public form: FormGroup;

  public erstzulassungDatum : undefined | _moment.Moment;

  constructor(
    private bsModalRef: BsModalRef,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      kfzKennzeichen: ['', [Validators.required]],
      marke: ['', [Validators.required]],
      modell: ['', [Validators.required]],
      erstzulassung: [this.erstzulassungDatum, [Validators.required]],
      nameFahrzeugfahrer: ['', [Validators.required]],
      kmStand: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      datumKmStand: [undefined, [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  get f() {
    return this.form.controls;
  }

  public yearSelectedHandler(normalizedYear: _moment.Moment) {
    this.erstzulassungDatum = normalizedYear;
  }

  public monthSelectedHandler(normalizedMonth: _moment.Moment, datepicker: MatDatepicker<_moment.Moment>) {
    this.erstzulassungDatum = normalizedMonth;
    datepicker.close();
  }

  public save() {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  public cancel() {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
