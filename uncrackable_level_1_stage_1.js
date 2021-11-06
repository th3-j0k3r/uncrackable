//frida -U --no-pause -l uncrackable_level_1_stage_1.js -f owasp.mstg.uncrackable

Java.perform(function() {
  var sys = Java.use("java.lang.System")
  sys.exit.implementation = function() {
    console.log("bypass");
  }
  
// end of level 1 stage one 

//start of level 1 stage two
  function bufferToString(buf) {
  var result = "";
  for(var i = 0; i < buf.length; ++i){
    result += (String.fromCharCode(buf[i]));
  }
  return result;
}

  let a = Java.use("sg.vantagepoint.a.a")
  a.a.implementation = function(a1, a2) {
    let retval = a.a.call(this, a1, a2)
    console.log(bufferToString(retval))
    return retval;
}

//end of level 1 stage one

});