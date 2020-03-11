$(document).ready(function(){
    $('img').css({'width':'20vw'});
    $('li').css({'list-style-type':'none', 'width':'200px'});
    
    let selectPic = $('.active').attr('src');
    $('#hide').click(hide);
    $('#next').click(forward);
    $('#prev').click(backward);
    $(document).keydown(function(event){
        if(event.keyCode == 37){
            backward();
        } else if(event.keyCode == 39){
            forward();
        }
        console.log(event.keyCode);
    });

    $('#picContainer img').click(function(){
        console.log('klikk');
        $('#picContainer img').removeClass('active');
        $(this).addClass('active');
        let selectedPic = $('.active');
        $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);

        $('.big-image img').css({'width':'80vw'});
    });

    console.log(selectPic);

    //$('.big-image').html('<img src="'+ selectPic + '">').hide().fadeIn(1500).fadeOut(1000).slideDown().slideUp().show();
    $('.big-image').html('<img src="'+ selectPic + '">').hide().fadeIn(1500);
    /*$('.big-image').html('<img src="'+ selectPic + '">').animate({
        'duration':'2000',
        'width':'10vw',
        'opacity': '0.5'
    });*/
    $('.big-image img').css({'width':'80vw'});
    function hide(){
        $('.big-image').html('<img src="'+ selectPic + '">').slideToggle(1000);
    }
    function backward(){
        let currentPic = $('img.active');
        let selectedPic = $('img.active').prev();

        if(selectedPic.length){
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
            $('.big-image img').css({'width':'80vw'});
        } else{
            selectedPic = $('#picContainer img').siblings().last();
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
            $('.big-image img').css({'width':'80vw'});
        }

        selectedPic.addClass('active');
        currentPic.removeClass('active');

    }

    function forward(){
        let currentPic = $('img.active');
        let selectedPic = $('img.active').next();
        if(selectedPic.length){
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
            $('.big-image img').css({'width':'80vw'});
        } else{
            selectedPic = $('#picContainer img').siblings().first();
            $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(1500);
            $('.big-image img').css({'width':'80vw'});
        }
        selectedPic.addClass('active');
        currentPic.removeClass('active');

    }
});