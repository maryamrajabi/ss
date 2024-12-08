import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
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
    Ripple,
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
  // valSwitch: boolean = false;
  // valSwitch1: boolean = false;
  // valSwitch2: boolean = false;
  // valSwitch3: boolean = false;
  // valSwitch4: boolean = false;
  //
  // valCheck: string[] = [];
  // valCheck1: string[] = [];
  //
  // @Input() visibleSidebar2: boolean = false;
  // onOkButtonChange = output<string>();
  // onCancelButtonChange = output<string>();
  //
  // emitOkButtonChange(value?: string) {
  //   this.onOkButtonChange.emit(value?? '');
  // }
  //
  // emitCancelButtonChange(value?: string) {
  //   this.onCancelButtonChange.emit(value?? '');
  // }

  @Input() visible = false; // کنترل نمایش یا عدم نمایش سایدبار
  @Input() switches: boolean[] = []; // آرایه‌ای برای مدیریت وضعیت سوئیچ‌ها
  @Output() save = new EventEmitter<void>(); // رویداد ذخیره
  @Output() cancel = new EventEmitter<void>(); // رویداد لغو

  toggleSwitch(index: number) {
    this.switches[index] = !this.switches[index]; // تغییر وضعیت سوئیچ خاص
  }

}
