
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


   var typeElement = document.getElementById('typedText');

    var typewriter = new Typewriter(typeElement, {
        loop: true,
        typingSpeed: 85,
        deleteSpeed: 10
    });

    typewriter.typeString("We're working on getting the new site up and running.")
        .pauseFor(2000)
        .deleteAll()
        .typeString("It may seems roo long")
        .pauseFor(800)
        .deleteChars(8)
        .typeString("too long time.")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Good things do take dime.")
        .pauseFor(500)
        .deleteChars(5)
        .typeString("time.")
        .pauseFor(2000)
        .deleteAll()
        .typeString('Stay tuned!')
        .pauseFor(3000)
        .start();
});
