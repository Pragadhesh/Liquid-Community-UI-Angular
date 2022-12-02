import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  ngOnInit(): void {
  }

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<LoginModalComponent, any> | undefined;
  constructor(public matDialog: MatDialog) { }
  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
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
