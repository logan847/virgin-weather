import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const latValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const latVAl = control.value >= -90 && control.value <= 90 ? true : false;
  console.log(latVAl)
  return latVAl ? null : {valid: true}
};
export const lonValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const lonVAl = control.value >= -180 && control.value <= 180 ? true : false;
  console.log(lonVAl)
  return lonVAl ? null : {valid: true}
};

