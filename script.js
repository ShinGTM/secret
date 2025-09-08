$(document).ready(function() {
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  
  function open() {
    envelope.addClass("open").removeClass("close");
    $("#popupMessage").addClass("show");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    $("#popupMessage").removeClass("show");
  }
  $(document).ready(function() {
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var audio = document.getElementById("bgMusic");
  
  function open() {
    envelope.addClass("open").removeClass("close");
    playMusic();
  }
  
  function close() {
    envelope.addClass("close").removeClass("open");
    audio.pause();
    audio.currentTime = 0;
  }
  
  function playMusic() {
    audio.currentTime = 11; // Start at 11 seconds
    audio.play().catch((e) => {
      console.log("Autoplay blocked:", e);
    });
  }
  
  envelope.click(function() {
    open();
  });
  
  btn_open.click(function() {
    open();
  });
  
  btn_reset.click(function() {
    close();
  });
});

  envelope.click(open);
  btn_open.click(open);
  btn_reset.click(close);
});
