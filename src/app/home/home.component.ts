import { Component } from '@angular/core';
import { BouttonComponent } from '../boutton/boutton.component';
import { TableviewComponent } from '../tableview/tableview.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BouttonComponent,TableviewComponent,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
