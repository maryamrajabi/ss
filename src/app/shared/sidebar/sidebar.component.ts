import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {RippleModule} from 'primeng/ripple';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {FormComponentComponent} from '../form-component/form-component.component';

@Component({
  selector: 'app-sidebar-component',
  imports: [
    SidebarModule,
    RippleModule,
    InputSwitchModule,
    ChipsModule,
    FormsModule,
    CheckboxModule,
    FormComponentComponent
  ],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  formConfig = {
    name: 'Profile Name',
    switches: [
      { label: 'IP Strict Anomalies', model: 'ipStrict' },
      { label: 'UDP Empty Checksum Check', model: 'udpChecksum' },
      { label: 'IP Land Attack (Src=Dst) Anomaly', model: 'ipLandAttack' },
      { label: 'IP Private Check', model: 'ipPrivate' },
      { label: 'IP Multicast Check', model: 'ipMulticast' }
    ],
    checkboxGroups: [
      {
        label: 'IP Fragment Check',
        model: 'ipFragment',
        options: [
          { value: 'otherProtocol', label: 'Other Protocol Fragment' },
          { value: 'tcpFragment', label: 'TCP Fragment' },
          { value: 'udpFragment', label: 'UDP Fragment' }
        ]
      },
      {
        label: 'IP Reputation Categories',
        model: 'ipReputation',
        options: [
          { value: 'ddos', label: 'DDoS' },
          { value: 'anonymous', label: 'Anonymous' },
          { value: 'phishing', label: 'Phishing' },
          { value: 'spam', label: 'Spam' },
          { value: 'tor', label: 'Tor' }
        ]
      }
    ]
  };



  valSwitch: boolean = false;
  valSwitch1: boolean = false;
  valSwitch2: boolean = false;
  valSwitch3: boolean = false;
  valSwitch4: boolean = false;

  valCheck: string[] = [];
  valCheck1: string[] = [];

  @Input() titleSidebar: string = '';

  @Input() visibleSidebar: boolean = false;
  @Output() visibleSidebarChange = new EventEmitter<boolean>(); // خروجی برای ارسال تغییرات به والد


  onOkButtonChange = output<string>();
  onCancelButtonChange = output<string>();

  emitOkButtonChange(value?: string) {
    this.onOkButtonChange.emit(value?? '');
  }

  emitCancelButtonChange(value?: string) {
    this.onCancelButtonChange.emit(value?? '');
  }

  @Input() switches: boolean[] = []; // آرایه‌ای برای مدیریت وضعیت سوئیچ‌ها
  @Output() save = new EventEmitter<void>(); // رویداد ذخیره
  @Output() cancel = new EventEmitter<void>(); // رویداد لغو

  toggleSwitch(index: number) {
    this.switches[index] = !this.switches[index]; // تغییر وضعیت سوئیچ خاص
  }

}
