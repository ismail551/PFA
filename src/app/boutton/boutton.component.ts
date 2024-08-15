import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutton',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './boutton.component.html',
  styleUrl: './boutton.component.css'
})
export class BouttonComponent {

  constructor(private router: Router) { }


  btnClick=  () => {
    this.router.navigateByUrl('/user');
};


}

