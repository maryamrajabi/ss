import {AbstractControl, ValidationErrors} from '@angular/forms';

export interface ProtectionSettingsModel {
}


export interface FormConfigModel {
  name: string,
  fields: Array<{
    name: string;
    label: string;
    type: string;
    value: string;
    validators?: (string | ((control: AbstractControl) => ValidationErrors | null))[]; // Allow both strings and functions
    options?: Array<{
      value: string;
      label: string;
    }>;
  }>;
}
