import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {NgIf} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {Ripple} from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar-component',
  imports: [
    ButtonDirective,
    InputTextModule,
    NgIf,
    PrimeTemplate,
    Ripple,
    ToolbarModule
  ],
  standalone: true,
  templateUrl: './toolbar-component.component.html',
  styleUrl: './toolbar-component.component.scss'
})
export class ToolbarComponentComponent {
  @Input() selectedProducts: any[] = [];
  @Input() dt: any[] = [];
  @Input() visibleSidebar2: boolean = false;
  @Output() create = new EventEmitter<void>();
  @Output() clearSelection = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() filter = new EventEmitter<Event>();


  editProduct() {

  }
  deleteSelectedProducts() {

  }
  onGlobalFilter(val?: any, val1?: any) {

  }

}
