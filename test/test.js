QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(add("Ali"), 3, 'Positive integers')
  assert.equal(add("Ali al ali"), 10, 'Negative integers')
})
