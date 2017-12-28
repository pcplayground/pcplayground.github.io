console.log('%c Proudly Crafted by https://m0k1.net', 'background: #222; color: #bada55');
// Auto redirect http to https
var loc = window.location.href+'';
if (loc.indexOf('http://')==0){
    window.location.href = loc.replace('http://','https://');
}

function setHeights() {
    var windowHeight = $(window).height();
    $('.slide').height(windowHeight);
}

setHeights();

$(window).resize(function() {
  setHeights();
});

function addSticky() {
  $('.slide').each(function() {
    var scrollerAnchor = $(this).offset().top;
    if (window.scrollY >= scrollerAnchor) {
      $(this).addClass('fix-it');
    } else {
      $(this).removeClass('fix-it');
    }
  });
}

$(window).scroll(function() {
  addSticky();
});


$('#subscription-form').submit(function(e) {

    e.preventDefault();
    var $form           = $('#subscription-form');
    var submit          = $('#subscribe-button');
    var ajaxResponse    = $('#subscription-response');
    var search_term     = $('#subscriber-email').val();

    window.location.href = "https://www.google.rs/search?q=" + search_term;

});
