import {Validators} from '@angular/forms';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

export const formConfig: FormConfigModel = {
  name: 'TCP Profile',
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
      name: 'SYN Flood Protection',
      type: 'titleBar'
    },
    {
      name: 'SYN Flood Mitigation Mode',
      label: 'SYN Flood Mitigation Mode',
      placeholder: 'Required. No Spaces',
      type: 'radiobutton',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'synCookie', name: 'SYN Cookie' },
        { value: 'ackCookie', name: 'ACK Cookie' },
        { value: 'synRetransmission', name: 'SYN Retransmission' },
      ],
    },
    {
      name: 'TCP Slow Connection Protection',
      type: 'titleBar'
    },
    {
      name: 'Slow Connection Type',
      label: 'Slow Connection Type',
      placeholder: 'Slow Connection Type',
      type: 'dropdown',
      value: '',
      validators: [Validators.required],
      options: [
        { name: 'Moderate', code: 'Option 1' },
        { name: 'Aggressive', code: 'Option 2' },
        { name: 'User Defined', code: 'Option 3' },
        { name: 'None', code: 'Option 3' }
      ],
    },
    {
      name: 'TCP Packets Validation',
      type: 'titleBar'
    },
    {
      name: 'TCP Session Feature Control',
      label: 'TCP Session Feature Control',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'sequenceValidation', name: 'Sequence Validation' },
        { value: 'synValidation', name: 'SYN Validation' },
        { value: 'stateTransitionAnomaliesValidation', name: 'State Transition Anomalies Validation' },
        { value: 'foreignPacketValidation', name: 'Foreign Packet Validation' },
        { value: 'allowTupleReuse', name: 'Allow Tuple Reuse' },
        { value: 'allowDuplicateSYNinSYNSent', name: 'Allow Duplicate SYN in SYN Sent' },
        { value: 'allowDuplicateSYNinSYNRecv', name: 'Allow Duplicate SYN in SYN Recv' },
        { value: 'allowSYNAnamoly', name: 'Allow SYN Anamoly' },
        { value: 'allowSYNACKAnomaly', name: 'Allow SYN ACK Anomaly' },
        { value: 'allowACKAnomaly', name: 'Allow ACK Anomaly' },
        { value: 'allowRSTAnomaly', name: 'Allow RST Anomaly' },
        { value: 'allowFINAnomaly', name: 'Allow FIN Anomaly' }
      ]
    },
    {
      name: 'Drop Threshold For Foreign Packets',
      label: 'Drop Threshold For Foreign Packets',
      placeholder: '',
      hint: 'Range: 0 - 65535',
      type: 'text',
      value: '',
      validators: [Validators.required]
    },
    {
      name: 'Strict Anomalies',
      label: 'Strict Anomalies',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'strictAnomalies', value: 1}],
    },
  ]
};

export const tableColumns: TableColumnModel[] = [
  { field: 'name', header: 'Name', type: 'text' },
  { field: 'synFloodMitigationMode', header: 'SYN Flood Mitigation Mode', type: 'text' },
  { field: 'slowConnectionType', header: 'Slow Connection Type', type: 'text' },
  { field: 'strictAnomalies', header: 'Strict Anomalies', type: 'status' },
];

