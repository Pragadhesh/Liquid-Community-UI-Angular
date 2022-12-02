import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CountriesService } from 'src/app/services/countries.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.scss']
})
export class RegisterHomeComponent implements OnInit {

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  constructor(private country:CountriesService) { }

  ngOnInit() {
    this.getCountries();
  }


  getCountries(){
    this.country.allCountries().subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue:number) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.stateInfo);
  }

  onChangeState(stateValue:number) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
 
  registration_success = false

  studentadmissionform = new FormGroup(
    {
      membername: new FormControl('', [Validators.required]),
      memberemail: new FormControl('',[Validators.required, Validators.email]),
      memberpassword: new FormControl('', [Validators.required]),
      membersport: new FormControl('',[Validators.required]),
      memberdiscordlink: new FormControl('', [Validators.required]),
      membercountry: new FormControl('',[Validators.required]),
      memberstate: new FormControl('',[Validators.required]),
      membercity: new FormControl('',[Validators.required]),
      memberbio: new FormControl('',[Validators.required]),
      membermentor: new FormControl('',[Validators.required])
    }
  );
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  submit() {
    if(this.studentadmissionform.valid)
    {
      console.log("Valid Form")
    }
    else
    {
      console.log("Invalid form")
    }
  }
}
