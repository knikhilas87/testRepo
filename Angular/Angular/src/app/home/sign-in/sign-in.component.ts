import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ServiceComponent } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers:[ServiceComponent]
})
export class SignInComponent implements OnInit {

//   constructor(private router: Router,
//     private userService: ServiceComponent) { }

// username: string;
// password: string;
// showSpinner: boolean;
// isLoginError: boolean = false;
//   ngOnInit() {
//   }

//   login(username, password) : void {
//     this.showSpinner = true;
//     // if(this.username === 'admin' && this.password === 'admin'){
//     //  this.router.navigate(['user']);
//     //  this.showSpinner = false;
//     // }else {
//     //   alert('Invalid credentials');
//     // }
//     this.userService.userAuthentication(username,password)
//     .subscribe((data: any)=>{
//         localStorage.setItem('userToken', data.access_token);
//         this.router.navigate(['home']);
//       },
//       (err: HttpErrorResponse)=>{
//         this.isLoginError =true;
//       });
//   }
form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: ServiceComponent
  ) {
  }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/user';

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // if (await this.authService.checkAuthenticated()) {
    //   await this.router.navigate([this.returnUrl]);
    // }
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
          if(username && password){
         // tslint:disable-next-line:no-shadowed-variable
         this.userService.userAuthentication(username,password).subscribe((data : any)=> {
         localStorage.setItem('userToken', data.access_token);
          this.router.navigate(['applicationform']);

         },(err : HttpErrorResponse) => {
           this.loginInvalid=true;
         }
         );
    }else {
      alert('Invalid credentials');
    }
      //  await this.authService.login(username, password);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
