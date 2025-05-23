import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [MatCardModule,MatSidenavModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  
  constructor(
    private router: Router){
  }
  openUploadPage(){
    this.router.navigate(['/upload']);
  }
}
