import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;

  registrationForm = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(8)])
  });

  constructor() { }

  ngOnInit(): void {}

  getErrorMessage(){
    if(this.registrationForm.get('nickname')?.hasError("required")){
      return 'Ce champ est obligatoire!';
    }
    if(this.registrationForm.get('nickname')?.hasError('minLength') || this.registrationForm.get('nickname')?.hasError('maxLength')){
      return 'Votre nom doit être d\' une longueur comprise entre 2 et 50 caractères';
    }
    return 'Erreur inattendue';
  }

  onSubmit(){

  };

}
