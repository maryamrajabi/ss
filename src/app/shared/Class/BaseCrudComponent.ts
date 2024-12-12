import {MessageService} from 'primeng/api';

import {Injectable, Input} from '@angular/core';
import {TableColumnModel} from '../model/table-column-model';
import {FormConfigModel} from '../model/form-config-model';

@Injectable()
export abstract class BaseComponent<T> {
  @Input() deleteItemsDialog: boolean = false;
  @Input() data: T[] = [];
  @Input() item: T | {} = {};
  @Input() selectedItems: T[] = [];
  @Input() submitted: boolean = false;
  @Input() cols: TableColumnModel[] = [];  // ورودی برای ستون‌ها
  @Input() formConfig!: FormConfigModel;  // ورودی برای پیکربندی فرم
  visibleSidebar: boolean = false;

  constructor(protected messageService: MessageService) {
  }

  deleteSelectedItems() {
    this.deleteItemsDialog = true;
  }

  getSelectedItems(e: any) {
    this.selectedItems = e;
  }

  editItem(item?: T) {
    this.visibleSidebar = true;
    item = this.data.filter(val => this.selectedItems.includes(val))[0];
    this.item = {...item};
  }

  visibleChange(e: any) {
    this.visibleSidebar = e;
  }

  confirmDeleteSelected(e: boolean) {
    this.deleteItemsDialog = false;
    if (e) {
      this.data = this.data.filter(val => !this.selectedItems.includes(val));
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: `${this.formConfig.name} Deleted`,
        life: 3000,
      });
      this.selectedItems = [];
    }
  }

  save(e?: T) {
    this.submitted = true;

    if (e && (e as any).name?.trim()) {
      if (e) {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: `${this.formConfig.name} Updated`,
          life: 3000,
        });
      } else {
        this.data.push(e);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: `${this.formConfig.name} Created`,
          life: 3000,
        });
      }

      this.data = [...this.data];
      this.item = {};
    }
  }
}
