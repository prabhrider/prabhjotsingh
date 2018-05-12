
jQuery(document).ready(function() {

    // Background slide show
    $('.coming-soon').backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    , "assets/img/backgrounds/4.jpg"
    ], {duration: 3000, fade: 750});

    // Countdown until the site will be up
    $('.timer').countdown('2018/12/31', function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});

});
