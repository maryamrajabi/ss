import {Component, OnInit} from '@angular/core';
import {ProfileSettingsService} from '../../service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BaseComponent} from '../../../../shared/Class/BaseCrudComponent';
import {AddressModel} from '../../../protection-settings/model/protection-settings-model';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {tableColumns, formConfig} from './config';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

@Component({
  selector: 'app-tcp-profile',
  standalone: false,
  providers: [MessageService, ConfirmationService],

  templateUrl: './tcp-profile.component.html',
  styleUrl: './tcp-profile.component.scss'
})
export class TcpProfileComponent extends BaseComponent<AddressModel> implements OnInit {

  override cols: TableColumnModel[] = tableColumns;
  override formConfig: FormConfigModel = formConfig;

  constructor(
    private getDataService: ProfileSettingsService<AddressModel>,
    messageService: MessageService
  ) {
    super(messageService);
  }

  ngOnInit() {
    this.getDataService.getData('tcp-profile').then((data: AddressModel[]) => (this.data = data));
  }

}


