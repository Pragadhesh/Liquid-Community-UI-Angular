import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { SharedService } from 'src/app/services/shared.service';

interface AdminDetails {
  id: number,
  name: string,
  description: string
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

interface Sponsorship {
  name: number,
  description: string,
  admin_status: boolean,
  applied_status: boolean
}


@Component({
  selector: 'app-viewsponsorship',
  templateUrl: './viewsponsorship.component.html',
  styleUrls: ['./viewsponsorship.component.scss']
})
export class ViewsponsorshipComponent implements OnInit {

  togglebuttonvalue = "all"
  isLoading = false
  verification_status = false
  apply_success = false

  user: Member | undefined
  user_status = false

  constructor(private shared: SharedService, private member: MemberService) { }



  /*members = [
    {
        "name": " indian sponsorship",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": false,
        "applied_status": false
    },
    {
        "name": " indian sponsorship",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": false,
        "applied_status": false
    },
    {
        "name": " indian sponsorship new",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": false,
        "applied_status": false
    },
    {
        "name": " indian sponsorship new",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": false,
        "applied_status": false
    },
    {
        "name": "indian sponsorship new",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": true,
        "applied_status": false
    },
    {
        "name": "indian sponsorship new",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": true,
        "applied_status": false
    },
    {
        "name": "indian sponsorship new",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": true,
        "applied_status": false
    },
    {
        "name": "pragadhesh sponsorship",
        "description": "This sponsorship is for gamers who are living in Ukraine",
        "admin_status": false,
        "applied_status": true
    }
  ]*/


  members: Sponsorship[] = []
  member_details: Sponsorship[] = []



  ngOnInit(): void {
    this.user = this.shared.getUser()
    this.user_status = this.shared.getLoginStatus()
    this.member_details = this.members
    if (this.user_status)
    {
      this.member.getSponsorships(this.user?.email)
      .subscribe(
        Response => {
          let response_data = JSON.parse(JSON.stringify(Response));
          console.log(response_data)
          this.members = response_data
          this.setAll()
        },
        err => {
          console.log("error")
        }
      );
    }
  }

  setAll()
  {
    this.togglebuttonvalue = "all"
    this.verification_status = false
    this.member_details = this.members.filter(
      member => {
        return !member.applied_status
      }
    )
  }
  setApplied()
  {
    this.togglebuttonvalue = "applied"
    this.verification_status = true
    this.member_details = this.members.filter(
      member => {
        return member.applied_status
      }
    )

  }

  applySponsorship(name: any)
  {
    const scname = name
    const email = this.user?.email
    console.log(this.user?.email)
    this.isLoading = true
    this.apply_success = false
    this.member.applySponsorship(scname,email)
    .subscribe(
      Response => {
        this.apply_success = true
        let response_data14 = JSON.parse(JSON.stringify(Response));
      },
      err => {
        this.isLoading = false
      }
    );
    if(this.apply_success = true)
    {
      this.member.getSponsorships(this.user?.email)
      .subscribe(
        Response => {
          let response_data = JSON.parse(JSON.stringify(Response));
          console.log(response_data)
          this.members = response_data
          this.setAll()
          this.isLoading = false
        },
        err => {
          this.isLoading = false
        }
      );
    }
  }

  
  cancelSponsorship(name: any)
  {
    console.log(name)
  }
}
