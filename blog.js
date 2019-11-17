// $(document).ready(function() {
//     $("#more").click(function() {
//       $('html, body').animate({
//         scrollTop: $('#test').offset().top
//       },1000);
//     });
//   });

$('#nav-toggle').on('click', function(e) {
  $(this).toggleClass('nav-open');
  $('#outer-wrapper').toggleClass('nav-open');
});