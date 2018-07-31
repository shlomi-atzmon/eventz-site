import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { FoterComponent } from './components/foter/foter.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([])
  ],
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FoterComponent,
    HomeComponent
  ],
  providers:[
    
   
  ],
  exports:[
    HeaderComponent,
    FoterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
