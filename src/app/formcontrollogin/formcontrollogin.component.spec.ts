import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontrolloginComponent } from './formcontrollogin.component';

describe('FormcontrolloginComponent', () => {
  let component: FormcontrolloginComponent;
  let fixture: ComponentFixture<FormcontrolloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcontrolloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontrolloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
