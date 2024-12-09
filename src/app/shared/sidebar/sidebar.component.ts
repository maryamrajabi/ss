import {Component, EventEmitter, Input, Output, output, ViewChild} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {RippleModule} from 'primeng/ripple';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {AbstractControl, FormsModule, ValidationErrors, Validators} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {FormComponentComponent} from '../form-component/form-component.component';
import {ButtonDirective} from 'primeng/button';
import {FormConfigModel} from '../../feature/protection-settings/model/protection-settings-model';

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

  @Input() formConfig: FormConfigModel = {
    name: '',
    fields: [],
    // switches: [],
    // checkboxGroups: []
  };

  @Input() titleSidebar: string = '';

  @Input() visibleSidebar: boolean = false;
  @Output() visibleSidebarChange = new EventEmitter<boolean>(); // خروجی برای ارسال تغییرات به والد
  @ViewChild('formComponent') formComponent!: FormComponentComponent;


  onOkButtonChange = output<string>();
  onCancelButtonChange = output<string>();

  emitOkButtonChange(value?: string) {
    this.formComponent.onSubmit();  // Call onSubmit() of the child component
  }

  emitCancelButtonChange(value?: string) {
    this.onCancelButtonChange.emit(value?? '');
  }

  handleFormSubmit(formData: any) {
    this.onOkButtonChange.emit(formData?? '');
  }

  @Input() switches: boolean[] = []; // آرایه‌ای برای مدیریت وضعیت سوئیچ‌ها
  @Output() save = new EventEmitter<void>(); // رویداد ذخیره
  @Output() cancel = new EventEmitter<void>(); // رویداد لغو

  toggleSwitch(index: number) {
    this.switches[index] = !this.switches[index]; // تغییر وضعیت سوئیچ خاص
  }

}
