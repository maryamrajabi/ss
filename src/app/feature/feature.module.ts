import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    NotfoundComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class FeatureModule { }
