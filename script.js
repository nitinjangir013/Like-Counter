let counter = 0;
$("#like_counter").text(counter);
$(".like_img_con").click(function(){
  counter++;
  $("#like_counter").animate({
    top:'-40px'
  });
  $(".circle").fadeIn().css({
    transform: 'scale(15.5)'
  }).fadeOut(500);
  $(".like_img_con").css('background','#abebff');
  $(".like_img_con>img").css({
    filter: 'invert(41%) sepia(91%) saturate(1221%) hue-rotate(162deg) brightness(96%) contrast(101%)'
  });
//   #00a4d6
  $("#like_counter").text(counter);
  resetElement();
});

function resetElement()
{
  setTimeout(function(){
    $("#like_counter").animate({
    top:'0'
  });
  $(".circle").css({
    transform: 'scale(0)'
  });
  },1000);
}