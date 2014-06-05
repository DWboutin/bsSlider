(function($) {

  'use strict';

    $.fn.bsSlider = function(options, callback) {
  
        //this selector
        var thisEl = $(this);
        var thisClasses = thisEl.attr('class');
        var thisFormat = thisClasses.match(/bs-size-[a-zA-Z]{2}/g);
        var windowWidth = $(window).width();

        // Window width
        var isLarge = windowWidth >= 1200;
        var isNormal = windowWidth <= 1199 && windowWidth >= 992;
        var isSmall = windowWidth <= 991 && windowWidth >= 768;
        var isXSmall = windowWidth < 768;

        var currentSize = null;
        var lastSize = null;

        var sliderTimer;

        var swipeEnabled = ($.fn.swipe !== undefined);

        if(isLarge){ lastSize = currentSize = 'lg'; }else
        if(isNormal){ lastSize = currentSize = 'md'; }else
        if(isSmall){ lastSize = currentSize = 'sm'; }else
        if(isXSmall){ lastSize = currentSize = 'xs'; }
  
        // options
        var settings = { 
            slides: '.bs-slide',
            format: ['bs-size-xs'],
            changeOnResize: true,
            offset: 10,
            autoChange: true,
            timeChange: 3000,
            swipe: true,
            parentHeightOffset: 10 
        };
    
        // append the settings array to options
        if(options) {
            $.extend(settings, options);
        }

        if(thisFormat.length > 0){
            settings.format = thisFormat;
        }

        if(settings.swipe && !swipeEnabled){
            console.warn('You must add the swipe plugin from Matt Bryson @https://github.com/mattbryson/TouchSwipe-Jquery-Plugin');
        }

        var placeElements = function(){
            
            var slides = thisEl.find(settings.slides);

        // set the container
            thisEl.css({
                height: slides.height() + settings.parentHeightOffset,
                overflow: 'hidden',
                'z-index': 10
            }).addClass('bs-init');

            slides.each(function(){

                var slide = $(this);
                var slideId = slide.index();

                slide.css({
                    position: 'absolute',
                    top: '0px',
                    width: thisEl.innerWidth(),
                    left: slideId * (thisEl.width() + settings.offset) + 'px'
                });

            });
        };

        var slideToLeft = function(){

            var slides = thisEl.find(settings.slides);
            var slidesCount = slides.length;

            if(parseInt(slides.eq(slidesCount - 1).css('left')) <= 0){
                if(settings.autoChange){
                    clearInterval(sliderTimer);
                }
            }else{

                slides.each(function(){

                    var slide = $(this);
                    var slideId = slide.index();

                    slide.animate({
                        left: (slide.position().left - (thisEl.width() + settings.offset)) + 'px'
                    }, 200);

                });

            }
            
        };

        var slideToRight = function(){

            var slides = thisEl.find(settings.slides);

            if(parseInt(slides.eq(0).css('left')) >= 0){
                if(settings.autoChange){
                    clearInterval(sliderTimer);
                }
            }else{

                slides.each(function(){

                    var slide = $(this);
                    var slideId = slide.index();

                    slide.animate({
                        left: (slide.position().left + (thisEl.width() + settings.offset)) + 'px'
                    }, 200);

                });

            }
            
        };

        var initialize = function(){
            if(inArray('bs-size-'+currentSize, settings.format)){

                placeElements();

                if(settings.autoChange){
                    sliderTimer = setInterval(function(){
                        slideToLeft();
                    }, settings.timeChange);
                }

                if(swipeEnabled){
                    thisEl.swipe('enable').swipe({
                        swipe: function(event, direction, distance, duration, fingerCount, fingerData){
                            console.log(direction);
                            clearInterval(sliderTimer);

                            switch(direction){
                                case 'left': slideToLeft(); break;
                                case 'right': slideToRight(); break;
                            }

                        }
                    })
                }

            }
        };

        var reInitialize = function(){
            thisEl.find(settings.slides).each(function(){

                var slide = $(this);

                slide.removeAttr('style');

            });

            clearInterval(sliderTimer);
            thisEl.swipe('disable');
            initialize();
        }

        initialize();

        if(settings.changeOnResize){
            $(window).on('resize', function(){

                windowWidth = $(window).width();

                isLarge = windowWidth >= 1200;
                isNormal = windowWidth <= 1199 && windowWidth >= 992;
                isSmall = windowWidth <= 991 && windowWidth >= 768;
                isXSmall = windowWidth < 768;

                if(isLarge){ currentSize = 'lg'; }else
                if(isNormal){ currentSize = 'md'; }else
                if(isSmall){ currentSize = 'sm'; }else
                if(isXSmall){ currentSize = 'xs'; }

                lastSize = currentSize;
                reInitialize();

            });
        }

    }

    function inArray(needle, haystack) {
        var length = haystack.length;
        for(var i = 0; i < length; i++) {
            if(haystack[i] == needle) return true;
        }
        return false;
    }

})(jQuery);