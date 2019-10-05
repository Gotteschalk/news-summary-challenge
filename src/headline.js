(function(exports) {

  function headLine(text) {
    this.text = text
  }

  headLine.prototype.show = function() {
    return this.text
  }

  exports.headLine = headLine

})(this)
