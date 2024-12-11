import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableComponentComponent} from '../table-component/table-component.component';
import {ConfirmDialogComponent} from '../dialog/confirm-dialog/confirm-dialog.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ToolbarComponentComponent} from '../toolbar-component/toolbar-component.component';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-base-layout-component',
  imports: [TableComponentComponent, ConfirmDialogComponent, SidebarComponent, ToolbarComponentComponent, ToastModule],
  standalone: true,
  templateUrl: './base-layout-component.component.html',
  styleUrl: './base-layout-component.component.scss'
})
export class BaseLayoutComponentComponent {
  @Input() selectedProducts: any[] = [];
  @Input() visibleSidebar: boolean = false;
  @Input() formConfig: any;
  @Input() cols: any[] = [];
  @Input() data: any[] = [];
  @Input() deleteProductsDialog: boolean = false;

  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @Output() onClearSelection = new EventEmitter<void>();
  @Output() onSidebarChange = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<any>();
  @Output() onSidebarCancel = new EventEmitter<void>();
  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onDeleteConfirm = new EventEmitter<any>();
}
