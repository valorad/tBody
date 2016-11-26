/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GSCComponent } from './g-sc.component';

describe('GSCComponent', () => {
  let component: GSCComponent;
  let fixture: ComponentFixture<GSCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
