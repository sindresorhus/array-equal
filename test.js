import test from 'ava';
import arrayEqual from './index.js';

test('compare arrays with same numeric elements', t => {
	t.true(arrayEqual([1, 2, 3], [1, 2, 3]));
});

test('compare arrays with different numeric elements', t => {
	t.false(arrayEqual([1, 2, 3], [4, 5, 6]));
});

test('compare arrays of different lengths', t => {
	t.false(arrayEqual([1, 2, 3], [1, 2, 3, 4]));
});

test('compare arrays with same string elements', t => {
	t.true(arrayEqual(['a', 'b', 'c'], ['a', 'b', 'c']));
});

test('compare arrays with different string elements', t => {
	t.false(arrayEqual(['a', 'b', 'c'], ['d', 'e', 'f']));
});

test('compare arrays with mixed types', t => {
	t.false(arrayEqual(['1', 2, 3], [1, 2, 3]));
});

test('compare empty arrays', t => {
	t.true(arrayEqual([], []));
});

test('compare arrays with same objects', t => {
	const object = {key: 'value'};
	t.true(arrayEqual([object, object], [object, object]));
});

test('compare arrays with different objects', t => {
	t.false(arrayEqual([{key: 'value'}], [{key: 'value'}]));
});
