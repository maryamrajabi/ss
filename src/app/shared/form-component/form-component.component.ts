import {Component, Input, OnInit} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [InputTextModule, InputSwitchModule, CheckboxModule, CommonModule,
    ReactiveFormsModule],

  standalone: true,
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})


export class FormComponentComponent implements OnInit {
  @Input() formConfig: {
    name: string;
    switches: Array<{
      label: string;
      model: string;
    }>;
    checkboxGroups: Array<{
      label: string;
      options: Array<{
        value: string;
        label: string;
      }>;
      model: string;
    }>;
  } = {
    name: '',
    switches: [],
    checkboxGroups: []
  };

  form!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      switches: this.fb.group({}),
      checkboxGroups: this.fb.group({})
    });

    this.initFormControls();
  }

  private initFormControls() {
    const switchesGroup = this.form.get('switches') as FormGroup;
    const checkboxGroup = this.form.get('checkboxGroups') as FormGroup;

    this.formConfig.switches.forEach(switchItem => {
      switchesGroup.addControl(switchItem.model, this.fb.control(false));
    });

    this.formConfig.checkboxGroups.forEach(group => {
      checkboxGroup.addControl(group.model, this.fb.control([]));
    });
  }
}