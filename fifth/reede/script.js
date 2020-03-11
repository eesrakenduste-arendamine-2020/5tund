$(document).ready(function(){
    $('img').css({'width':'20vw'});
    
    let firstPic = $('img.active').attr('src');

    $('.big-image').html('<img src="'+ firstPic + '">');
    $('.big-image img').css({'width':'90vw'});

    $('#hide').click(hidePic);
    $('#next').click(picForward);
    $('#prev').click(picBackward);
    $(document).keydown(buttonPress);
    $('#picContainer img').click(function(){
        let currentPic = $('img.active');
        let selectedPic = $(this);

        selectedPic.addClass('active');
        currentPic.removeClass('active');

        $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(700);
        $('.big-image img').css({'width':'90vw'});
    });

    function buttonPress(event){
        console.log(event.keyCode);
        if(event.keyCode == 37){
            picBackward();
        }
        if(event.keyCode == 39){
            picForward();
        }
        if(event.keyCode == 72){
            hidePic();
        }
    }

    function picBackward(){
        let currentPic = $('img.active');
        let selectedPic = currentPic.prev();
        if(selectedPic.length == 0){
            selectedPic = $('#picContainer img').siblings().last();
        }
        selectedPic.addClass('active');
        currentPic.removeClass('active');

        $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().fadeIn(700);
        $('.big-image img').css({'width':'90vw'});
    }

    function picForward(){
        let currentPic = $('img.active');
        let selectedPic = currentPic.next();
        if(selectedPic.length == 0){
            selectedPic = $('#picContainer img').siblings().first();
        }
        selectedPic.addClass('active');
        currentPic.removeClass('active');

        $('.big-image').html('<img src="'+ selectedPic.attr('src') + '">').hide().slideDown(700);
        $('.big-image img').css({'width':'90vw'});
    }

    function hidePic(){
        //$('.big-image-container').hide();
        //$('.big-image-container').slideUp().slideDown(2000);
        //$('.big-image-container').fadeOut(5000).fadeIn(5000);
        //$('.big-image-container').toggle();
        $('.big-image-container').fadeToggle(2000);
        //$('.big-image-container').slideToggle(1500);
        if($('#hide').html() == "Peida"){
            //$('.big-image-container').is(':hidden'); - kontrollib kas pilt on peidetud
            $('#hide').html('Näita');
        } else{
            $('#hide').html('Peida');
        }

    }

});