import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { Router, RouterConfigOptions } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true; 
  maxDate = new Date();
  minDate = new Date("1940-01-01");

  registrationForm!: FormGroup;
  confirmationPasswordCtrl!: FormControl;
  phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      id: [null],
      Name: ['',[Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(this.nameRegex)]],
      Firstname: ['',[ Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(this.nameRegex)]],
      Nickname: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(this.nameRegex)]],
      Password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8)]],
      ConfirmationPassword: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8)]],
      Email: ['', Validators.email],
      Phone: ['', Validators.pattern(this.phoneRegex)],
      Birthday: ['', Validators.required],
      Portefolios: [null],
      Topics: [null],
      Comments: [null],
      PrivateGroups: [null],
      PrivateMessages: [null],
    },
    {
      validator: this.CheckConfirmationPassword('Password', 'ConfirmationPassword'),
    });
  }
 
  getErrorName(){
    if(this.registrationForm.get('LastName')?.hasError("pattern")){
      return 'Non valide';
    }
    return '';
  }

  getErrorBirthday(){
    if(this.registrationForm.get('Birthday')?.hasError("")){
      return 'Date non valide';
    }
    return '';
  }

  getErrorConfirmationPassword(){
    if(this.registrationForm.getError('CheckConfirmationPassword')!=null){
      return 'Les mots de passses en correspondent pas';
    }
    return '';
  }

  getErrorEmail() {
    if (this.registrationForm.get('Email')?.hasError('email')) {
      return 'Email non valide';
    }else if(this.registrationForm.get('Email')?.hasError('required')){
      return 'Obligatoire';
    }
    return'';
  }

  CheckConfirmationPassword(controlName: string, matchingControlName: string) {
    console.log("triggred");
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userService.postUser(this.registrationForm.value);
    this.router.navigateByUrl('/signIn');
  };

}
