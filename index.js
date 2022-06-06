function shout(hello) {
    return hello.toUpperCase();
}
function whisper(HELLO) {
    return HELLO.toLowerCase();
}
 function logShout(spy) {

     console.log(spy.toUpperCase());
 }
 function logWhisper(spy) {
     console.log(spy.toLowerCase());
 }
 function sayHiToHeadphonedRoomate (hello) {
     var cantUnswer = "I can't hear you!";
     var yesUnswer = "YES INDEED!";
     var lovUnswer = "I would love to.";
     if ( HELLO.toLowerCase (hello) === hello) {
         return cantUnswer;
     }

     else if (hello.toUpperCase(HELLO) === HELLO){
         return yesUnswer;
     }
     else if ("I would love to!" === hello)
     return lovUnswer 
    } 
