import {FormConfigModel} from '../../model/protection-settings-model';
import {Validators} from '@angular/forms';

export const formConfig: FormConfigModel = {
  name: 'Add Address',
  fields: [
    { name: 'Name', label: 'Name', placeholder: 'Required. No Spaces', type: 'text', value: '', validators: [Validators.required] },
    { name: 'Address', label: 'Address', placeholder: '0.0.0.0', hint:'Example: 192.0.2.0', type: 'text', value: '', validators: [Validators.required] },
    //   { name: 'agree', label: 'Agree to Terms', type: 'checkbox', value: false },
    //   {
    //     name: 'gender',
    //     label: 'Gender',
    //     type: 'radio',
    //     options: [
    //       { label: 'Male', value: 'Male' },
    //       { label: 'Female', value: 'Female' }
    //     ],
    //     value: 'Male'
    //   },
    //   {
    //     name: 'country',
    //     label: 'Country',
    //     type: 'dropdown',
    //     options: [
    //       { label: 'USA', value: 'USA' },
    //       { label: 'Canada', value: 'Canada' },
    //       { label: 'UK', value: 'UK' }
    //     ],
    //     value: 'USA'
    //   }
    // ],
    // switches: [
    //   { label: 'IP Strict Anomalies', model: 'ipStrict' },
    //   { label: 'UDP Empty Checksum Check', model: 'udpChecksum' },
    //   { label: 'IP Land Attack (Src=Dst) Anomaly', model: 'ipLandAttack' },
    //   { label: 'IP Private Check', model: 'ipPrivate' },
    //   { label: 'IP Multicast Check', model: 'ipMulticast' }
    // ],
    // checkboxGroups: [
    //   {
    //     label: 'IP Fragment Check',
    //     model: 'ipFragment',
    //     options: [
    //       { value: 'otherProtocol', label: 'Other Protocol Fragment' },
    //       { value: 'tcpFragment', label: 'TCP Fragment' },
    //       { value: 'udpFragment', label: 'UDP Fragment' }
    //     ]
    //   },
    //   {
    //     label: 'IP Reputation Categories',
    //     model: 'ipReputation',
    //     options: [
    //       { value: 'ddos', label: 'DDoS' },
    //       { value: 'anonymous', label: 'Anonymous' },
    //       { value: 'phishing', label: 'Phishing' },
    //       { value: 'spam', label: 'Spam' },
    //       { value: 'tor', label: 'Tor' }
    //     ]
    //   }
  ]
};

export const tableColumns = [
    {field: 'addressName', header: 'Address Name', type: 'text'},
    {field: 'ipAddress', header: 'Ip Address', type: 'text'},
    {field: 'policyName', header: 'Policy Name', type: 'text'},
    {field: 'policyStatus', header: 'Policy Status', type: 'status'},
    {field: 'operatingMode', header: 'Operating Mode', type: 'text'},
];

