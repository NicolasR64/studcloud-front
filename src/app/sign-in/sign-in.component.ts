import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  nameRegex = /^[a-zA-Z ]{3,30}$/;
  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(this.nameRegex)]],
      Password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8)]]
    })
  }
   
  getErrorName(){
    if(this.signInForm.get('Name')?.hasError("pattern")){
      return 'Nom non valide';
    }else if(this.signInForm.get('Name')?.hasError("required")){
      return 'champ requis';
    }
    return '';
  }

  getErrorPassword(){
    if(this.signInForm.get('password')?.hasError("pattern")){
      return 'mot de passe non valide';
    }else if(this.signInForm.get('Name')?.hasError("required")){
      return 'champ requis';
    }
    return '';
  }

  onSubmit(){
    this.connectionService.CheckUserLogIn(this.signInForm.value.password, this.signInForm.value.name);
    // use for demonstration cause back-end doesn't work
    this.connectionService.isLoggedIn = true;
    this.router.navigateByUrl('/home');
  }

}
