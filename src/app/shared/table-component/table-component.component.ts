import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableModule} from 'primeng/table';
import {CommonModule, DatePipe, NgClass} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import {OverlayModule} from 'primeng/overlay';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@Component({
  selector: 'app-table-component',
  imports: [
    TableModule,
    CommonModule,
    DatePipe,
    ButtonModule,
    BadgeModule,
    OverlayModule,
    OverlayPanelModule
  ],
  standalone: true,
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.scss'
})
export class TableComponentComponent {

  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  @Input() selectedRow: any[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  @Input() columns: { field: string; header: string }[] = []; // ستون‌ها
  @Input() data: any[] = []; // داده‌ها
  @Input() selectable = false; // امکان انتخاب ردیف‌ها
  @Output() rowSelect = new EventEmitter<any>(); // رویداد انتخاب ردیف
  @Output() rowDelete = new EventEmitter<any>(); // رویداد حذف ردیف

  onRowSelect(row?: any) {
    this.rowSelect.emit(row); // ارسال ردیف انتخابی به والد
  }

  onRowDelete(row: any) {
    this.rowDelete.emit(row); // ارسال ردیف حذف‌شده به والد
  }

}
