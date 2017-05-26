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

  it('should work with not defined as well', () => {
    let array;
    expect(pipe.transform(array, 'value')).toEqual(array);
  });

  it('should array without expression', () => {
    const array = [3, 2, 1];
    const sortedArray = [1, 2, 3];

    expect(pipe.transform(array)).toEqual(sortedArray);
  });

  it('should chars array without expression', () => {
    const array = ['b', 'c', 'a'];
    const sortedArray = ['a', 'b', 'c'];

    expect(pipe.transform(array)).toEqual(sortedArray);
  });

  it('should ordered by array', () => {
    const array = [
      { values: [10, 0] },
      { values: [1, 2] },
      { values: [0, -1, 1] }
    ];
    const arraySorted = [
      { values: [0, -1, 1] },
      { values: [1, 2] },
      { values: [10, 0] }
    ];

    expect(pipe.transform(array, 'values')).toEqual(arraySorted);
  });

  it('should ordered nested elements', () => {
    const object = {
      b: {
        c: [2, 1, 3],
        d: ['h', 'ch'],
        e: [{}, { f: 'g' }],
        f: 'i'
      }
    };
    const sortedObject = {
      b: {
        c: [1, 2, 3],
        d: ['h', 'ch'],
        e: [{}, { f: 'g' }],
        f: 'i'
      }
    };

    expect(pipe.transform(object, 'b.c')).toEqual(sortedObject);
    expect(pipe.transform(object, 'b.e[1].f')).toEqual(object);
    expect(pipe.transform(object, 'b.e[2].f')).toEqual(object);
  });

  it('should not throw error on ordering "undefined" deep element', () => {
    const object = {
      b: {
        e: [{}, { f: 'g' }],
      }
    };

    expect(pipe.transform(object, 'b.e[2].f')).toEqual(object);
  });

  it('should sort deep elements', () => {
    const object = {
      lists: {
        users: [
          { id: 3 },
          { id: 2 },
          { id: 1 }
        ]
      }
    };
    const objectSorted = {
      lists: {
        users: [
          { id: 1 },
          { id: 2 },
          { id: 3 }
        ]
      }
    };

    expect(pipe.transform(object, 'lists.users.id')).toEqual(objectSorted);
  });
});
