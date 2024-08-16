import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ProjetComponent } from './projet/projet.component';
import { UpdateComponent } from './update/update.component';
import{ADDuserComponent } from './adduser/adduser.component';
import{EDITuserComponent} from './edituser/edituser.component'

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'ajout', component: AjoutComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projet', component: ProjetComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'ADDuser', component: ADDuserComponent },
    { path: 'EDITuser', component: EDITuserComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }


];