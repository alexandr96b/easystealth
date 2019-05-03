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



$(".b-checkbox-t input[type='checkbox']").change(function() {
    if(this.checked) {
      $('.b-transactions').addClass('active');
    }else{
      $('.b-transactions').removeClass('active');
    }
});


$(".b-type input[type='radio']").change(function() {
    if(this.checked) {
      $('.b-other').addClass('active');
    }else{
      $('.b-other').removeClass('active');
    }
});

$(".del input[type='radio']").change(function() {
    if(this.checked) {
      $('.b-other').removeClass('active');
    }else{
      
    }
});

$(".del input[type='radio']").change(function() {
    if(this.checked) {
      $('.b-other').removeClass('active');
    }else{

    }
});


/*$(".det input[type='radio']").change(function() {
    if(this.checked) {
      $(this).parent().next().addClass('active');
    }else{
      $(this).parent().next().removeClass('active');
    }
});
*/




});



