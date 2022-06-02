import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbulderComponent } from './formbulder.component';

describe('FormbulderComponent', () => {
  let component: FormbulderComponent;
  let fixture: ComponentFixture<FormbulderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbulderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbulderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
