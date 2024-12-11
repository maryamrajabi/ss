import {Component, OnInit} from '@angular/core';
import {AddressModel} from '../../model/protection-settings-model';
import {ProfileSettingsService} from '../../../profiles-settings/service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {formConfig, tableColumns} from './config';
import {BaseComponent} from '../../../../shared/Class/BaseCrudComponent';
import {FormConfigModel} from '../../../../shared/model/form-config-model';
import {TableColumnModel} from '../../../../shared/model/table-column-model';

@Component({
  selector: 'app-protection-policies',
  standalone: false,
  providers: [MessageService, ConfirmationService],
  templateUrl: './protection-policies.component.html',
  styleUrl: './protection-policies.component.scss'
})
export class ProtectionPoliciesComponent extends BaseComponent<AddressModel> implements OnInit {

  override cols: TableColumnModel[] = tableColumns;
  override formConfig: FormConfigModel = formConfig;

  constructor(
    private getDataService: ProfileSettingsService<AddressModel>,
    messageService: MessageService
  ) {
    super(messageService);
  }

  ngOnInit() {
    this.getDataService.getData('protection-policies').then((data: AddressModel[]) => (this.data = data));
  }
}
