$(document).ready(function () {


$('.menu-icon').click(function(){
  $('.b-nav').toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-nav").length) {
    $('.b-nav').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});





$(".b-documents-photo input[type='checkbox']").change(function() {
    if(this.checked) {
      $('.b-documents-photo__wrap').addClass('active');
    }else{
      $('.b-documents-photo__wrap').removeClass('active');
    }
});




});



