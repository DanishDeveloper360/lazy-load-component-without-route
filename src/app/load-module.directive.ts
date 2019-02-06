import { Directive, OnInit, OnDestroy, Input, ViewContainerRef, Injector,
   NgModuleFactoryLoader, Inject, NgModuleFactory, NgModuleRef, Type } from '@angular/core';
import { LAZY_MODULES_MAP, LAZY_MODULES } from './app.provider';
type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('loadModule') moduleName: keyof LAZY_MODULES;

  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) {}

  ngOnInit() {
    this.loader
      .load(this.modulesMap[this.moduleName])
      .then((moduleFactory: NgModuleFactory<any>) => {
        this.moduleRef = moduleFactory.create(this.injector);
        const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
          .rootComponent;

        const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
          rootComponent
        );

        this.vcr.createComponent(factory);
      });
  }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.moduleRef && this.moduleRef.destroy();
  }
}
