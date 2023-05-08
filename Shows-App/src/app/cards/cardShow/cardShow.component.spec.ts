/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardShowComponent } from './cardShow.component';

describe('CardShowComponent', () => {
  let component: CardShowComponent;
  let fixture: ComponentFixture<CardShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
