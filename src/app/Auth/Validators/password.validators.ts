import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidators{
    static passwordErrorValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
        let password = control.get('password');
        let confirmPassword = control.get('confirmPassword');

        console.log(password);
        
        
        return password.value != confirmPassword.value ? { 'passwordError': true } : null;
    };
}