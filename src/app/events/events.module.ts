import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { EventFormComponent } from './components/event-form/event-form.component';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { ActiveStatusComponent } from './components/parts/active-status/active-status.component';
import { EventCardComponent } from './components/parts/event-card/event-card.component';
import { FoodComponent } from './components/parts/food/food.component';
import { EditFriendComponent } from './components/parts/friends/edit-friend/edit-friends.component';
import { FriendRolesComponent } from './components/parts/friends/friend-roles/friend-roles.component';
import { FriendsComponent } from './components/parts/friends/friends.component';
import { NewFriendComponent } from './components/parts/friends/new-friend/new-friend.component';
import { GamesComponent } from './components/parts/games/games.component';
import { NewEventBtnComponent } from './components/parts/new-event-btn/new-event-btn.component';
import { EditSupplyComponent } from './components/parts/supplys/edit-supply/edit-supply.component';
import { NewSuppliyComponent } from './components/parts/supplys/new-suppliy/new-suppliy.component';
import { SupplysComponent } from './components/parts/supplys/supplys.component';
import { EventsService } from './services/events.service';
import { EventSettingComponent } from './components/parts/event-setting/event-setting.component';
import { ImageUploaderModule } from 'ngx-image-uploader';



const eventRoutes:Routes = [
 
  {
    path:'events',
    component:EventsComponent,
    
  },
  {
    path:'event',
    children:[
      {
        path:'create',
        component:EventFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'edit/:event_id',
        component:EventFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path:':event_id',
        component:EventComponent,
        canActivate: [AuthGuard]
      },
    ]
  },  
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ImageUploaderModule,

    RouterModule.forChild(eventRoutes),
  ],
  declarations: [
    EditFriendComponent,
    GamesComponent,
    FriendsComponent,
    NewFriendComponent,
    FoodComponent,
    EventComponent,
    EventFormComponent,
    EventsComponent,
    EventCardComponent,
    ActiveStatusComponent,
    FriendRolesComponent,
    SupplysComponent,
    NewSuppliyComponent,
    EditSupplyComponent,
    NewEventBtnComponent,
    EventSettingComponent,
  ],
  entryComponents: [EditFriendComponent,EditSupplyComponent],

  providers: [
  
    EventsService,
    
  ]
})
export class EventsModule { }
