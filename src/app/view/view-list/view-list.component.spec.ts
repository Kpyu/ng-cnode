/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ViewListComponent } from './view-list.component';
import { DataServiceService } from '../../api/data-service.service'


describe('Component: ViewList', () => {
  inject([ViewListComponent], (viewList: ViewListComponent) => {
    expect(viewList).toBeTruthy();
  });
  // it('should create an instance', () => {
  //   let component = new ViewListComponent(DataServiceService);
  //   expect(component).toBeTruthy();
  // });
});
