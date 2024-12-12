import {Validators} from '@angular/forms';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

export const formConfig: FormConfigModel = {
  name: 'DNS Profile',
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
      name: 'DNS Anomaly Feature Controls',
      type: 'titleBar'
    },
    {
      name: 'Header Anomaly',
      label: 'Header Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'illegalFlagCombination', name: 'Illegal Flag Combination' },
        { value: 'invalidOpCode', name: 'Invalid Op Code' },
        { value: 'spDpBoth53', name: 'SP, DP Both 53' },
        { value: 'incompleteDns', name: 'Incomplete DNS' }
      ]
    },
    {
      name: 'Query Anomaly',
      label: 'Query Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'queryBitSet', name: 'Query Bit Set' },
        { value: 'nullQuery', name: 'Null Query' },
        { value: 'qdCountNotOneInQuery', name: 'QDCount not One in Query' },
        { value: 'raBitSet', name: 'RA Bit Set' }
      ]
    },
    {
      name: 'Bufferoverflow Anomaly',
      label: 'Bufferoverflow Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'nameTooLong', name: 'Name too Long' },
        { value: 'labelLengthTooLarge', name: 'Label Length too Large' },
        { value: 'tcpMessageTooLong', name: 'TCP Message too Long' },
        { value: 'udpMessageTooLong', name: 'UDP Message too Long' }
      ]
    },
    {
      name: 'Exploit Anomaly',
      label: 'Exploit Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'messageEndsPrematurely', name: 'Message Ends Prematurely' },
        { value: 'classNotIN', name: 'Class not IN' },
        { value: 'zoneTransfer', name: 'Zone Transfer' },
        { value: 'pointerLoop', name: 'Pointer Loop' },
        { value: 'emptyUDP', name: 'Empty UDP' },
        { value: 'tcpBufferUnderflow', name: 'TCP Buffer Underflow' },
      ]
    },
    {
      name: 'Info Anomaly(Type All/Any Used)',
      label: 'Info Anomaly(Type All/Any Used)',
      placeholder: 'Required. No Spaces',
      type: 'switches',
      value: '',
      validators: [Validators.required],
      options: [{name: 'infoAnomaly', value: 1}],
    },
    {
      name: 'Data Anomaly',
      label: 'Data Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'extraneousData', name: 'Extraneous Data' },
        { value: 'ttlTooLong', name: 'TTL too Long' },
        { value: 'invalidClassType', name: 'Invalid Class Type' },
        { value: 'nameLengthTooShort', name: 'Name Length too Short' },
        { value: 'multipleOptRR', name: 'Multiple OPT RR' },
      ]
    },
    {
      name: 'DNS Known Opcode Anomaly',
      label: 'DNS Known Opcode Anomaly',
      placeholder: 'Required. No Spaces',
      type: 'checkbox',
      value: '',
      validators: [Validators.required],
      options: [
        { value: 'status', name: 'Status' },
        { value: 'notify', name: 'Notify' },
        { value: 'update', name: 'Update' },
        { value: 'dso', name: 'DSO' },
      ]
    },
  ]
};

export const tableColumns: TableColumnModel[] = [
  { field: 'name', header: 'Name', type: 'text' },
  { field: 'floodMitigationMode', header: 'Flood Mitigation Mode', type: 'text' },
  { field: 'matchResponseWithQueries', header: 'Match Response with Queries(DQRM)', type: 'status' },
];

