import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListcomponementComponent } from './user-listcomponement.component';

describe('UserListcomponementComponent', () => {
  let component: UserListcomponementComponent;
  let fixture: ComponentFixture<UserListcomponementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListcomponementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListcomponementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
