jQuery(document).ready(function(){
    //스킬바
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
    //swiper 슬라이드(웹 포트폴리오)
        var swiper = new Swiper('.swiper-container', {
            loop:true,
            autoplay: {delay: 5000,
 },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //팝업갤러리 (lightbox)
    var $gallery = new SimpleLightbox('.small-demo a', {} );
    
    
    
    
    
    
    
    
    
    
});