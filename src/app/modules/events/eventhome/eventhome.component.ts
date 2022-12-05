import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

interface EventDetails {
  id: number,
  name: string,
  time: string,
  description: string
}


@Component({
  selector: 'app-eventhome',
  templateUrl: './eventhome.component.html',
  styleUrls: ['./eventhome.component.scss']
})
export class EventhomeComponent implements OnInit {

  events: EventDetails[] = []

  constructor(private member: MemberService) { }

  ngOnInit(): void {
    this.member.viewEvents()
    .subscribe(
      Response => {
        let response_data = JSON.parse(JSON.stringify(Response));
        this.events = response_data
      },
      err => {
        console.log("error")
      }
    );
  }

}
