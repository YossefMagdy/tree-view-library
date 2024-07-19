import { NgModule } from '@angular/core';
import { NgxRootedComponent } from './ngx-rooted.component';
import { RecursiveTreeComponent } from './recursive-tree/recursive-tree.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxRootedComponent,
    RecursiveTreeComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxRootedComponent
  ]
})
export class NgxRootedModule { }
