import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}