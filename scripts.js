//twitter

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');



$(document).ready(function(){


	$("#form-name").css("background-color","red")

	//scrolling
	var $root = $('html, body');
    $('.navbar-nav a').click(function() {
    	var href = $.attr(this, 'href');
      $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });


	//tooltips
  $(function () {
  $('[data-toggle="tooltip"]').tooltip();
  });


  $("#submit-button").on('click', function() {
  	var comment = $('#form-name').val();
  	console.log(comment);
  	$("#visible-comment").html(comment);
  	$("#form-name").hide();
  	return false;
	});



});