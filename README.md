bsSlider - Columns to slider
=========================

bsSlider can transform Bootsrap 3 columns into a clean and swipable slider.

## Usage

    $('.bs-slider').bsSlider();
    
## Options

### Default options
  
    $('.bs-slider').bsSlider({
        slides: '.bs-slide',            // (string) children selector for the slides
        format: ['bs-size-xs'],         // (array) Size in which format the slider will be initialized.
        changeOnResize: true,           // (bool) If the slider change on window resize 
        offset: 10,                     // (int) space between the slides in pixels
        autoChange: true,               // (bool) Set the automatic interval
        timeChange: 3000,               // (int) Time for the interval between slide change
        swipe: true,                    // (bool) If swipe is enabled (require TouchSwipe-Jquery-Plugin)
        parentHeightOffset: 10          // (int) Add this value in pixel to the container
    });

#### Format option

The format are the Bootstrap sizes. You can define it in the container classes.

    <div class="col-lg-9 col-md-8 col-sm-6 bs-slider bs-size-xs">
    
So the slider will be only initialized in the XS size and will be destroyed in other size.

Different size are:
    
    bs-size-lg
    bs-size-md
    bs-size-sm
    bs-size-xs
    
## Slides

The slider must have the class you defined in the plugin

    <div class="col-lg-4 col-md-6 col-sm-12 bs-slide bs-slide-xs">
    
With the bs-slide-** class, your column will be shown in the slider.
    
## CSS 

You have to add this CSS to display the slide in the size you wanted

    @media (min-width: 1200px) {
      /* line 22, ../sass/global.sass */
      .bs-slide-lg {
        display: block !important;
      }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      /* line 25, ../sass/global.sass */
      .bs-slide-md {
        display: block !important;
      }
    }
    @media (min-width: 768px) and (max-width: 991px) {
      /* line 28, ../sass/global.sass */
      .bs-slide-sm {
        display: block !important;
      }
    }
    @media (max-width: 767px) {
      /* line 31, ../sass/global.sass */
      .bs-slide-xs {
        display: block !important;
      }
    }
    
## Complete HTML exemple

    <div class="col-lg-9 col-md-8 col-sm-6 bs-slider bs-size-xs">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 bs-slide bs-slide-xs">
                [...]
            </div>
            <div class="col-lg-4 col-md-6 visible-lg visible-md visible-xs bs-slide bs-slide-xs">
                [...]
            </div>
            <div class="col-lg-4 visible-lg bs-slide bs-slide-xs">
                [...]
            </div>
        </div>
    </div>
