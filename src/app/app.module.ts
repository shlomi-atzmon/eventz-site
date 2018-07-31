import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { MyInterceptor } from './core/helpers/token.interceptor';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { fakeBackendProvider } from './core/helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';



const appRoutes:Routes = [
   {
    path:'',
    redirectTo: '/events',
    pathMatch: 'full',
   
  },
  {
    path:'not-fount',
    component:NotFoundComponent,
  }
];

@NgModule({
  
  imports: [
    CoreModule,
    SharedModule,
    EventsModule,
    UsersModule,

    RouterModule.forRoot(appRoutes),
    
  ],

  declarations: [
    
    AppComponent, 
   
    
  ],


  providers: [    
    AuthGuard, 
     // For creating a mock back-end. You don't need these in a real app. 
   //  fakeBackendProvider,
     //MockBackend,
    //BaseRequestOptions,
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
