$(document).ready(function() {
    // console.log("ready");

    let sentences = [
        "Fall of the light through the ceiling fan Tryna catch it with your hand",
        "Your fingers slip if the timing's bad We never knew how little time we had",
        "Paint the haze on all the years All your hopes and all your fears",
        "All the silly lies for love And you forget just what the reason was"
    ]

    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    let currentLetter = currentSentence[letterIndex];

    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);
    $("#keyboard-upper-container").hide();
    
    
    $(document).keydown(function(e){
        if (e.which == 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }

    })
       
    $(document).keyup(function(e){
        if (e.which == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }

    })

    // $(document).keypress(function(){
    //     console.log(event.keyCode)
    // } )

    $(document).keypress(function(e){
        let keyCharacter = $('#' + e.keyCode);
        keyCharacter.addClass('highlight');
        $(document).keyup(function(){
            keyCharacter.removeClass('highlight')
        })

        if(currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        }else{
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        }
        $('#yellow-block').css('left', '+=17.5px');
        letterIndex++;
        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);

    });
   




})


