import { AuthService } from '../../../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    public authService: AuthService

  ) { }

  register(credentials) {
    console.log(credentials)
    this.authService.register(credentials)
      .subscribe(user_id => { 
        console.log(user_id)
        if (user_id){
          
          this.router.navigate(['/user/'+user_id]);
        }
         
        else  
          this.invalidLogin = true; 
      });
  }
}
