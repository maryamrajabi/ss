import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonDirective} from 'primeng/button';
import {Ripple, RippleModule} from 'primeng/ripple';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-sidebar-component',
  imports: [
    SidebarModule,
    ButtonDirective,
    RippleModule,
    InputSwitchModule,
    ChipsModule,
    FormsModule,
    CheckboxModule,
    NgForOf
  ],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


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
