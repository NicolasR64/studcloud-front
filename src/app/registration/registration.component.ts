import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
  phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  nameRegex = /^[a-zA-Z ]{3,30}$/;
  firstnameRegex = /^[a-zA-Z ]{3,20}$/;
  nicknameRegex = /^[A-Za-z0-9]{3,15}$/;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      id: [null],
      Name: ['',[Validators.required, Validators.maxLength(30), Validators.minLength(3), Validators.pattern(this.nameRegex)]],
      Firstname: ['',[ Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.pattern(this.firstnameRegex)]],
      Nickname: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(3), Validators.pattern(this.nicknameRegex)]],
      Password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8), Validators.pattern(this.passwordRegex)]],
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

  getErrorPassword(){
    if(this.registrationForm.get('Password')?.hasError("pattern")){
      return 'Minimum 8 caract??re avec une minuscule, une majuscule, un chiffre et unvisual sp??cial';
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

  getErrorPhone() {
    if (this.registrationForm.get('Phone')?.hasError('pattern')) {
      return 'Num??ro non valide';
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
