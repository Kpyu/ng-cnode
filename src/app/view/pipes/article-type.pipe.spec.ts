/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ArticleTypePipe } from './article-type.pipe';

describe('Pipe: ArticleType', () => {
  it('create an instance', () => {
    let pipe = new ArticleTypePipe();
    expect(pipe).toBeTruthy();
  });
});
