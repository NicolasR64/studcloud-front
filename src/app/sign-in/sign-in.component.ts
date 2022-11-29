import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      Nickname: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(this.nameRegex)]],
      Password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8)]]
    })
  }

  onSubmit(){
    console.log(this.signInForm.value);
    // this.userService.postUser(this.registrationForm.value);
    /* this.router.navigateByUrl('/Home'); */
  }

}
