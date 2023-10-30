

var cursor = document.getElementById("cursor");
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

    init();
}

init();