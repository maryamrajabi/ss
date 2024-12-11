import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {ButtonDirective} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PrimeTemplate} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import {Ripple, RippleModule} from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-confirm-dialog',
  imports: [CommonModule, DialogModule, ButtonDirective, RippleModule
  ],
  standalone: true,
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {

  private _deleteDialog: boolean = false; // مقدار پیش‌فرض

  @Input()
  set deleteDialog(value: boolean) {
    this._deleteDialog = value;
  }

  get deleteDialog(): boolean {
    return this._deleteDialog;
  }

  @Output() deleteConfirm = new EventEmitter<boolean>();

  confirmDeleteSelected(value: boolean) {
    this._deleteDialog = false;
    this.deleteConfirm.emit(value);
  }

}
