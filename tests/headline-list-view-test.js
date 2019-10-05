(function() {

  describe("HeadLine-List-View", function() {

  var headline = new headLine("Brexit Cancelled!");
  var headlinelist = new headLineList;
      headlinelist.add(headline);
  var headlinelistview = new headLineListView(headlinelist);

    it("Stores a headlineList on Instantiation", function() {
      assert.isTrue(headlinelistview.headLineList === headlinelist)
    });

    it("#html method renders a single headline to html", function() {
      assert.isTrue( headlinelistview.html() ===
      "<div><ul><li>Brexit Cancelled!</li></ul></div>")
    })

    it("#html method renders two headlines to html", function() {
      var headline1 = new headLine("Brexit Cancelled!");
      var headline2 = new headLine("Moon is Cheese!");
      var headlinelist = new headLineList;
          headlinelist.add(headline1);
          headlinelist.add(headline2);
      var headlinelistview = new headLineListView(headlinelist);
        assert.isTrue(headlinelistview.html() ===
      "<div><ul><li>Brexit Cancelled!</li><li>Moon is Cheese!</li></ul></div>")
    })

  });

})()
