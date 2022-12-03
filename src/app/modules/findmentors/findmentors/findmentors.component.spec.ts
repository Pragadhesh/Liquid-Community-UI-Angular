import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmentorsComponent } from './findmentors.component';

describe('FindmentorsComponent', () => {
  let component: FindmentorsComponent;
  let fixture: ComponentFixture<FindmentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindmentorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindmentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
