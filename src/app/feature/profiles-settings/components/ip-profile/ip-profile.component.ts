
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProfileSettingsModel} from '../../model/profile-settings-model';
import {ProfileSettingsService} from '../../service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-ip-profile',
  standalone: false,
  providers: [MessageService, ConfirmationService],
  templateUrl: './ip-profile.component.html',
  styleUrl: './ip-profile.component.scss'
})
export class IpProfileComponent implements OnInit {

  @ViewChild('tableHeaderCheckbo') tableHeaderCheckbo: any = '';

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: ProfileSettingsModel[] = [];

  product: ProfileSettingsModel = {};

  selectedProducts: ProfileSettingsModel[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  visibleSidebar2: boolean = false;

  valSwitch: boolean = false;
  valSwitch1: boolean = false;
  valSwitch2: boolean = false;
  valSwitch3: boolean = false;
  valSwitch4: boolean = false;

  valCheck: string[] = [];
  valCheck1: string[] = [];

  constructor(private productService: ProfileSettingsService<any>, private messageService: MessageService) {
  }

  ngOnInit() {
    this.productService.getData().then((data: ProfileSettingsModel[]) => this.products = data);

    this.cols = [
      {field: 'product', header: 'Product'},
      {field: 'price', header: 'Price'},
      {field: 'category', header: 'Category'},
      {field: 'rating', header: 'Reviews'},
      {field: 'inventoryStatus', header: 'Status'}
    ];

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editProduct(product?: ProfileSettingsModel) {
    this.visibleSidebar2 = true;
    product = this.products.filter(val => this.selectedProducts.includes(val))[0];
    this.product = {...product};
    // this.productDialog = true;
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    this.selectedProducts = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.products = this.products.filter(val => val.id !== this.product.id);
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    this.product = {};
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product.id) {
        // @ts-ignore
        this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      } else {
        this.product.id = this.createId();
        this.product.code = this.createId();
        this.product.image = 'product-placeholder.svg';
        // @ts-ignore
        this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
        this.products.push(this.product);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}



// import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {ProfileSettingsModel} from '../../model/profile-settings-model';
// import {ProfileSettingsService} from '../../service/profile-settings.service';
// import {ConfirmationService, MessageService} from 'primeng/api';
// import {Table} from 'primeng/table';
//
// @Component({
//   selector: 'app-ip-profile',
//   standalone: false,
//   providers: [MessageService, ConfirmationService],
//   templateUrl: './ip-profile.component.html',
//   styleUrl: './ip-profile.component.scss'
// })
// export class IpProfileComponent implements OnInit {
//
//   // products = [];
//   selectedProducts: any[] = [];
//   visibleSidebar2 = false;
//   valSwitches = Array(9).fill(false); // مدیریت تمام سوئیچ‌ها در یک آرایه
//
//
//   productDialog: boolean = false;
//   //
//   deleteProductDialog: boolean = false;
//   //
//   deleteProductsDialog: boolean = false;
//   //
//   products: ProfileSettingsModel[] = [];
//   //
//   product: ProfileSettingsModel = {};
//   //
//   // selectedProducts: ProfileSettingsModel[] = [];
//   //
//   // submitted: boolean = false;
//   //
//   // cols: any[] = [];
//   //
//   // statuses: any[] = [];
//   //
//   // rowsPerPageOptions = [5, 10, 20];
//   //
//   // visibleSidebar2: boolean = false;
//
//
//
//
//   constructor(private productService: ProfileSettingsService, private messageService: MessageService) {
//   }
//
//   ngOnInit() {
//     this.productService.getProducts().then((data: ProfileSettingsModel[]) => this.products = data);
//
//     // this.cols = [
//     //   {field: 'product', header: 'Product'},
//     //   {field: 'price', header: 'Price'},
//     //   {field: 'category', header: 'Category'},
//     //   {field: 'rating', header: 'Reviews'},
//     //   {field: 'inventoryStatus', header: 'Status'}
//     // ];
//
//     // this.statuses = [
//     //   {label: 'INSTOCK', value: 'instock'},
//     //   {label: 'LOWSTOCK', value: 'lowstock'},
//     //   {label: 'OUTOFSTOCK', value: 'outofstock'}
//     // ];
//   }
//
//   openNew() {
//     // this.product = {};
//     // this.submitted = false;
//     // this.productDialog = true;
//   }
//
//   deleteSelectedProducts() {
//     this.deleteProductsDialog = true;
//   }
//
//   editProduct(product?: ProfileSettingsModel) {
//     this.visibleSidebar2 = true;
//     product = this.products.filter(val => this.selectedProducts.includes(val))[0];
//     this.product = {...product};
//     // this.productDialog = true;
//   }
//
//   deleteProduct(product: ProfileSettingsService) {
//     this.deleteProductDialog = true;
//     this.product = {...product};
//   }
//
//   confirmDeleteSelected() {
//     this.deleteProductsDialog = false;
//     this.products = this.products.filter(val => !this.selectedProducts.includes(val));
//     this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
//     this.selectedProducts = [];
//   }
//
//   confirmDelete() {
//     this.deleteProductDialog = false;
//     this.products = this.products.filter(val => val.id !== this.product.id);
//     this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
//     this.product = {};
//   }
//
//   hideDialog() {
//     this.productDialog = false;
//     // this.submitted = false;
//   }
//
//   saveProduct() {
//     // this.submitted = true;
//
//     if (this.product.name?.trim()) {
//       if (this.product.id) {
//         // @ts-ignore
//         this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
//         this.products[this.findIndexById(this.product.id)] = this.product;
//         this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
//       } else {
//         this.product.id = this.createId();
//         this.product.code = this.createId();
//         this.product.image = 'product-placeholder.svg';
//         // @ts-ignore
//         this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
//         this.products.push(this.product);
//         this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
//       }
//
//       this.products = [...this.products];
//       this.productDialog = false;
//       this.product = {};
//     }
//   }
//
//   findIndexById(id: string): number {
//     let index = -1;
//     for (let i = 0; i < this.products.length; i++) {
//       if (this.products[i].id === id) {
//         index = i;
//         break;
//       }
//     }
//
//     return index;
//   }
//
//   createId(): string {
//     let id = '';
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < 5; i++) {
//       id += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return id;
//   }
//
//   onGlobalFilter(table: Table | any, event: Event) {
//     table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
//   }
//
//   // در والد
//   tableColumns = [
//     { field: 'name', header: 'Name' },
//     { field: 'age', header: 'Age' }
//   ];
//
//   tableData = [
//     { name: 'Ali', age: 30 },
//     { name: 'Sara', age: 25 }
//   ];
//
//   onRowSelected(row: any) {
//     console.log('Row selected:', row);
//   }
//
//   onRowDeleted(row: any) {
//     console.log('Row deleted:', row);
//   }
//
// }
//
