import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsponsorshipComponent } from './viewsponsorship.component';

describe('ViewsponsorshipComponent', () => {
  let component: ViewsponsorshipComponent;
  let fixture: ComponentFixture<ViewsponsorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsponsorshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
