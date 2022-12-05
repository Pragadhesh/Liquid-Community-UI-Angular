import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { SharedService } from 'src/app/services/shared.service';

interface AdminDetails {
  id: number,
  name: string,
  description: string
}

interface Sponsorship {
  name: number,
  description: string,
  admin_status: boolean,
  applied_status: boolean
}

interface Member{
  id: number,
  email: string,
  password: string,
  name: string,
  sport: string,
  bio: string,
  discordlink: string,
  country: string,
  state: string,
  city: string,
  mentor: boolean,
  admin: [AdminDetails]
}

@Component({
  selector: 'app-createsponsorship',
  templateUrl: './createsponsorship.component.html',
  styleUrls: ['./createsponsorship.component.scss']
})
export class CreatesponsorshipComponent implements OnInit {

  isLoading = false

  user: Member | undefined
  user_status = false
  creation_success = false

  members: Sponsorship[] = []
  member_details: Sponsorship[] = []

  constructor(private shared: SharedService, private member: MemberService) { }

  ngOnInit(): void {
    this.user = this.shared.getUser()
    this.user_status = this.shared.getLoginStatus()
  }

  sponsorshipregistrationform = new FormGroup(
    {
      sponsorshipname: new FormControl('', [Validators.required]),
      sponsorshipdescription: new FormControl('', [Validators.required]),
    }
  );

  submit() {
    if(this.sponsorshipregistrationform.valid)
    {
      const form_details = this.sponsorshipregistrationform.value;
      try {
        let body = {
          "name": form_details["sponsorshipname"],
          "description": form_details["sponsorshipdescription"]
        }
        let email = this.user?.email
        this.member.createSponsorship(body,email)
        .subscribe(
          Response => {
            this.creation_success = true
          },
          err => {
            console.log("error")
          }
        );
      }
      catch(err)
      {
        console.log(err)
      }

    }
    else
    {
      console.log("Form is Invalid")
    }
  }
}
