// config.ts
import {FormConfigModel} from '../../model/protection-settings-model';
import {Validators} from '@angular/forms';

export const formConfig: FormConfigModel = {
  name: 'Address',
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
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
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
