import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesponsorshipComponent } from './createsponsorship.component';

describe('CreatesponsorshipComponent', () => {
  let component: CreatesponsorshipComponent;
  let fixture: ComponentFixture<CreatesponsorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesponsorshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatesponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
