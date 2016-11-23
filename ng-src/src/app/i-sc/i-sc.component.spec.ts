/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ISCComponent } from './i-sc.component';

describe('ISCComponent', () => {
  let component: ISCComponent;
  let fixture: ComponentFixture<ISCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
