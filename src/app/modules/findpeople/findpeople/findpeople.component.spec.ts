import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpeopleComponent } from './findpeople.component';

describe('FindpeopleComponent', () => {
  let component: FindpeopleComponent;
  let fixture: ComponentFixture<FindpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindpeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
