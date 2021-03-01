var rotation = 0;

function rotateCircle() {
    for(var i = 0; i < 36; i++){
        document.getElementById("circWrapper").style.transform = "rotate(1deg)";
        await sleep(1).then(() => { console.log("World!"); });
    }
    
}

function homeSpoke() {
    console.log("homeSpoke");
    rotateCircle();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }