import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    RouterModule,
    FormsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatNativeDateModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
    MatTooltipModule,
    FormsModule,
    MatDatepickerModule,
    ModalModule.forRoot(),
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSidenavModule,
    ModalModule,
    MatFormFieldModule 
  ],
  providers: []
})
export class SharedModule {  }
