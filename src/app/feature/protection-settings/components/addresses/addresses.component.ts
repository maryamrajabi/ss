import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfileSettingsModel} from '../../../profiles-settings/model/profile-settings-model';
import {ProfileSettingsService} from '../../../profiles-settings/service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Validators} from '@angular/forms';
import {AddressModel, FormConfigModel} from '../../model/protection-settings-model';
import {formConfig, tableColumns} from './config';

@Component({
  selector: 'app-addresses',
  standalone: false,
  providers: [MessageService, ConfirmationService],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss'
})
export class AddressesComponent  implements OnInit {

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteItemsDialog: boolean = false;

  data: AddressModel[] = [];

  item: AddressModel | {} = {};

  selectedItems: AddressModel[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  visibleSidebar: boolean = false;

  formConfig: FormConfigModel = formConfig;

  constructor(private getDataService: ProfileSettingsService<AddressModel>, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getDataService.getData('addresses').then((data: AddressModel[]) => this.data = data);

    this.cols = tableColumns;

  }

  deleteSelectedItems() {
    this.deleteItemsDialog = true;
  }

  getSelectedItems(e: any) {
    this.selectedItems = e;
  }

  editItem(item?: AddressModel) {
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
      this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Deleted`, life: 3000});
      this.selectedItems = [];
    }
  }

  save(e?: any) {
    this.submitted = true;

    if (e.name?.trim()) {
      debugger
      if (e) {
        // @ts-ignore
        // this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
        // this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Updated`, life: 3000});
      } else {
        this.data.push(e);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Created`, life: 3000});
      }

      this.data = [...this.data];
      this.productDialog = false;
      this.item = {};
    }
  }

}
