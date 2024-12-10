import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfileSettingsModel} from '../../../profiles-settings/model/profile-settings-model';
import {ProfileSettingsService} from '../../../profiles-settings/service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Validators} from '@angular/forms';
import {FormConfigModel} from '../../model/protection-settings-model';

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

  deleteProductsDialog: boolean = false;

  products: ProfileSettingsModel[] = [];

  product: ProfileSettingsModel = {};

  selectedProducts: ProfileSettingsModel[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  visibleSidebar: boolean = false;

  formConfig: FormConfigModel = {
    name: 'Address Ipv4',
    fields: [
      { name: 'name', label: 'Name', type: 'text', value: '', validators: [Validators.required] },
    //   { name: 'agree', label: 'Agree to Terms', type: 'checkbox', value: false },
    //   {
    //     name: 'gender',
    //     label: 'Gender',
    //     type: 'radio',
    //     options: [
    //       { label: 'Male', value: 'Male' },
    //       { label: 'Female', value: 'Female' }
    //     ],
    //     value: 'Male'
    //   },
    //   {
    //     name: 'country',
    //     label: 'Country',
    //     type: 'dropdown',
    //     options: [
    //       { label: 'USA', value: 'USA' },
    //       { label: 'Canada', value: 'Canada' },
    //       { label: 'UK', value: 'UK' }
    //     ],
    //     value: 'USA'
    //   }
    // ],
    // switches: [
    //   { label: 'IP Strict Anomalies', model: 'ipStrict' },
    //   { label: 'UDP Empty Checksum Check', model: 'udpChecksum' },
    //   { label: 'IP Land Attack (Src=Dst) Anomaly', model: 'ipLandAttack' },
    //   { label: 'IP Private Check', model: 'ipPrivate' },
    //   { label: 'IP Multicast Check', model: 'ipMulticast' }
    // ],
    // checkboxGroups: [
    //   {
    //     label: 'IP Fragment Check',
    //     model: 'ipFragment',
    //     options: [
    //       { value: 'otherProtocol', label: 'Other Protocol Fragment' },
    //       { value: 'tcpFragment', label: 'TCP Fragment' },
    //       { value: 'udpFragment', label: 'UDP Fragment' }
    //     ]
    //   },
    //   {
    //     label: 'IP Reputation Categories',
    //     model: 'ipReputation',
    //     options: [
    //       { value: 'ddos', label: 'DDoS' },
    //       { value: 'anonymous', label: 'Anonymous' },
    //       { value: 'phishing', label: 'Phishing' },
    //       { value: 'spam', label: 'Spam' },
    //       { value: 'tor', label: 'Tor' }
    //     ]
    //   }
    ]


    // switches: [
    //   { label: 'IP Strict Anomalies', model: 'ipStrict' },
    //   { label: 'UDP Empty Checksum Check', model: 'udpChecksum' },
    //   { label: 'IP Land Attack (Src=Dst) Anomaly', model: 'ipLandAttack' },
    //   { label: 'IP Private Check', model: 'ipPrivate' },
    //   { label: 'IP Multicast Check', model: 'ipMulticast' }
    // ],
    // checkboxGroups: [
    //   {
    //     label: 'IP Fragment Check',
    //     model: 'ipFragment',
    //     options: [
    //       { value: 'otherProtocol', label: 'Other Protocol Fragment' },
    //       { value: 'tcpFragment', label: 'TCP Fragment' },
    //       { value: 'udpFragment', label: 'UDP Fragment' }
    //     ]
    //   },
    //   {
    //     label: 'IP Reputation Categories',
    //     model: 'ipReputation',
    //     options: [
    //       { value: 'ddos', label: 'DDoS' },
    //       { value: 'anonymous', label: 'Anonymous' },
    //       { value: 'phishing', label: 'Phishing' },
    //       { value: 'spam', label: 'Spam' },
    //       { value: 'tor', label: 'Tor' }
    //     ]
    //   }
    // ]

  };

  @ViewChild('dt', {static: true}) dt: any;

  constructor(private productService: ProfileSettingsService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.productService.getProducts('addresses').then((data: ProfileSettingsModel[]) => this.products = data);

    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'price', header: 'IP Strict Anomalies'},
      {field: 'quantity', header: 'IP Private Check'},
      {field: 'rating', header: 'IP Multicast Check'},
      {field: 'category', header: 'IP Fragment Check'},
      {field: 'description', header: 'IP Reputation Categories '}
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
    console.log('f')
    this.deleteProductsDialog = true;
  }

  editProduct(product?: ProfileSettingsModel) {
    this.visibleSidebar = true;
    product = this.products.filter(val => this.selectedProducts.includes(val))[0];
    this.product = {...product};
    // this.productDialog = true;
  }

  visibleChange(e: any) {
    this.visibleSidebar = e;
  }

  deleteProduct(product: ProfileSettingsService) {
    this.deleteProductDialog = true;
    this.product = {...product};
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Deleted`, life: 3000});
    this.selectedProducts = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.products = this.products.filter(val => val.id !== this.product.id);
    this.messageService.add({severity: 'success', summary: 'Successful', detail: `${this.formConfig.name} Deleted`, life: 3000});
    this.product = {};
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct(e?: any) {
    console.log(e)
    this.submitted = true;

    if (e.name?.trim()) {
      debugger
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
      this.productDialog = false;
      this.product = {};
    }
  }

  onGlobalFilter( event: Event) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
