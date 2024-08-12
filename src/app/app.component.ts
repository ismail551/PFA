import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BouttonComponent } from './boutton/boutton.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableviewComponent } from './tableview/tableview.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SearchComponent,FooterComponent, FormulaireComponent,BouttonComponent,SidebarComponent,TableviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
 
})
export class AppComponent {
  title = 'PFA';
}
