import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordcomponementComponent } from './dashbordcomponement.component';

describe('DashbordcomponementComponent', () => {
  let component: DashbordcomponementComponent;
  let fixture: ComponentFixture<DashbordcomponementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordcomponementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordcomponementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
