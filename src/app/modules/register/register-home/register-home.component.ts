import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CountriesService } from 'src/app/services/countries.service';
import { MemberService } from 'src/app/services/member.service';

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

  constructor(private country:CountriesService,private member: MemberService) { }

  ngOnInit() {
    this.getCountries();
  }

  registerMember(body: any){
      this.loading = true
      this.memberregistrationform.reset()
      this.member.registerMember(body)
      .subscribe((res:any) =>
      {
        console.log("Registration successful")
      });
      this.loading = false
      this.registration_success = true
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
  }

  onChangeState(stateValue:number) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
  }
 
  registration_success = false
  loading = false

  memberregistrationform = new FormGroup(
    {
      membername: new FormControl('', [Validators.required]),
      memberemail: new FormControl('',[Validators.required, Validators.email]),
      memberpassword: new FormControl('', [Validators.required]),
      membersport: new FormControl('',[Validators.required]),
      memberdiscordlink: new FormControl('', [Validators.required]),
      membercountry: new FormControl(),
      memberstate: new FormControl(),
      membercity: new FormControl(),
      memberbio: new FormControl(),
      membermentor: new FormControl('',[Validators.required])
    }
  );
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  submit() {
    if(this.memberregistrationform.valid)
    {
      const form_details = this.memberregistrationform.value;
      //this.memberregistrationform.reset()
      let country = null
      let state = null
      let city = null
      try{
        country = this.countryInfo[form_details["membercountry"]]["CountryName"];
        state = this.stateInfo[form_details["memberstate"]]["StateName"];
        city = this.stateInfo[form_details["memberstate"]]["Cities"][form_details["membercity"]]
        console.log(form_details)
        let body = {
          "email": form_details["memberemail"],
          "password": form_details["memberpassword"],
          "mentor": form_details["membermentor"],
          "name": form_details["membername"],
          "sport": form_details["membersport"],
          "bio": form_details["memberbio"],
          "discordlink": form_details["memberdiscordlink"],
          "country": country,
          "state": state,
          "city": city
        }
        this.registerMember(body)
      }
      catch
      {
        console.log("entered catch")
      }
    }
    else
    {
      console.log("Invalid form")
    }
  }
}
