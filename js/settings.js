$(document).ready(function(){
    $("#scrollDiv").scrollLeft(72);
});

$('body').mousewheel(function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
    
    if(event.deltaY===1){
        $("#scrollDiv").scrollLeft(-400);
    }
    else if(event.deltaY===-1){
        $("#scrollDiv").scrollLeft(2000);
    }
});

document.addEventListener('scroll', function (e) {     
    console.log('scrolling', window.scrollY);
    if(window.scrollY>930){
        $("#tab1").text("")
        $("#tab2").text("Fintech")
        $("#tab1").css("color","rgb(209 213 219)")
        $("#tab1Index").css("color","rgb(209 213 219)")
        $("#tab2").css("color","white")
        $("#tab2Index").css("color","white")
    }
    else{
        $("#tab1").text("Branding")
        $("#tab2").text("") 
        $("#tab2").css("color","rgb(209 213 219)")
        $("#tab2Index").css("color","rgb(209 213 219)")
        $("#tab1").css("color","white")
        $("#tab1Index").css("color","white")
    }
}, true);