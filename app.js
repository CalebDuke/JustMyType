$(document).ready(function() {
    // console.log("ready");
    $("#keyboard-upper-container").hide();
    
    
    $(document).keydown(function(){
        if (event.which == 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }

    })
       
    $(document).keyup(function(){
        if (event.which == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }

    })

    // $(document).keypress(function(){
    //     console.log(event.keyCode)
    // } )

    $(document).keypress(function(e){
        let keyCharacter = $('#' + e.keyCode);
        keyCharacter.css("background-color", "green");
        $(document).keyup(function(){
            keyCharacter.css("background-color","white")
        })

    });
  




})


