

var cursor = document.getElementById("cursor");
var windowMaxX = window.innerWidth;

document.addEventListener('mousemove', function(e) {
    var x =e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y +"px";
});

function delay(milliseconds){
    return new Promise(resolve =>{
        setTimeout(resolve, milliseconds);
    });
}

async function init(){

    var cursorOpacity = 1;
    for(var i = 100; i!=0; i--){
        cursor.style.border = "2px solid rgba(255, 255, 255," + cursorOpacity + ")";
        await delay(10);
        cursorOpacity = cursorOpacity-0.01;
    }
    for(var i = 0; i!=100; i++){
        cursor.style.border = "2px solid rgba(255, 255, 255," + cursorOpacity + ")";
        await delay(10);
        cursorOpacity = cursorOpacity+0.01;
    }

    resize();
    init();
    
}



//----get/change window size
var pfp = document.getElementById("pfp");
var aboutMe = document.getElementById("aboutMe");
var bgVid = document.getElementById("background-video");

function resize(){
    let a;
    
    if (navigator.userAgent.match(/Android/i)
       || navigator.userAgent.match(/webOS/i)
       || navigator.userAgent.match(/iPhone/i)
       || navigator.userAgent.match(/iPad/i)
       || navigator.userAgent.match(/iPod/i)
       || navigator.userAgent.match(/BlackBerry/i)
       || navigator.userAgent.match(/Windows Phone/i)) {
          a = true ;
       } else {
          a = false ;
       }

       if(a == false){

        console.log(window.windowMaxX);
        console.log(window.innerWidth);

        if(window.innerWidth < 940){

        //turn off video background
        bgVid.style.visibility = "hidden";

        // Set profile photo to center of screen
        pfp.style.display= "block";
        pfp.style.marginLeft = "auto";
        pfp.style.marginRight = "auto";
        pfp.style.width = "200px";
        pfp.style.right = null;
        pfp.style.top = null;
        pfp.style.position = null;

        // Set text to below profile phote
        aboutMe.style.width = "block";
        aboutMe.style.marginLeft = "auto";
        aboutMe.style.marginRight = "auto";
        aboutMe.style.width = "20%";
        /*margin-left: 5%; */
        aboutMe.style.position = "";
        aboutMe.style.bottom = "10%";
        aboutMe.style.marginTop = "30px";
        aboutMe.style.left = "";

        }
        else{

            //turn off video background
        bgVid.style.visibility = "visible";

           pfp.style.position = "absolute";
           pfp.style.top = "35%";
           pfp.style.right = "10%";
           pfp.style.width = "200px";

           //set aboutMe
           aboutMe.style.width = "20%";
           aboutMe.style.position = "absolute";
           aboutMe.style.bottom = "10%";
           aboutMe.style.left = "10px";
        }

       }
}

       

/*function set(){
    pfp.style.position = "absolute";
    pfp.style.top = "35%";
   pfp.style.right = "10%";
   pfp.style.width = "200px";
} */


//set();
//resize();
init();
