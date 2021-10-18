//frida -U --no-pause -l uncrackable_level_1_stage_1.js -f owasp.mstg.uncrackable

Java.perform(function() {
  var sys = Java.use("java.lang.System")
  sys.exit.implementation = function() {
    console.log("bypass");
  }
    Java.use("sg.vantagepoint.uncrackable1.a").a.implementation = function() {
    console.log("");
    }
});