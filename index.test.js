const isWorkingDay = require("./index");

describe("It working days", () => {
    test("New year", () => {
        const dateToTest = new Date(2021, 0, 1);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Epiphany", () => {
        const dateToTest = new Date(2021, 0, 6);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Easter Sunday", () => {
        const dateToTest = new Date(2021, 3, 2);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Easter Monday", () => {
        const dateToTest = new Date(2021, 3, 5);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Liberation Day", () => {
        const dateToTest = new Date(2021, 3, 25);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Labour Day", () => {
        const dateToTest = new Date(2021, 4, 1);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Whit Monday", () => {
        const dateToTest = new Date(2021, 4, 24);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Republic Day", () => {
        const dateToTest = new Date(2021, 5, 2);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Saints Peter and Paul", () => {
        const dateToTest = new Date(2021, 5, 29);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Assumption Day", () => {
        const dateToTest = new Date(2021, 7, 15);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("All Saints' Day", () => {
        const dateToTest = new Date(2021, 10, 1);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("St. Ambrose", () => {
        const dateToTest = new Date(2021, 11, 7);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Immaculate Conception Day", () => {
        const dateToTest = new Date(2021, 11, 8);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("Christmas Day", () => {
        const dateToTest = new Date(2021, 11, 25);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });

    test("St. Stephen's Day", () => {
        const dateToTest = new Date(2021, 11, 26);
        const result = isWorkingDay(dateToTest);
        const expected = true;
        expect(expected).toBe(result);
    });
});
