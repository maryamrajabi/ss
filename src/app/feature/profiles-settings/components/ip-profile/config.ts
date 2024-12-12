import {Validators} from '@angular/forms';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

export const formConfig: FormConfigModel = {
  name: 'IP Profile',
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
      name: 'IP Strict Anomalies',
      label: 'IP Strict Anomalies',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'ipStrict', value: 1}],
    },
    {
      name: 'UDP Empty Checksum Check',
      label: 'UDP Empty Checksum Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'udpEmptyChecksumCheck', value: 1}],
    },
    {
      name: 'IP Land Attack (Src=Dst) Anomaly',
      label: 'IP Land Attack (Src=Dst) Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'ipLand', value: 1}],
    },
    {
      name: 'IP Private Check',
      label: 'IP Private Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'ipPrivateCheck', value: 1}],
    },
    {
      name: 'IP Multicast Check',
      label: 'IP Multicast Check',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'ipMulticastCheck', value: 1}],
    },
    {
      name: 'IP Fragment Check',
      label: 'IP Fragment Check',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'otherProtocolFragment', name: 'Other Protocol Fragment' },
        { value: 'tcpFragment', name: 'TCP Fragment' },
        { value: 'udpFragment', name: 'UDP Fragment' },
      ]
    },
    {
      name: 'IP Reputation Categories',
      label: 'IP Reputation Categories',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'ddos', name: 'DDoS' },
        { value: 'anonymous', name: 'Anonymous' },
        { value: 'phishing', name: 'Phishing' },
        { value: 'spam', name: 'Spam' },
        { value: 'tor', name: 'Tor' },
      ]
    },
  ]
};

export const tableColumns: TableColumnModel[] = [
  { field: 'name', header: 'Name', type: 'text' },
  { field: 'ipStrictAnomalies', header: 'IP Strict Anomalies', type: 'status' },
  { field: 'ipPrivateCheck', header: 'IP Private Check', type: 'status' },
  { field: 'ipMulticastCheck', header: 'IP Multicast Check', type: 'status' },
  { field: 'ipFragmentCheck', header: 'IP Fragment Check', type: 'text' },
  { field: 'ipReputationCategories', header: 'IP Reputation Categories', type: 'text' },
];

