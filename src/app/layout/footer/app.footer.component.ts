import { Component } from '@angular/core';
import {LayoutService} from '../service/app.layout.service';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './app.footer.component.html',
  styleUrl: './app.footer.component.scss'
})
export class AppFooterComponent {
  constructor(public layoutService: LayoutService) { }

}
