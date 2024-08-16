import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BouttonComponent } from './boutton/boutton.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableviewComponent } from './tableview/tableview.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ADDuserComponent } from './adduser/adduser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,HeaderComponent,SearchComponent,FooterComponent, FormulaireComponent,BouttonComponent,SidebarComponent,ContactComponent,AboutComponent,TableviewComponent,AjoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
 
})


export class AppComponent {
  title = 'PFA';

  classtoapply = "active";
}
