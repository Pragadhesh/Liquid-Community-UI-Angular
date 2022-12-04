import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';

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

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user: Member | undefined
  user_status = false
  name = 'liquid-community'

  ngOnInit(): void {
    this.user = this.shared.getUser()
    this.user_status = this.shared.getLoginStatus()
  }

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<LoginModalComponent, any> | undefined;

  constructor(public matDialog: MatDialog, private shared: SharedService) {}


  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          this.user = this.shared.getUser()
          this.user_status = this.shared.getLoginStatus()
          this.name = this.shared.getName()!
          if(args.target.tagName === 'BODY') {
              this.modalDialog?.close()
          }
      }
  }

  
  openLoginModal() {
    this.dialogConfig.id = "projects-modal-component";
    this.dialogConfig.height = "350px";
    this.dialogConfig.width = "550px";
    this.modalDialog = this.matDialog.open(LoginModalComponent, this.dialogConfig);
  }

}
