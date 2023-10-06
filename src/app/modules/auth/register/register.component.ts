import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  RegisterForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.RegisterForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      address: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9s]+-[a-zA-Zs]+-[a-zA-Zs]+$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(8),
          this.passwordStrengthValidator(),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value;
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
      const numberRegex = /[0-9]/;
      const hasUppercase = uppercaseRegex.test(value);
      const hasLowercase = lowercaseRegex.test(value);
      const hasSymbol = symbolRegex.test(value);
      const hasNumber = numberRegex.test(value);
      const isValid = hasUppercase && hasLowercase && hasSymbol && hasNumber;
      return isValid ? null : { passwordStrength: true };
    };
  }
  handelConfirmedPassword = false;

  ValidateConfirmedPassword() {
    this.handelConfirmedPassword =
      this.RegisterForm.get('confirmPassword')?.value !==
      this.RegisterForm.get('password')?.value
        ? true
        : false;
  }

  submit() {
    this.authService.register(this.RegisterForm.value).subscribe(
      (res) => {
        alert(
          'your account has been created successfully . please Sign in to your account  '
        );
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
