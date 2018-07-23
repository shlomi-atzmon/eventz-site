import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Router } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';



// matarials
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatChipsModule, MatButtonModule } from  '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// partials
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FoterComponent } from './components/foter/foter.component';



// pages
import { UserComponent } from './components/pages/user/user.component';
import { LoginComponent } from './components/pages/login/login.component';
import { UsersComponent } from './components/pages/users/users.component';
import { GamesComponent } from './components/partials/games/games.component';

import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventComponent } from './components/pages/event/event.component';
import { EventFormComponent } from './components/pages/event-form/event-form.component';

import { EventCardComponent } from './components/partials/event-card/event-card.component';

import { EditFriendComponent } from './components/partials/friends/edit-friend/edit-friends.component';
import { FriendsComponent } from './components/partials/friends/friends.component';
import { FriendRolesComponent } from './components/partials/friends/friend-roles/friend-roles.component';
import { NewFriendComponent } from './components/partials/friends/new-friend/new-friend.component';

import { SupplysComponent } from './components/partials/supplys/supplys.component';
import { FoodComponent } from './components/partials/food/food.component';
import { ActiveStatusComponent } from './components/partials/active-status/active-status.component';
import { NewSuppliyComponent } from './components/partials/supplys/new-suppliy/new-suppliy.component';
import { EditSupplyComponent } from './components/partials/supplys/edit-supply/edit-supply.component';


// services
import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { AuthGuard } from './services/auth-guard.service';
import { EditUserComponent } from './components/pages/user/edit-user/edit-user.component';







const appRoutes:Routes = [

 
  {
    path:'events',
    component:HomeComponent,
    
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

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  
  {
    path:'users',
    component:UsersComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path:'user/:id',
    component:UserComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'',
    redirectTo: '/events',
    pathMatch: 'full',
   
  },
  {
    path:'**',
    component:NotFoundComponent,
  }
  
];
@NgModule({
  declarations: [
    EditFriendComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FoterComponent,
    UsersComponent,
    UserComponent,
    GamesComponent,
    FriendsComponent,
    NewFriendComponent,
    FoodComponent,
    EventsComponent,
    EventComponent,
    EventCardComponent,
    EventFormComponent,
    ActiveStatusComponent,
    FriendRolesComponent,
    SupplysComponent,
    NewSuppliyComponent,
    EditSupplyComponent,
    EditUserComponent,
    
  ],
  entryComponents: [EditFriendComponent,EditSupplyComponent],

  imports: [
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
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    MatSortModule,
    HttpModule

  ],
  providers: [
    EventsService,
    EventsService,
    AuthService,
    AuthGuard,
    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
