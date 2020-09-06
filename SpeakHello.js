(function (window){
  var HelloGreeter = {};
  HelloGreeter.speakWord = "Hello";
  HelloGreeter.speak = function(name) {
  console.log(HelloGreeter.speakWord + " " + name);
  }
	window.HelloGreeter = HelloGreeter;
})(window);








