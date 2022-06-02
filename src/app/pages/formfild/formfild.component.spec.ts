import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfildComponent } from './formfild.component';

describe('FormfildComponent', () => {
  let component: FormfildComponent;
  let fixture: ComponentFixture<FormfildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
