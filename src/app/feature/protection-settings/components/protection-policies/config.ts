// config.ts
import {FormConfigModel} from '../../model/protection-settings-model';
import {Validators} from '@angular/forms';

export const formConfig: FormConfigModel = {
  name: 'Create Profile',
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
      name: 'Status',
      label: 'Status',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: '', value: 'ipStrict'},
      ]
    },
    {
      name: 'Operation Mode',
      label: 'Operation Mode',
      placeholder: 'Required. No Spaces',
      type: 'selectOneButton',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'Detection', value: 1 },
        { name: 'Prevention', value: 2 },
      ]
    },
    {name: 'Protection Profile Settings',
      type: 'titleBar'},
    {
      name: 'IP',
      label: 'IP',
      placeholder: 'IP Profile',
      type: 'dropdown-switch',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'IP Profile 1', code: 1 },
        { name: 'IP Profile 2', code: 2 },
      ]
    },
    {
      name: 'ICMP',
      label: 'ICMP',
      placeholder: 'ICMP Profile',
      type: 'dropdown-switch',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'ICMP Profile 1', code: 1 },
        { name: 'ICMP Profile 2', code: 2 },
      ]
    },
    {
      name: 'TCP',
      label: 'TCP',
      placeholder: 'TCP WEB',
      type: 'dropdown-switch',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'TCP WEB 1', code: 1 },
        { name: 'TCP WEB 2', code: 2 },
      ]
    },
    {
      name: 'NTP',
      label: 'NTP',
      placeholder: 'NTP Profile',
      type: 'dropdown-switch',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'NTP Profile 1', code: 1 },
        { name: 'NTP Profile 2', code: 2 },
      ]
    },
    {
      name: 'DNS',
      label: 'DNS',
      placeholder: 'DNS Profile',
      type: 'dropdown-switch',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'DNS Profile 1', code: 1 },
        { name: 'DNS Profile 2', code: 2 },
      ]
    },
    {name: 'Service Ports Setting',
      type: 'titleBar'},
    {
      name: 'TCP Service Ports',
      label: 'TCP Service Ports',
      placeholder: 'Required. No Spaces',
      type: 'text',
      value: '',
      validators: [Validators.required],
      hint: 'Default: 80. You can specify up to 256 ports, port or port ranges separated by space, e.g., 80-90 100.'
    },
    {
      name: 'UDP Service Ports',
      label: 'UDP Service Ports',
      placeholder: 'Required. No Spaces',
      type: 'text',
      value: '',
      validators: [Validators.required],
      hint: 'Default: 443.You can specify up to 256 ports, port or port ranges separated by space, e.g., 80-90 100.\n'
    },
    {name: 'Protection Addresses',
      type: 'titleBar'},
    {
      name: 'Protection Addresses',
      label: 'Protection Addresses',
      placeholder: 'Required. No Spaces',
      type: 'multiSelect',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'value 1', code: 1 },
        { name: 'value 2', code: 2 },
      ]
    },

  ],
};

export const tableColumns = [
  {field: 'quantity', header: 'Name', type: 'text'},
  {field: 'rating', header: 'Status', type: 'status'},
  {field: 'inventoryStatus', header: 'Protection Profiles', type: 'badgeStatus'},
  {field: 'category', header: 'Operating Mode', type: 'text'},
];
