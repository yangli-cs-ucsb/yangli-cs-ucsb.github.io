$(document).ready(function() {
  $('div.box-show:eq(0)> div').hide();  
  $('div.box-show:eq(0)> h3').click(function() {
    $(this).next().slideToggle('fast');
  });
});