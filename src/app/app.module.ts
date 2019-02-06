import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadModuleDirective } from './load-module.directive';
import { TestComponentComponent } from './test-component/test-component.component';

import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoadModuleDirective,
    TestComponentComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
