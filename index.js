document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
  var dataText = [ "am Ivan🖐", "am a student.", "am passionate in web development."/*, "enjoy designing websites."*/];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {

    if (i < (text.length)) {
      document.querySelector("#typewriter-text").innerHTML = "Hi, I " + text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }

    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

    function StartTextAnimation(i) {
    try {
      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i+1);   
        });
      }         
      } catch (error) {
        setTimeout(function() {
          StartTextAnimation(0);
        }, 1000);         
      }
  }
  // start the text animation
  StartTextAnimation(0);
});