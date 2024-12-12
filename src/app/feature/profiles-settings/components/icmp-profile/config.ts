import {Validators} from '@angular/forms';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

export const formConfig: FormConfigModel = {
  name: 'ICMP Profile',
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
      name: 'ICMP Strict Anomalies',
      label: 'ICMP Strict Anomalies',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'icmpStrictAnomalies', value: '1'}],
    },
    {
      name: 'ICMP Type Code Anomaly',
      label: 'ICMP Type Code Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'icmpTypeCodeAnomaly', value: '1'}],
    },
  ]
};

export const tableColumns: TableColumnModel[] = [
  { field: 'name', header: 'Name', type: 'text' },
  { field: 'icmpStrictAnomalies', header: 'ICMP Strict Anomalies', type: 'status' },
  { field: 'icmpTypeCodeAnomaly', header: 'ICMP Type Code Anomaly', type: 'status' },
  { field: 'icmpTypeCodeACL', header: 'ICMP Type Code ACL', type: 'status' },
];

