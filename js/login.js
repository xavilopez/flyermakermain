$(document).ready(function(){

  $("#opt1").on('click', function(){
    window.location.href='https://xavilopez.github.io/Flyer1/';
  });

  $("#opt2").on('click', function(){
    window.location.href='https://xavilopez.github.io/Flyer2/';
  });

  $(".options").on('mouseover', function(){
    $(this).addClass('mouseover');
  });
  $(".options").on('mouseout', function(){
    $(this).removeClass('mouseover');
  });
});
