import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  public invalid;
  resetPasword(credentials){

    let response = this.authService.resetPassword(credentials)
    
    console.log(response)
    /*.subscribe(result => { 
        
        if (result){
    
          this.router.navigate(['/']);
        }
         
        else  
          this.invalid = true; 
      });*/
  }

}
