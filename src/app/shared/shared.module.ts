import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatChipsModule, MatNativeDateModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BackBtnComponent } from 'shared/components/back-btn/back-btn.component';

import { RoutingState } from '../core/helpers/RoutingState';

const sharedRoutes:Routes = []
  

@NgModule({
  imports: [
    CommonModule,

    MatListModule,
    MatSidenavModule,
    MatBadgeModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSortModule,

    FormsModule,
    
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forChild(sharedRoutes),
  ],
  declarations: [

    BackBtnComponent,


  ],
  exports:[
    MatListModule,
    MatSidenavModule,
    MatBadgeModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSortModule,
    FormsModule,
    BrowserModule,
    BackBtnComponent
  ],
  providers:[
    RoutingState,
   
  ]
})
export class SharedModule { }
