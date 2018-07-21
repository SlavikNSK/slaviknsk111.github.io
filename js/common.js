$(function() {

	var headerHeight = $('.header').height();

	$(window).on('scroll', {previousTop: 0}, function () {
	  var currentTop = $(window).scrollTop();
	   
	  if(currentTop > 0) {
	  	$('.header').addClass('is-fixed');
	    /* Когда больше 450 анимируем и закрашиваем хедер + ставим метку скрола */
	    if(currentTop > 450 && $('.header').hasClass('is-fixed')) {
	    	$('.header').addClass('bgc-blue scrolled');	    	
	    } else {
	    	/* Если меньше 350, и скролился, то анимируем прозрачность убираем синий */		    		
	    	if($('.header').hasClass('scrolled')) {
	    		$('.header').removeClass('bgc-blue');
	    		$('.header').addClass('bgc-trans');
	    	}
	    }
	  } else {
	  	$('.header').removeClass('is-fixed scrolled bgc-trans');
	  }	  
	});

	/* Открытие & Закрытие меню */
	$('.hamburger').on('click', function(){
		$('.hamburger').toggleClass('is-active');
		$('.header').toggleClass('is-open');
	});	 

	//open/close primary navigation
	$('.hamburger').on('click', function() {		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});

	/* При наведении на фон увеличиваем и обратно */
	$('.intro-content').on('mouseover', function() {		
		$('.intro-bg').addClass('bg-scale-plus');
		$('.intro-bg').removeClass('bg-scale-minus');
	});
	$('.intro-content').on('mouseout', function() {		
		$('.intro-bg').addClass('bg-scale-minus');
		$('.intro-bg').removeClass('bg-scale-plus');
	});





	/*function showMessage() {
  alert( 'Привет всем присутствующим!' );
	}*/

		/*$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}*/
	

});