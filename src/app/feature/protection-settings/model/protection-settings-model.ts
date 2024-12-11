import {AbstractControl, ValidationErrors} from '@angular/forms';

export interface ProtectionSettingsModel {

}

export interface AddressModel {
  id: number;
  addressName: String;
  ipAddress: String;
  policyName: String;
  policyStatus: String;
  operatingMode: String;
}
