import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { routes } from '../../app.routes';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-registerregister',
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './registerregister.component.html',
  styleUrl: './registerregister.component.css',
})
export class RegisterregisterComponent {

  msgError:string = "";
  laoding:WritableSignal<boolean> = signal(false)
  // laoding:boolean = false

    private readonly authService = inject(AuthService)
test: FormGroup = new FormGroup({
  name: new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(10),
    Validators.pattern(/^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/)
  ]),

  username: new FormControl('', [
    Validators.minLength(4),
    Validators.maxLength(10),
    Validators.pattern(/^[a-z0-9_]{3,15}$/)
  ]),

  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),

  dateOfBirth: new FormControl('', [
    Validators.required
  ]),

  gender: new FormControl('', [
    Validators.required,
    Validators.pattern(/^(male|female)$/)
  ]),

  password: new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ]),

  rePassword: new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ])
},{validators:this.confirmPass});
// {updateOn:'submit'}

confirmPass(x:AbstractControl){
  return x.get('password')?.value === x.get('rePassword')?.value ?null :{missmatch:true}
}

private readonly router = inject(Router);
  form(){
    if(this.test.valid){
      this.laoding.set(true);

      console.log(this.test.value);
       this.authService.signUp(this.test.value).subscribe({
        next:(res)=>{
          console.log(res);
          // this.laoding = false;
          this.laoding.set(false);

          this.router.navigate(['/login'])
        },

        error:(err)=>{
          this.laoding.set(true)
          console.log(err.error);
          this.msgError = err.error.message
        },

        // complete:()=>{
        //   this.laoding = false;
        // }
      })
    }
    else{
      this.test.markAllAsTouched()
    }
  }
}
