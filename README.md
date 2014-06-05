bsSlider - Columns to slider
=========================

bsSlider can transform Bootsrap 3 columns into a clean and swipable slider.

## Usage

    $('.bs-slider').bsSlider();
    
## Options

### Default options
  
    $('.bs-slider').bsSlider({
        slides: '.bs-slide',
        format: ['bs-size-xs'],
        changeOnResize: true,
        offset: 10,
        autoChange: true,
        timeChange: 3000,
        loop: true,
        swipe: true,
        parentHeightOffset: 10
    });
