import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const password: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control) {
        const input = control.value as string
        if (input.length >= 5 && input.length <= 10)
            return null
        else
            return { password: 'length should be between 5 and 10' }
    } else
        return null
}