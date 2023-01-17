import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheUserComponent } from './recherche-user.component';

describe('RechercheUserComponent', () => {
  let component: RechercheUserComponent;
  let fixture: ComponentFixture<RechercheUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
