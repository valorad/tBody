/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GMapComponent } from './gmap.component';

describe('GMapComponent', () => {
  let component: GMapComponent;
  let fixture: ComponentFixture<GMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
