function describe(description, itBlock) {
  console.log("Describe: " + description)
  itBlock()
}

function it(moreDescription, test) {
  console.log("     It: " + moreDescription)
  test()
}

var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is falsy")
    } else {
      console.log("          Result: Assertion passed \n --------------")
    }
  }
};
