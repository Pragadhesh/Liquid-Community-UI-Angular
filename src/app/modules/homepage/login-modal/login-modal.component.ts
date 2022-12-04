import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MemberService } from 'src/app/services/member.service';
import { SharedService } from 'src/app/services/shared.service';


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

  loading = false
  loginsuccess = false
  search = false
  message: any
  constructor(private member: MemberService,private shared: SharedService) { }

  ngOnInit(): void {
  }

  loginUser(email:any,password:any)
  {
    this.member.loginMember(email,password)
    .subscribe(
      Response => {
        this.search = true
        let response_data = JSON.parse(JSON.stringify(Response));
        this.shared.setUser(response_data)
        this.shared.login_status
        const user = this.shared.getUser()
        const sp = this.shared.getLoginStatus()
        this.loginsuccess = true
      },
      err => {
        this.search = true
        this.loginsuccess = false
        let response_data = JSON.parse(JSON.stringify(err));
        this.message = response_data["error"]
      }
    );
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
      const form_details = this.loginform.value;
      this.loading = true
      let email = form_details["memberemail"]
      let password = form_details["memberpassword"]
      this.loginUser(email,password)
      this.loading = false
    }
    else
    {
      console.log("Invalid form")
    }
  }

}
