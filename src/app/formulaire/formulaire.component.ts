import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule], // Ajoutez ReactiveFormsModule ici
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  formulaireForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulaireForm = this.fb.group({
      floating_email: ['', [Validators.required, Validators.email]],
      floating_password: ['', [Validators.required, Validators.minLength(6)]],
      floating_repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
      floating_nom: ['', Validators.required],
      floating_prenom: ['', Validators.required],
      floating_phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floating_company: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.formulaireForm.valid) {
      alert('Form Submitted!');
    } else {
      alert('Form not valid');
    }
  }
}
  

  

