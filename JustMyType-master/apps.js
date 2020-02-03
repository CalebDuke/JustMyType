let sentences = [ 
"Fall of the light through the ceiling fan",
"Tryna catch it with your hand",
"Paint the haze on all the years",
"All your hopes and all your fears",
"All the silly lies for love"];

let sentIndex = 0;
let letterIndex = 0;
let currentSentence = sentences[sentIndex];
let currentLetter = currentSentence[letterIndex];

let numberOfWords = 54;
let mistakes = 0;
let gameOn = false;
let startTime = 0;
let endTime = 0;

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

$(document).ready(function () {
    //  console.log("ready!");
    // hide the uppercase keyboard
    $('#keyboard-upper-container').hide();

    // While the shift key is held down, hide the lowercase keyboard and show the uppercase one
    $(document).keydown(function (e) {
        if (event.which == 16) {
            // console.log("Shift was pressed!");
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
            
        }
        if (e.key === sentences[0][0]){
            startTime = Date.now()
            console.log(startTime);
        }
         if(e.key === sentences[4][27]){
         endTime = Date.now()
         let totalTime = endTime - startTime
         console.log(totalTime) 
        }
    })
    // When the shift key is released, show the lowercase keyboard and hide the uppercase one
    $(document).keyup(function () {
        if (event.which == 16) {
            // console.log("Exit Shift!");
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

    })

    // Persistent "keylogger"console function
    // $(document).keydown(function () {
    //     console.log(event.key);
    //     console.log(event.keyCode);
    // })

    //When keys are pressed, they should be highlighted in the browser.
    let oldkeyChar;
    let keyCharacter;

    $(document).keypress(function (e) {
        let keyCharacter = $('#' + e.keyCode);
        keyCharacter.addClass('highlight');
        $(document).keyup(function(){
            keyCharacter.removeClass('highlight')
            
        });

        oldkeyChar = keyCharacter;

        // Visual "log" of right/wrong glyphicon feedback
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            $('#feedback').empty();
            $('#feedback').append('<span class="glyphicon glyphicon-ok "></span>');
            letterIndex++;
            currentLetter = currentSentence[letterIndex];
            $('#target-letter').text(currentLetter);
            console.log(letterIndex);
            
            //Highlight the currently expected letter in the on-screen sentence that should be typed next
            $('#yellow-block').css('left', '+=17.5px');
        }
        else {
            $('#feedback').empty();
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        }



        //test sentence check
        //console.log('letterIndex: '+ letterIndex + 'currentSentenceLength: ' + currentSentence.length);
        if (letterIndex == currentSentence.length) {
            $('#yellow-block').css('left', '0px');

            sentIndex++;
            if (sentIndex == sentences.length) {
                gameOn = true;
                //$('#feedback').remove();
                console.log('gameOn');
            }

            if (!gameOn) {
                letterIndex = 0;
                currentSentence = sentences[sentIndex];
                currentLetter = currentSentence[letterIndex];
                $('#sentence').text(currentSentence);
                $('#target-letter').text(currentLetter);
                //console.log(letterIndex);
                //console.log(currentSentence);
                $('#yellow-block').css('left', '20px');
                $('#feedback').empty();
                $('#feedback').stop()
            };

            console.log('gameOn2' + gameOn)

            //clear screen and display final score
            if (gameOn == true) {
                //console.log('boom')
                $('#sentence').empty();
                $('#target-letter').empty();
                $('#yellow-block').css('left', '2000px');
                $('#feedback').remove();

            //create timer and score
            // if(e == gameStart){
            //     start = new Date();
            //     console.log(start)
            // }     

            }

        };

        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);

    })



})

