(function(exports) {

  function headLineList() {
    this.list = []
  }

  headLineList.prototype.add = function(headline) {
    this.list.push(headline)
  }

  exports.headLineList = headLineList

})(this)
