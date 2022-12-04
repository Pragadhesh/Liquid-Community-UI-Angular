import { Component, OnInit } from '@angular/core';
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
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {


  isLoading = false

  user: Member | undefined
  applicants: Member[] = []
  user_status = false
  sponsorship_name: any
  applicants_view_status = false

  members: Sponsorship[] = []
  member_details: Sponsorship[] = []

  constructor(private shared: SharedService, private member: MemberService) { }

  ngOnInit(): void {
    this.user = this.shared.getUser()
    this.user_status = this.shared.getLoginStatus()
    if (this.user_status)
    {
      this.member.getSponsorships(this.user?.email)
      .subscribe(
        Response => {
          let response_data = JSON.parse(JSON.stringify(Response));
          this.members = response_data
          this.member_details = this.members.filter(
            member1 => {
              console.log(member1)
              return member1.admin_status
            }
          )
        },
        err => {
          console.log("error")
        }
      );
    }
  }

  viewSponsorshipApplicants(name: any)
  {
      this.isLoading = true
      this.sponsorship_name = name
      this.member.getApplicants(name)
      .subscribe(
        Response => {
          let response_data = JSON.parse(JSON.stringify(Response));
          this.applicants = response_data
          this.applicants_view_status = true
          this.isLoading = false
        },
        err => {
          console.log("error")
          this.isLoading = false
        }
      );
  }

  viewSponsorshipDetails()
  {
    this.applicants_view_status = false
  }

}
