import { NgModule } from '@angular/core';

//primeNg
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card'
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
