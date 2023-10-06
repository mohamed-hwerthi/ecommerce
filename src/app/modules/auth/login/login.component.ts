import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  darkMode: boolean = true;
  changeMode() {
    console.log('skdjfksjdkfjks');

    this.darkMode = !this.darkMode;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(8),
        ],
      ],
    });
  }

  onSubmit() {
    return this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem('ecommerceClient', JSON.stringify(res));
        this.router.navigate(['/Dashboard']);
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
