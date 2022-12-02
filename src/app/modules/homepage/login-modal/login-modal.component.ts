import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginform = new FormGroup(
    {
      memberemail: new FormControl('',[Validators.required, Validators.email]),
      memberpassword: new FormControl('',[Validators.required])
    }
  );

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  loginSubmit() {
    if(this.loginform.valid)
    {
      console.log("Valid Form")
    }
    else
    {
      console.log("Invalid form")
    }
  }

}
