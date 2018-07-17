$(document).ready(function() {

  // Exercise #5
  $("#hide").click(function() {
    $("img").hide();
  });
  $("#show").click(function() {
    $("img").show();
  });

  //Exercise #6
  $("#toggle").click(function() {
    $("img").toggle();
  });

  // Exercise #9
  $("#fade").click(function() {
    $("img").toggleClass("fade");
    // Bonus #2
      if( $("img").css("opacity") == '0') {
        $("#textChange").text("on");
      } else {
        $("#textChange").text("off");
      }
  });

  // Exercise #10
  $("img").hover(function() {
    $("img").attr("src", "img/pika2.png");
  }, /*Bonus #3 */
  function() {
    $("img").attr("src", "img/Pikachu.png");
  });
  
  // Exercise #12
  $("#newLi").click(function() {
    $("#list").append("<li>My Texts</li>");

      // Bonus #4
      $("li").hover(function() {
        $(this).css({"font-size" : "40px", "color": "lightblue"})
      }, function() {
        $(this).css({"font-size" : "initial", "color": "initial"})
      })

  });

  // Exercise #14
  $("#final").click(function() {
    $("body").append("<div id='overlay'></div>");
  })


  

});
