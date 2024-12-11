import {Component, OnInit} from '@angular/core';
import {ProfileSettingsModel} from '../../../profiles-settings/model/profile-settings-model';
import {FormConfigModel} from '../../model/protection-settings-model';
import {ProfileSettingsService} from '../../../profiles-settings/service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {formConfig, tableColumns} from './config';

@Component({
  selector: 'app-protection-policies',
  standalone: false,
  providers: [MessageService, ConfirmationService],
  templateUrl: './protection-policies.component.html',
  styleUrl: './protection-policies.component.scss'
})
export class ProtectionPoliciesComponent implements OnInit {

  selectedProducts: ProfileSettingsModel[] = [];
  visibleSidebar: boolean = false;
  cols: any[] = [];
  products: ProfileSettingsModel[] = [];
  product: ProfileSettingsModel = {};
  deleteProductsDialog: boolean = false;
  submitted: boolean = false;

  formConfig: FormConfigModel = formConfig;

  constructor(private productService: ProfileSettingsService<any>, private messageService: MessageService) {
  }

  ngOnInit() {
    this.productService.getData('protection-policies').then((data: ProfileSettingsModel[]) => this.products = data);

    this.cols = tableColumns;

  }

  editProduct(product?: ProfileSettingsModel) {
    this.visibleSidebar = true;
    product = this.products.filter(val => this.selectedProducts.includes(val))[0];
    this.product = {...product};
    // this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  visibleChange(e: any) {
    this.visibleSidebar = e;
  }

  saveProduct(e?: any) {
    console.log(e)
    this.submitted = true;

    if (e.name?.trim()) {
      if (e) {
        // @ts-ignore
        // this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
        // this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Updated`, life: 3000});
      } else {
        this.products.push(e);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Created`, life: 3000});
      }

      this.products = [...this.products];
      this.product = {};
    }
  }


  getSelectedProducts(e: any) {
    console.log(e)
    this.selectedProducts = e;
  }

  confirmDeleteSelected(e: boolean) {
    this.deleteProductsDialog = false;
    if (e) {
      this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Deleted`, life: 3000});
      this.selectedProducts = [];
    }
  }

}
