import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: 'app/users/profile.component.html',
})
export class ProfileComponent {
  
  constructor(private router: Router,
    private auth: AuthService) {
  }
  
  saveProfile(formValues) {
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
  }
  
  cancel() {
    this.router.navigate(['Events']);
  }
   
}