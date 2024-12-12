import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import {
  FormArray,
  FormBuilder, FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {FormConfigModel} from '../model/form-config-model';

@Component({
  selector: 'app-form-component',
  imports: [InputTextModule, InputSwitchModule, CheckboxModule, CommonModule,
    ReactiveFormsModule, SelectButtonModule, DropdownModule, MultiSelectModule, CheckboxModule],
  standalone: true,
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  @Input() formConfig: FormConfigModel = {
    name: '',
    fields: []
  };
  form!: FormGroup;

  @Output() formSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  get dynamicFields(): FormArray {
    return this.form.get('dynamicFields') as FormArray;
  }

  ngOnInit() {
    this.form = this.fb.group({
      dynamicFields: this.fb.array([])
    });

    this.initFormControls();
  }

  private initFormControls() {
    const dynamicFieldsArray = this.dynamicFields;

    this.formConfig.fields.forEach(field => {
      let control;

      switch (field.type) {
        case 'switches':
          control = this.fb.group(field.options?.reduce((acc: any, checkbox: any) => {
            acc[checkbox.name] = new FormControl(false);
            return acc;
          }, {}));
          break;

          case 'checkbox':
          control = this.fb.group(field.options?.reduce((acc: any, checkbox: any) => {
            acc[checkbox.value] = new FormControl(false);
            return acc;
          }, {}));
          break;

        case 'dropdown-switch':
          control = this.fb.group({
            isSwitchOn: [false],
            selectedOption: [null],
          });
          break;

          case 'text':
          control = this.fb.group({
            name: '',
          });
          break;

        default:
          control = this.fb.control(
            field.value || '',
            this.mapValidators(field.validators as string[])
          );
          break;
      }

      console.log(control)
      dynamicFieldsArray.push(control);
    });
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
          validatorFns.push(Validators.minLength(3));
          break;
        default:
          break;
      }
    }
    return validatorFns;
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }
}
