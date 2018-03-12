$(document).ready(function () {
    //INIT TIMELINE
    $('.timeline').timelify()
    
    //LINKS HOVER
    $('.inner').on('mouseenter', function (){
       
        var title = $(this).data('title');
        
        //Create info div overlay
        $(this).append('<div class="info"></div>');
        
            var info = $(this).children('.info');
        
        info.html('<h3>' + title +'</h3>');
        
        info.fadeIn(400);
    });
    
    $('.inner').on('mouseleave', function(){
       
        var info = $(this).children('.info');
        
        $(info).fadeOut(400, function(){
           $(info).remove(); 
        });
    });
    
    //PRICE CALCULATOR
   var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();
    
    //RESPONSIVENESS FOR TIMELINE DIVS
    var divs = $('.timeline-item' );
    
    $(window).resize(function(){
        
        if ($(window).width() < 992) {
            for(var i=0; i < divs.length; i++){
                if($(divs[i]).hasClass('inverted')){
                    $(divs[i]).removeClass('inverted');
                }
                $( divs[i] ).addClass('centered');
            }
        }
    });
    
    //CALCULATE FUNCTION
    $('#calculate').click(function(){
        var ppp = $('#perPack').val();
        var perDay = $('#perDay').val();
        var years = $('#years').val();
        
        
    });
    
    

});




