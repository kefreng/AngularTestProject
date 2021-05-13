import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login should response ok', () => {
    component.loginForm = formBuilder.group({
      user: 'admin',
      pass: 'admin'
    });
    // fixture.nativeElement.querySelector("button").click();
    

    expect(component.loginUser()).toEqual("OK");
  });

  it('login should response fail', () => {
    component.loginForm = formBuilder.group({
      user: 'admin',
      pass: 'adminn'
    });
    // fixture.nativeElement.querySelector("button").click();
    

    expect(component.loginUser()).toEqual("FAIL");
  });
});
