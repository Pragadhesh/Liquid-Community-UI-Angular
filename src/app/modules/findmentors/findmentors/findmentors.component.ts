import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-findmentors',
  templateUrl: './findmentors.component.html',
  styleUrls: ['./findmentors.component.scss']
})
export class FindmentorsComponent implements OnInit {

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  loading = false
  search = true
  memberspresent = true
  members: any;

  constructor(private country:CountriesService,
    private member: MemberService
    ) { }

  ngOnInit() {
    this.loading = true;
    this.getCountries();
    this.loading = false;
  }

  getCountries(){
    this.country.allCountries().subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  getMentors(sport:any,country:any,state:any,city:any) {
    this.member.getMentors(sport,country,state,city).subscribe(
      data =>{
        this.members = data
      },
      err => console.log(err),
    )
  }

  onChangeCountry(countryValue:number) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.stateInfo);
  }

  onChangeState(stateValue:number) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
  }

  membersearchform = new FormGroup(
    {
      membersport: new FormControl('',[Validators.required]),
      membercountry: new FormControl(),
      memberstate: new FormControl(),
      membercity: new FormControl(),
    }
  );

  submit() {
    if(this.membersearchform.valid)
    {
      const form_details = this.membersearchform.value;
      let sport = form_details["membersport"];
      let country = null
      let state = null
      let city = null
      try{
      country = this.countryInfo[form_details["membercountry"]]["CountryName"];
      state = this.stateInfo[form_details["memberstate"]]["StateName"];
      city = this.stateInfo[form_details["memberstate"]]["Cities"][form_details["membercity"]]
      }
      catch
      {
        console.log("entered catch")
      }
      this.getMentors(sport,country,state,city)
    }
    else
    {
      console.log("Invalid form")
    }
  }

}
