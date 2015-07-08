/**
 * Created by Administrator on 14-12-5.
 */

/*
 $(document).ready(function(){
 $('.heart').toggle(
 function(){
 $(this).addClass('red');
 },
 function(){
 $(this).removeClass('red');
 }
 );
 });*/

$(document).ready(function () {

  /* var container = document.querySelector('#masonry');
   var msnry = new Masonry( container, {
   // options...
   itemSelector: '.pin',
   columnWidth: 225
   });*/

  $('.heart').toggle(
      function () {
        $(this).css('color', 'red');
      },
      function () {
        $(this).css('color', '#999999');
      }
  );
});
