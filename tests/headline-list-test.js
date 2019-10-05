(function() {

  describe("HeadlineList", function() {
    it("Is initialized with an empty array", function() {
      headlinelist = new headLineList;
      assert.isTrue(headlinelist.list.length === 0)
    });

    it("#add method adds a new headline to the list", function() {
      headline = new headLine("Brexit Cancelled!");
      headlinelist = new headLineList;
      headlinelist.add(headline);
      assert.isTrue(headlinelist.list[0].text === "Brexit Cancelled!")
    })
  });


})()
