import { Component } from '@angular/core';
import { BouttonComponent } from "../boutton/boutton.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [BouttonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
