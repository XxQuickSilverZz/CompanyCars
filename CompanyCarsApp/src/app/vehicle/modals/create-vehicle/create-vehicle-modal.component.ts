import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle-modal.component.html',
  styleUrls: ['./create-vehicle-modal.component.scss']
})
export class CreateVehicleModalComponent implements OnInit {
  public onClose: Subject<boolean> = new Subject();
  public form: FormGroup;

  constructor(
    private bsModalRef: BsModalRef,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      kfzKennzeichen: ['M-E-12', [Validators.required]],
      marke: ['Toyota', [Validators.required]],
      modell: ['Ayo', [Validators.required]],
      erstzulassung: ['12/2019', [Validators.required]],
      nameFahrzeugfahrer: ['Devid Pavi', [Validators.required]],
      kmStand: ['800000', [Validators.required, Validators.pattern("^[0-9]*$")]],
      datumKmStand: [new Date(), [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  get f() {
    return this.form.controls;
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
