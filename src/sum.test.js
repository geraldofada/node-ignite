// Example for testing

const sum = require('./sum');

describe('sums correctly', () => {
	test('2 + 2 = 4', () => {
		expect(sum(2, 2)).toEqual(4);
	});
	test('10 + 32 = 42', () => {
		expect(sum(10, 32)).toEqual(42);
	});
});