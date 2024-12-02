import {Component, OnInit} from '@angular/core';
import {ProfileSettingsModel} from './model/profile-settings-model';
import {MessageService} from 'primeng/api';
import {ProfileSettingsService} from './service/profile-settings.service';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-profiles-settings',
  standalone: false,
  templateUrl: './profiles-settings.component.html',
  styleUrl: './profiles-settings.component.scss'
})
export class ProfilesSettingsComponent {
}
