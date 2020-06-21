// So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var ind in names) {
  var firstLetter = names[ind].toLowerCase()[0]
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[ind])
  } else {
    helloSpeaker.speak(names[ind])
  }
}
})();

