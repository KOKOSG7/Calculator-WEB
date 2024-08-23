console.log("ME CAGOOOO")


$(document).ready(function(){
    $(".idioms").hide();
    idiomShow = false
});

$(document).ready(function(){
    $(".T1").click(function(){
        $(".T1").css("background-color","yellow");
        console.log("vacilas");
    });
});

$(document).ready(function(){
    $("#idiom").click(function(){
        if (idiomShow == false){
            $(".idioms").fadeIn();
            idiomShow = true
        }
        else{
            $(".idioms").fadeOut();
            idiomShow = false
        }
    });
});