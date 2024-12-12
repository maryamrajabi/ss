import {Component, OnInit} from '@angular/core';
import {ProfileSettingsService} from '../../service/profile-settings.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BaseComponent} from '../../../../shared/Class/BaseCrudComponent';
import {AddressModel} from '../../../protection-settings/model/protection-settings-model';
import {TableColumnModel} from '../../../../shared/model/table-column-model';
import {tableColumns, formConfig} from './config';
import {FormConfigModel} from '../../../../shared/model/form-config-model';

@Component({
  selector: 'app-icmp-profile',
  standalone: false,
  providers: [MessageService, ConfirmationService],

  templateUrl: './icmp-profile.component.html',
  styleUrl: './icmp-profile.component.scss'
})
export class IcmpProfileComponent  extends BaseComponent<AddressModel> implements OnInit {

  override cols: TableColumnModel[] = tableColumns;
  override formConfig: FormConfigModel = formConfig;

  constructor(
    private getDataService: ProfileSettingsService<AddressModel>,
    messageService: MessageService
  ) {
    super(messageService);
  }

  ngOnInit() {
    this.getDataService.getData('icmp-profile').then((data: AddressModel[]) => (this.data = data));
  }

}
