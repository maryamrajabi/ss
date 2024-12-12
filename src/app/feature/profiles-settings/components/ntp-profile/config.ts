import {Validators} from '@angular/forms';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

export const formConfig: FormConfigModel = {
  name: 'NTP Profile',
  fields: [
    {
      name: 'Name',
      label: 'Name',
      placeholder: 'Required. No Spaces',
      type: 'text',
      value: '',
      validators: [Validators.required]
    },
    {
      name: 'Data Length Anomaly Check',
      label: 'Data Length Anomaly Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'dataLengthAnomalyCheck', value: 1}],
    },
    {
      name: 'Stratum Anmomaly Check',
      label: 'Stratum Anmomaly Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'stratumAnmomalyCheck', value: 1}],
    },
    {
      name: 'Version Anomaly Check',
      label: 'Version Anomaly Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'versionAnomalyCheck', value: 1}],
    },
    {
      name: 'Control Header Anomalies Check',
      label: 'Control Header Anomalies Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'controlHeaderAnomaliesCheck', value: 1}],
    },
    {
      name: 'Retransmission Check',
      label: 'Retransmission Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'retransmissionCheck', value: 1}],
    },
    {
      name: 'Sequence Mismatch Check',
      label: 'Sequence Mismatch Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'sequenceMismatchCheck', value: 1}],
    },
    {
      name: 'Unsolicited Response Check',
      label: 'Unsolicited Response Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'unsolicitedResponseCheck', value: 1}],
    },
    {
      name: 'Mode Mismatch Check',
      label: 'Mode Mismatch Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'modeMismatchCheck', value: 1}],
    },
    {
      name: 'Reflection Deny',
      label: 'Reflection Deny',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'reflectionDeny', value: 1}],
    },
  ]
};

export const tableColumns: TableColumnModel[] = [
  { field: 'name', header: 'Name', type: 'text' },
  { field: 'dataLengthAnomalyCheck', header: 'Data Length Anomaly Check', type: 'status' },
  { field: 'stratumAnomalyCheck', header: 'Stratum Anomaly Check', type: 'status' },
  { field: 'versionAnomalyCheck', header: 'Version Anomaly Check', type: 'status' },
  { field: 'controlHeaderAnomaliesCheck', header: 'Control Header Anomalies Check', type: 'status' },
];

