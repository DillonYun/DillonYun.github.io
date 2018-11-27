$(document).ready(function() {
  $("#mainpage").hide();
  $("#mainpage").fadeIn(1500);


  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if(y > 10){
      $("#aboutpage").fadeIn(1750);
    } else {
      $("#aboutpage").hide();
      $("#projectspage").hide();
    }
    if(y > 770){
      $("#projectspage").fadeIn(1750);
    } else {
      $("#projectspage").hide();
    }
  });

  $("#about").click(function() {
    $("#aboutpage").show();
    $('body').scrollTo('#aboutpage');
  });

  $("#projects").click(function() {
    $("#aboutpage").show();
    $("#projectspage").show();
    $('body').scrollTo('#projectspage');
  });
});
