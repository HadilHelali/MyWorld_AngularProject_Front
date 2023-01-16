import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfilecomponementComponent } from './admin-profilecomponement.component';

describe('AdminProfilecomponementComponent', () => {
  let component: AdminProfilecomponementComponent;
  let fixture: ComponentFixture<AdminProfilecomponementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfilecomponementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfilecomponementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
