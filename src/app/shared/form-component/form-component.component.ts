import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {FormConfigModel} from '../../feature/protection-settings/model/protection-settings-model';
import {SelectButtonModule} from 'primeng/selectbutton';

@Component({
  selector: 'app-form-component',
  imports: [InputTextModule, InputSwitchModule, CheckboxModule, CommonModule,
    ReactiveFormsModule, SelectButtonModule],

  standalone: true,
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})


export class FormComponentComponent implements OnInit {
  @Input() formConfig: FormConfigModel = {
    name: '',
    fields: [],
    // switches: [],
    // checkboxGroups: []
  };

  form!: FormGroup;
  @Output() formSubmit = new EventEmitter<any>();  // EventEmitter for sending form data

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [ '', Validators.required],
      fields: this.fb.group({}),
      switches: this.fb.group({}),
      checkboxGroups: this.fb.group({})
    });

    this.initFormControls();
  }

  private initFormControls() {
    const fieldsGroup = this.form.get('fields') as FormGroup;
    const switchesGroup = this.form.get('switches') as FormGroup;
    const checkboxGroup = this.form.get('checkboxGroups') as FormGroup;

    // Add Fields
    this.formConfig.fields.forEach(field => {
      const control = this.fb.control(
        field.name || '',
        this.mapValidators(field.validators as string[]) // ترجمه رشته‌ها به توابع
      );
      fieldsGroup.addControl(field.value, control);
    });

    // // Add Switches
    // this.formConfig.switches.forEach(switchItem => {
    //   switchesGroup.addControl(switchItem.model, this.fb.control(false));
    // });
    //
    // // Add Checkbox Groups
    // this.formConfig.checkboxGroups.forEach(group => {
    //   checkboxGroup.addControl(group.model, this.fb.control([]));
    // });
  }

  private mapValidators(validators?: Array<string>) {
    if (!validators || validators.length === 0) {
      return [];
    }
    const validatorFns = [];
    for (const validator of validators) {
      switch (validator) {
        case 'required':
          validatorFns.push(Validators.required);
          break;
        case 'email':
          validatorFns.push(Validators.email);
          break;
        case 'minLength':
          // Add a specific example for minLength validation
          validatorFns.push(Validators.minLength(3));
          break;
        // Add more validators as needed
        default:
          break;
      }
    }
    return validatorFns;
  }
  onSubmit() {
    this.formSubmit.emit(this.form.value)
  }
}
