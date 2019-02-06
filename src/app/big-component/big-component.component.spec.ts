import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigComponentComponent } from './big-component.component';

describe('BigComponentComponent', () => {
  let component: BigComponentComponent;
  let fixture: ComponentFixture<BigComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
