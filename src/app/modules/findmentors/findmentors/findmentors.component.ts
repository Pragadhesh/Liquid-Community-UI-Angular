import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { MemberService } from 'src/app/services/member.service';

interface Member {
  id: number;
  email: string;
  name: string;
  sport: string;
  bio: string;
  mentor: boolean;
  discordlink: string;
  country: string;
  city: string;
  state: string;
}

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
  search = false
  memberspresent = false
  members: Member[] = []

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
    this.search = true
    this.member.getMentors(sport, country, state, city).subscribe(
      Response => {
        this.loading = true
        let response_data = JSON.parse(JSON.stringify(Response));
        this.members = response_data;
        if (this.members.length > 0)
        {
          this.memberspresent = true
        }
        else
        {
          this.memberspresent = false
        }
        this.loading = false
      },
      err => console.log(err)
    )
  }

  onChangeCountry(countryValue:number) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
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

  async submit() {
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
      this.getMentors(sport, country, state, city)
    }
    else
    {
      console.log("Invalid form")
    }
  }

}
