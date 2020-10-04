$(function(){

  $('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.menu__list').slideToggle();
  });
 
 
  ////worked-slider////////
  $('.worked__slider-items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="next"><i class="fas fa-chevron-right"></i></div>', 
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,         
        }
      },  
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,          
        }
      },    
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,          
        }
      },              
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,          
        }
      },             
    ]
  });
  
  // product__slider
  $('.product__slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,    
    infinite: true,
    autoplay: true,
    speed: 500,
    prevArrow: '<div class="prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="next"><i class="fas fa-chevron-right"></i></div>',
    fade: true,    
    dots: true   
  });
   ////clients__slider////////
   $('.clients__slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  
    arrows: false,       
    dots: false
  });
  
  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  }); 
 
    $(".num").counterUp({
    delay:10,
    time:2000
    });

  
 ////////accordion/////
  $(function() {
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.article-title');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.accordion-container'), false);
});
//////////////// 
  
 
  
  
});