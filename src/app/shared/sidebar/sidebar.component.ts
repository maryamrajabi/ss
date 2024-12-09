import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {RippleModule} from 'primeng/ripple';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {AbstractControl, FormsModule, ValidationErrors, Validators} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {FormComponentComponent} from '../form-component/form-component.component';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-sidebar-component',
  imports: [
    SidebarModule,
    RippleModule,
    InputSwitchModule,
    ChipsModule,
    FormsModule,
    CheckboxModule,
    FormComponentComponent,
    ButtonDirective
  ],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private mapValidators(validators?: string[]) {
    if (!validators || validators.length === 0) {
      return [];
    }

    return validators.map(validator => {
      switch (validator) {
        case 'required':
          return Validators.required;
        case 'email':
          return Validators.email;
        case 'minLength':
          return Validators.minLength(3); // Example
        // Add other cases as needed
        default:
          throw new Error(`Validator "${validator}" is not supported.`);
      }
    });
  }

  @Input() formConfig: {
    name: string;
    fields: Array<{
      name: string;
      label: string;
      type: any;
      value: any;
      validators?: (string | ((control: AbstractControl) => ValidationErrors | null))[];
      options?: Array<{
        value: any
        label: string;
      }>;
    }>;
    switches: Array<{
      label: string;
      model: string;
    }>;
    checkboxGroups: Array<{
      label: string;
      model: string;
      options: Array<{
        value: any
        label: string;
      }>;
    }>;
  } = {
    name: '',
    fields: [],
    switches: [],
    checkboxGroups: []
  };

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
