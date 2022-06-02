import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuildfieldComponent } from './formbuildfield.component';

describe('FormbuildfieldComponent', () => {
  let component: FormbuildfieldComponent;
  let fixture: ComponentFixture<FormbuildfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuildfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuildfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
