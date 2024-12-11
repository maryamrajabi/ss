import {AbstractControl, ValidationErrors} from '@angular/forms';

export interface FormConfigModel {
  name: string,
  fields: Array<{
    name: string;
    label?: string;
    placeholder?: string;
    hint?: string;
    type: string;
    value?: string;
    validators?: (string | ((control: AbstractControl) => ValidationErrors | null))[]; // Allow both strings and functions
    options?: Array<{
      value?: any;
      name: string;
      code?: any;
    }>;
  }>;
}
