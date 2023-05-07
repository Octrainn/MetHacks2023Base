import { animate } from "motion";


var btn = document.getElementById("redirectButton");
var silverBox = document.getElementById("silver-box");

btn.addEventListener("mouseover", function() {
  
    animate(
        btn,
        {
            transform:"translateY(-10px)",
            
        },
{
    duration: 0.4,
    easing: "ease-in-out",
}





    )



});

btn.addEventListener("mouseleave", function() {
  
    animate(
        silverBox,
        {
            opacity:0
            
        },
{
    duration: 0.6,
    easing: "ease-out",
}





    )



});

btn.addEventListener("mousedown", function() {
  
    animate(
        silverBox,
        {
            opacity:0,
            
        },
{
    duration: 0.4,
    easing: "ease-in-out",
}


    )

    animate(
        document.getElementsByClassName("pName"),
        {
            opacity:0,
            
        },
{
    duration: 0.4,
    easing: "ease-in-out",
}


    ).finished.then(() =>{


window.location.replace("./pageTwo");

        })



});



