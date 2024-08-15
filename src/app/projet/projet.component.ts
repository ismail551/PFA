import { Component } from '@angular/core';
import { BouttonComponent } from '../boutton/boutton.component';
import { TableviewComponent } from '../tableview/tableview.component';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [BouttonComponent,TableviewComponent,SearchComponent],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {

}
