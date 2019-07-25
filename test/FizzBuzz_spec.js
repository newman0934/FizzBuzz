var should = chai.should()
describe('test function FizzBuzz', function() {
  it('Multiple of input 3 should be Fizz', function() {
    var result = fizzBuzz(3)
    result.should.be.equal("Fizz")
  })
  it('Multiple of input 5 should be Buzz', function() {
    var result = fizzBuzz(5)
    result.should.be.equal("Buzz")
  })
  it('Multiple of input 5 or 3 should be FizzBuzz', function() {
    var result = fizzBuzz(15)
    result.should.be.equal("FizzBuzz")
  })
  it('input another number should be number', function() {
    var result = fizzBuzz(4)
    result.should.be.equal(4)
  })
})