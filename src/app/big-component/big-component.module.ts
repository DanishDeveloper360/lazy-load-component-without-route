import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigComponentComponent } from './big-component.component';

@NgModule({
  declarations: [BigComponentModule.rootComponent],
  entryComponents: [BigComponentModule.rootComponent],
    imports: [
    CommonModule,
  ]

})
export class BigComponentModule {
  static rootComponent = BigComponentComponent;
}
