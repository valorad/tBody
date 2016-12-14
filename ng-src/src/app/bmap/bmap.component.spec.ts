/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BMapComponent } from './bmap.component';

describe('BMapComponent', () => {
  let component: BMapComponent;
  let fixture: ComponentFixture<BMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
