import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ServiceComponent } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user: User = {
    UserName: '',
    Password: '',
    Email: '',
    FirstName: '',
    LastName: ''
  };
  formR: FormGroup;
  public loginInvalid: boolean;
  private formRSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: ServiceComponent
  ) {
  }
  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  ngOnInit(): void {
    this.formR = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.resetformR();
  }

  resetformR(formR?: User) {
    if (formR != null) {
    //  formR.reset();
      this.user = {
        UserName: '',
        Password: '',
        Email: '',
        FirstName: '',
        LastName: '',
      };
    }
  }

  onSubmit() {
      if (this.formR.valid) {
      try {
        this.user.Email = this.formR.get('email').value;
        this.user.Password = this.formR.get('password').value;
        this.user.UserName = this.formR.get('username').value;
        this.user.FirstName = this.formR.get('firstname').value;
        this.user.LastName = this.formR.get('lastname').value;
        this.userService.registerUser(this.user).subscribe(
          (data: any) => {
          if(data.Succeeded === true){
            this.resetformR(this.user);
          }
        });
      //  await this.authService.login(username, password);
      } catch (err) {
        console.log(err);
        this.loginInvalid = true;
      }
    } else {
      this.formRSubmitAttempt = true;
    }
  }
  }

