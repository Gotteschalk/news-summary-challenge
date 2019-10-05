(function(exports) {

  function headLineListView(headlinelist) {
    this.headLineList = headlinelist
  }

  headLineListView.prototype.html = function() {
    var headLineArray = ["<div><ul>"];
    var i;
    for ( i = 0; i < this.headLineList.list.length; i++) {
      headLineArray.push("<li>" + this.headLineList.list[i].text + "</li>");
      }
    headLineArray.push("</ul></div>");
    return headLineArray.join("");

  }

  exports.headLineListView = headLineListView

})(this)
