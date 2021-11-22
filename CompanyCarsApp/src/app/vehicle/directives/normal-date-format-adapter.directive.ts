import { Directive } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';


const MY_FORMATS = {
  parse: {
      dateInput: 'DD.MM.YYYY',
  },
  display: {
      dateInput: 'DD.MM.YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Directive({
  selector: '[normalDateFormatAdapter]',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },]
})
export class NormalDateFormatAdapterDirective {

  constructor() { }

}
