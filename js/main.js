
		
		/*====================================
					Clock Countdown
		======================================*/

		$('#clock-countdown').countdown('2017/06/11 00:35:00').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>'
				+ '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'
				+ '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'
				+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
			));
		});
		
		

		/*====================================
					Nice Scroll
		======================================*/
			
		$("html").niceScroll({
			cursorcolor: '#ccc',
			cursoropacitymin: '0',
			cursoropacitymax: '1',
			cursorwidth: '3px',
			zindex: 10000,
			horizrailenabled: false,
		});

				
			
		/*====================================
					Animated.css
		======================================*/

		$('.animated').appear(function() {
			var element = $(this),
				animation = element.data('animation'),
				animationDelay = element.data('animation-delay');
				if ( animationDelay ) {
	
					setTimeout(function(){
						element.addClass( animation + " visible");
					}, animationDelay);
	
				} else {
					element.addClass( animation + " visible");
				}
		});



