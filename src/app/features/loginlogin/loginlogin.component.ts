import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-loginlogin',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './loginlogin.component.html',
  styleUrl: './loginlogin.component.css',
})
export class LoginloginComponent {

  private readonly loginF = inject(AuthService)

  msgError: string = "";

  loading: WritableSignal<boolean> = signal(false);

  login: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.email,
      Validators.required
    ]),

    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),
  })

  private readonly router = inject(Router)

  loginForm() {
    if (this.login.valid) {
      console.log(this.login.value);

      this.loading.set(true)

      this.loginF.signIn(this.login.value).subscribe({
        next: (res) => {

          console.log(res);

          localStorage.setItem("socialToken",res.data.token);
          localStorage.setItem("socialUser",JSON.stringify(res.data.user));

          this.loading.set(false);
          this.router.navigate(['/feeds']);


        },
        error: (err) => {
          console.log(err.error);

          this.loading.set(false);

          this.msgError = err.error.message
        }
      })

    }
    else {
      this.login.markAllAsTouched

    }
  }

  showPass(pass:any){
    if (pass.type === "password") {
      pass.type = "text"
    }
    else{
      pass.type = "password"
    }
  }

}
