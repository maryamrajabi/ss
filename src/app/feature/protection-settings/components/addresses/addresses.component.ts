import {Component, OnInit} from '@angular/core';
import {ProfileSettingsService} from '../../../profiles-settings/service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AddressModel} from '../../model/protection-settings-model';
import {formConfig, tableColumns} from './config';
import {BaseComponent} from '../../../../shared/Class/BaseCrudComponent';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

@Component({
  selector: 'app-addresses',
  standalone: false,
  providers: [MessageService, ConfirmationService],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss'
})
export class AddressesComponent extends BaseComponent<AddressModel> implements OnInit {

  override cols: TableColumnModel[] = tableColumns;
  override formConfig: FormConfigModel = formConfig;

  constructor(
    private getDataService: ProfileSettingsService<AddressModel>,
    messageService: MessageService
  ) {
    super(messageService);
  }

  ngOnInit() {
    this.getDataService.getData('addresses').then((data: AddressModel[]) => (this.data = data));
  }
}
