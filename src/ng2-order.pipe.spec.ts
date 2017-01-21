/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Ng2OrderPipe } from './ng2-order.pipe';

describe('Ng2OrderPipe', () => {
  let pipe: Ng2OrderPipe;

  beforeEach(() => {
    pipe = new Ng2OrderPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array', () => {
    expect(pipe.transform([], 'anything')).toEqual([]);
  });

  it('should return array with one element', () => {
    const array = [{ id: 1 }];
    expect(pipe.transform(array, 'id')).toEqual(array);
  });

  it('should return array as it is', () => {
    const alreadySortedArray = [{ id: 1 }, { id: 2 }];
    expect(pipe.transform(alreadySortedArray, 'id')).toEqual(alreadySortedArray);
  });

  it('should order by id', () => {
    const numbers = [
      { id: 3 },
      { id: 2 },
      { id: 1 }
    ];
    const sortedNumbers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

    expect(pipe.transform(numbers, 'id')).toEqual(sortedNumbers);
  });

  it('should order by a', () => {
    const arrayA = [{ a: 2 }, { a: 1 }, { a: 3 }];
    const arrayB = [{ a: 1 }, { a: 2 }, { a: 3 }];

    expect(pipe.transform(arrayA, 'a')).toEqual(arrayB);
  });

  it('should order strings too', () => {
    const array = [{ string: 'abc' }, { string: 'aaa' }, { string: 'b' }];
    const arraySorted = [{ string: 'aaa' }, { string: 'abc' }, { string: 'b' }];

    expect(pipe.transform(array, 'string')).toEqual(arraySorted);
  });


  it('should not revert ordered array', () => {
    const array = [{ value: 10 }, { value: 1 }, { value: 5 }];
    const arraySorted = [{ value: 1 }, { value: 5 }, { value: 10 }];

    expect(pipe.transform(array, 'value', false)).toEqual(arraySorted);
  });

  it('should revert ordered array', () => {
    const array = [{ value: 10 }, { value: 1 }, { value: 5 }];
    const arraySortedAndReverse = [{ value: 10 }, { value: 5 }, { value: 1 }];

    expect(pipe.transform(array, 'value', true)).toEqual(arraySortedAndReverse);
  });
});
