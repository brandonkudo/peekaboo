$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#text-big").click(function() {
    $("p").removeClass();
    $("p#last-paragraph").addClass("big");
  });

  $("button#text-small").click(function() {
    $("p").removeClass();
    $("p#last-paragraph").addClass("small");
  });
});
