(function(window){
var GoodByeGreeter = {};
GoodByeGreeter.speakWord = "Good Bye";
GoodByeGreeter.speak = function(name) {
  console.log(GoodByeGreeter.speakWord + " " + name);
}
window.GoodByeGreeter=GoodByeGreeter;
})(window);


