/* tslint:disable:no-unused-variable */

import { OrderPipe } from "./ngx-order.pipe";

describe("OrderPipe", () => {
  let pipe: OrderPipe;

  beforeEach(() => {
    pipe = new OrderPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return empty array", () => {
    expect(pipe.transform([], "anything")).toEqual([]);
  });

  it("should return array with one element", () => {
    const array = [{ id: 1 }];
    expect(pipe.transform(array, "id")).toEqual(array);
  });

  it("should return array as it is", () => {
    const alreadySortedArray = [{ id: 1 }, { id: 2 }];
    expect(pipe.transform(alreadySortedArray, "id")).toEqual(
      alreadySortedArray
    );
  });

  it("should order by id", () => {
    const numbers = [{ id: 3 }, { id: 2 }, { id: 1 }];
    const sortedNumbers = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(pipe.transform(numbers, "id")).toEqual(sortedNumbers);
  });

  it("should order by a", () => {
    const arrayA = [{ a: 2 }, { a: null }, { a: 1 }, { a: 3 }];
    const arrayB = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: null }];

    expect(pipe.transform(arrayA, "a")).toEqual(arrayB);
  });

  it("should order strings too", () => {
    const array = [{ string: "abc" }, { string: "aaa" }, { string: "b" }];
    const arraySorted = [{ string: "aaa" }, { string: "abc" }, { string: "b" }];

    expect(pipe.transform(array, "string")).toEqual(arraySorted);
  });

  it("should order case-insensitively strings too", () => {
    const array = [{ string: "Abc" }, { string: "aaa" }, { string: "b" }];
    const arraySorted = [{ string: "aaa" }, { string: "Abc" }, { string: "b" }];

    expect(pipe.transform(array, "string", false, true)).toEqual(arraySorted);
  });

  it("should not revert ordered array", () => {
    const array = [{ value: 10 }, { value: 1 }, { value: 5 }];
    const arraySorted = [{ value: 1 }, { value: 5 }, { value: 10 }];

    expect(pipe.transform(array, "value", false)).toEqual(arraySorted);
  });

  it("should revert ordered array", () => {
    const array = [{ value: 10 }, { value: 1 }, { value: 5 }];
    const arraySortedAndReverse = [{ value: 10 }, { value: 5 }, { value: 1 }];

    expect(pipe.transform(array, "value", true)).toEqual(arraySortedAndReverse);
  });

  it("should work with not defined as well", () => {
    let array;
    expect(pipe.transform(array, "value")).toEqual(array);
  });

  it("should array without expression", () => {
    const array = [3, 2, 1];
    const sortedArray = [1, 2, 3];

    expect(pipe.transform(array)).toEqual(sortedArray);
  });

  it("should chars array without expression", () => {
    const array = ["b", "c", "a"];
    const sortedArray = ["a", "b", "c"];

    expect(pipe.transform(array)).toEqual(sortedArray);
  });

  it("should ordered by array", () => {
    const array = [
      { values: [10, 0] },
      { values: [1, 2] },
      { values: [0, -1, 1] },
    ];
    const arraySorted = [
      { values: [0, -1, 1] },
      { values: [1, 2] },
      { values: [10, 0] },
    ];

    expect(pipe.transform(array, "values")).toEqual(arraySorted);
  });

  it("should ordered nested elements", () => {
    const object = {
      b: {
        c: [2, 1, 3],
        d: ["h", "ch"],
        e: [{}, { f: "g" }],
        f: "i",
      },
    };
    const sortedObject = {
      b: {
        c: [1, 2, 3],
        d: ["h", "ch"],
        e: [{}, { f: "g" }],
        f: "i",
      },
    };

    expect(pipe.transform(object, "b.c")).toEqual(sortedObject);
    expect(pipe.transform(object, "b.e[1].f")).toEqual(object);
    expect(pipe.transform(object, "b.e[2].f")).toEqual(object);
  });

  it('should not throw error on ordering "undefined" deep element', () => {
    const object = {
      b: {
        e: [{}, { f: "g" }],
      },
    };

    expect(pipe.transform(object, "b.e[2].f")).toEqual(object);
  });

  it("should sort deep elements", () => {
    const object = {
      lists: {
        users: [{ id: 3 }, { id: 2 }, { id: 1 }],
      },
    };
    const objectSorted = {
      lists: {
        users: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    };

    expect(pipe.transform(object, "lists.users.id")).toEqual(objectSorted);
  });

  it("should sort array by deep prop", () => {
    const arr = [
      { customer: { name: "test" } },
      { customer: { name: "b" } },
      { customer: { name: "a" } },
      { customer: { name: "c" } },
    ];

    const res = [
      { customer: { name: "a" } },
      { customer: { name: "b" } },
      { customer: { name: "c" } },
      { customer: { name: "test" } },
    ];

    expect(pipe.transform(arr, "customer.name")).toEqual(res);

    const array = [
      { customer: { number: 25 } },
      { customer: { number: 5 } },
      { customer: { number: 0 } },
      { customer: { number: 15 } },
      { customer: { number: 1 } },
    ];

    const result = [
      { customer: { number: 0 } },
      { customer: { number: 1 } },
      { customer: { number: 5 } },
      { customer: { number: 15 } },
      { customer: { number: 25 } },
    ];

    expect(pipe.transform(array, "customer.number")).toEqual(result);
  });

  it("should sort case-insensitively array by deep prop", () => {
    const arr = [
      { customer: { name: "test" } },
      { customer: { name: "B" } },
      { customer: { name: "a" } },
      { customer: { name: "c" } },
    ];

    const res = [
      { customer: { name: "a" } },
      { customer: { name: "B" } },
      { customer: { name: "c" } },
      { customer: { name: "test" } },
    ];

    expect(pipe.transform(arr, "customer.name", false, true)).toEqual(res);
  });

  describe("number-like strings", () => {
    it("should compare two number-like strings", () => {
      const el1 = "1";
      const el2 = "10";
      const arr = [el2, el1];
      const res = [el1, el2];

      expect(pipe.transform(arr)).toEqual(res);
    });

    it("should compare two number-like strings with commas", () => {
      const el1 = "$299,000";
      const el2 = "$1,100,000";
      const arr = [el2, el1];

      expect(pipe.transform(arr)).toEqual(arr);
    });
  });

  describe("order with comparator", () => {
    it('should return same order with "0"-comparator', () => {
      const arr = [3, 2, 1];

      expect(pipe.transform(arr, null, false, true, () => 0)).toEqual(arr);
    });

    it("should change the order with custom comparator", () => {
      const arr = [3, 2, 1];
      const res = [1, 2, 3];

      expect(
        pipe.transform(arr, null, false, true, (a, b) => {
          return a > b ? 1 : -1;
        })
      ).toEqual(res);
    });

    it("should return change to order with custom comparator", () => {
      const arr = ["$10,0", "$2,0", "$100,0"];
      const res = ["$2,0", "$10,0", "$100,0"];

      const parse = (value) => parseInt(value.replace(/[^0-9]/g, ""), 10);

      expect(
        pipe.transform(arr, null, false, true, (a, b) => {
          const newA = parse(a);
          const newB = parse(b);
          return newA > newB ? 1 : -1;
        })
      ).toEqual(res);
    });

    describe("test not valid values for comparator", () => {
      const arr = [3, 2, 1];
      const res = [1, 2, 3];

      it("should still work if comparator is null", () => {
        expect(pipe.transform(arr, null, false, true, null)).toEqual(res);
      });

      it("should still work if comparator is undefined", () => {
        expect(pipe.transform(arr, null, false, true, undefined)).toEqual(res);
        expect(pipe.transform(arr, null, false, true, void 0)).toEqual(res);
      });

      it("should still work if comparator is not returning anything", () => {
        expect(pipe.transform(arr, null, false, true, () => {})).toEqual(arr);
      });
    });
  });

  describe("multi field sort", () => {
    it("should sort by multiple fields", () => {
      const array = [
        { name: "qwe", age: 1 },
        { name: "asd", age: 3 },
        { name: "asd", age: 2 },
      ];

      const result = [
        { name: "asd", age: 2 },
        { name: "asd", age: 3 },
        { name: "qwe", age: 1 },
      ];

      expect(pipe.transform(array, ["name", "age"])).toEqual(result);
    });

    describe("preserve sorting order", () => {
      const array = [
        { group: 1, value: 2 },
        { group: 1, value: 1 },
        { group: 3, value: 1 },
        { group: 2, value: 2 },
        { group: 2, value: 1 },
      ];

      it("should sort by multiple fields and preserve priority", () => {
        const result = [
          { group: 1, value: 1 },
          { group: 1, value: 2 },
          { group: 2, value: 1 },
          { group: 2, value: 2 },
          { group: 3, value: 1 },
        ];

        expect(pipe.transform(array, ["group", "value"])).toEqual(result);
      });

      it("should sort by multiple fields and preserve priority (reversed)", () => {
        const result = [
          { group: 1, value: 1 },
          { group: 2, value: 1 },
          { group: 3, value: 1 },
          { group: 1, value: 2 },
          { group: 2, value: 2 },
        ];

        expect(pipe.transform(array, ["value", "group"])).toEqual(result);
      });
    });

    it("should keep the same order", () => {
      const array = [
        { name: "q", age: 1 },
        { name: "a", age: 3 },
        { name: "a", age: 2 },
      ];

      expect(pipe.transform(array, [])).toEqual(array);
    });

    it("should not modify original array", () => {
      const array = [
        { key: "a", value: 3 },
        { key: "a", value: 1 },
      ];

      const result = [
        { key: "a", value: 1 },
        { key: "a", value: 3 },
      ];

      expect(pipe.transform(array, ["key", "value"])).toEqual(result);
      expect(array[0]).toEqual({ key: "a", value: 3 });
      expect(array[1]).toEqual({ key: "a", value: 1 });
    });
  });

  describe("sort booleans", () => {
    it("should return same simple false array", () => {
      const array = [{ value: false }];
      expect(pipe.transform(array, "value")).toEqual(array);
    });

    it("should return same simple true array", () => {
      const array = [{ value: true }];
      expect(pipe.transform(array, "value")).toEqual(array);
    });

    it("should sort booleans", () => {
      const array = [{ value: false }, { value: true }];
      expect(pipe.transform(array, "value")).toEqual(array);
    });
  });

  it("should keep same order", function () {
    const collection = [
      {
        name: "John",
        age: "25",
        score: 12,
        percent: "5.2%",
      },
      {
        name: "Mark",
        age: "19",
        score: 12,
        percent: "No Value",
      },
      {
        name: "Peter",
        age: "21",
        score: 12,
        percent: "1.8%",
      },
    ];

    expect(pipe.transform(collection, "score")).toEqual(collection);
  });

  it("should put undefine to the back", () => {
    const collection = [
      { a: { b: 3 } },
      { a: { b: 1 } },
      { a: undefined },
      { a: { b: 2 } },
    ];

    const result = [
      { a: { b: 1 } },
      { a: { b: 2 } },
      { a: { b: 3 } },
      { a: undefined },
    ];

    expect(pipe.transform(collection, "a.b")).toEqual(result);
  });

  describe("Dates", () => {
    it("should sort different dates", () => {
      const a = { createdAt: new Date(1980, 11, 1, 0, 0, 0, 0) };
      const b = { createdAt: new Date(1980, 8, 2, 0, 0, 0, 0) };
      const c = { createdAt: new Date(1980, 10, 3, 0, 0, 0, 0) };
      const collection = [a, b, c];
      const result = [b, c, a];

      expect(pipe.transform(collection, "createdAt")).toEqual(result);
    });

    it("should sort dates", () => {
      const a = { id: 1, info: { date: new Date(1980, 11, 31, 0, 0, 0, 0) } };
      const b = { id: 2, info: { date: new Date(1985, 8, 3, 0, 0, 0, 0) } };
      const c = { id: 3, info: { date: new Date(1978, 10, 12, 0, 0, 0, 0) } };
      const collection = [a, b, c];

      const result = [c, a, b];

      expect(pipe.transform(collection, "info.date")).toEqual(result);
      expect(pipe.transform(collection, "info.date", true)).toEqual(
        result.reverse()
      );
    });

    it("should sort dates also including null as date", () => {
      const a = { date: new Date(1980, 11, 31, 0, 0, 0, 0) };
      const b = { date: null };
      const c = { date: new Date(1978, 10, 12, 0, 0, 0, 0) };

      const collection = [a, b, c];
      const result = [c, a, b];

      expect(pipe.transform(collection, "date")).toEqual(result);
      expect(pipe.transform(collection, "date", true)).toEqual(
        result.reverse()
      );
    });

    describe("multisort with dates", () => {
      it("should sort dates equal dates", () => {
        const a = {
          info: { name: "Adam", date: new Date(1978, 10, 12, 0, 0, 0, 0) },
        };
        const b = {
          info: { name: "Julie", date: new Date(1978, 10, 12, 0, 0, 0, 0) },
        };
        const collection = [b, a];

        const result = [a, b];

        expect(pipe.transform(collection, ["info.date", "info.name"])).toEqual(
          result
        );
        expect(
          pipe.transform(collection, ["info.date", "info.name"], true)
        ).toEqual(result);
      });

      it("should sort dates different dates", () => {
        const a = {
          info: { name: "Adam", date: new Date(1970, 10, 12, 0, 0, 0, 0) },
        };
        const b = {
          info: { name: "Julie", date: new Date(1970, 11, 15, 0, 0, 0, 0) },
        };
        const c = {
          info: { name: "Julie", date: new Date(1970, 8, 15, 0, 0, 0, 0) },
        };
        const collection = [b, a, c];

        const result = [c, a, b];

        expect(pipe.transform(collection, ["info.date", "info.name"])).toEqual(
          result
        );
        expect(
          pipe.transform(collection, ["info.date", "info.name"], true)
        ).toEqual([b, a, c]);
      });
    });
  });
});
