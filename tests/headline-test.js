(function() {

  describe("HeadLine", function() {
    it("Saves a headline text", function() {
      var headline = new headLine("Boris Johnson Quits");
      assert.isTrue(headline.text === "Boris Johnson Quits")
    });

    it("#show method returns the headline text", function() {
      var headline = new headLine("Boris Johnson Quits");
      assert.isTrue(headline.show() === "Boris Johnson Quits")
    })
  });
})()
