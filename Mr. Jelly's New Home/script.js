var myNumber = new Array(9);
myNumber[0] = 'Assets/Numbers/1.png';
myNumber[1] = 'Assets/Numbers/2.png';
myNumber[2] = 'Assets/Numbers/3.png';
myNumber[3] = 'Assets/Numbers/4.png';
myNumber[4] = 'Assets/Numbers/5.png';
myNumber[5] = 'Assets/Numbers/6.png';
myNumber[6] = 'Assets/Numbers/7.png';
myNumber[7] = 'Assets/Numbers/8.png';
myNumber[8] = 'Assets/Numbers/9.png';

var fruitCloud = new Array(45);
fruitCloud[0] = 'Assets/Fruits/3apple.png';
fruitCloud[1] = 'Assets/Fruits/3banana.png';
fruitCloud[2] = 'Assets/Fruits/3blueberry.png';
fruitCloud[3] = 'Assets/Fruits/3plum.png';
fruitCloud[4] = 'Assets/Fruits/3strawberry.png';
fruitCloud[5] = 'Assets/Fruits/5apple.png';
fruitCloud[6] = 'Assets/Fruits/5banana.png';
fruitCloud[7] = 'Assets/Fruits/5blueberry.png';
fruitCloud[8] = 'Assets/Fruits/5plum.png';
fruitCloud[9] = 'Assets/Fruits/5strawberry.png';
fruitCloud[10] = 'Assets/Fruits/8apple.png';
fruitCloud[11] = 'Assets/Fruits/8banana.png';
fruitCloud[12] = 'Assets/Fruits/8blueberry.png';
fruitCloud[13] = 'Assets/Fruits/8plum.png';
fruitCloud[14] = 'Assets/Fruits/8strawberry.png';

fruitCloud[15] = 'Assets/Fruits/1apple.png';
fruitCloud[16] = 'Assets/Fruits/1banana.png';
fruitCloud[17] = 'Assets/Fruits/1blueberry.png';
fruitCloud[18] = 'Assets/Fruits/1plum.png';
fruitCloud[19] = 'Assets/Fruits/1strawberry.png';
fruitCloud[20] = 'Assets/Fruits/2apple.png';
fruitCloud[21] = 'Assets/Fruits/2banana.png';
fruitCloud[22] = 'Assets/Fruits/2blueberry.png';
fruitCloud[23] = 'Assets/Fruits/2plum.png';
fruitCloud[24] = 'Assets/Fruits/2strawberry.png';
fruitCloud[25] = 'Assets/Fruits/4apple.png';
fruitCloud[26] = 'Assets/Fruits/4banana.png';
fruitCloud[27] = 'Assets/Fruits/4blueberry.png';
fruitCloud[28] = 'Assets/Fruits/4plum.png';
fruitCloud[29] = 'Assets/Fruits/4strawberry.png';

fruitCloud[30] = 'Assets/Fruits/6apple.png';
fruitCloud[31] = 'Assets/Fruits/6banana.png';
fruitCloud[32] = 'Assets/Fruits/6blueberry.png';
fruitCloud[33] = 'Assets/Fruits/6plum.png';
fruitCloud[34] = 'Assets/Fruits/6strawberry.png';
fruitCloud[35] = 'Assets/Fruits/7apple.png';
fruitCloud[36] = 'Assets/Fruits/7banana.png';
fruitCloud[37] = 'Assets/Fruits/7blueberry.png';
fruitCloud[38] = 'Assets/Fruits/7plum.png';
fruitCloud[39] = 'Assets/Fruits/7strawberry.png';
fruitCloud[40] = 'Assets/Fruits/9apple.png';
fruitCloud[41] = 'Assets/Fruits/9banana.png';
fruitCloud[42] = 'Assets/Fruits/9blueberry.png';
fruitCloud[43] = 'Assets/Fruits/9plum.png';
fruitCloud[44] = 'Assets/Fruits/9strawberry.png';


var randFruitRange1;
var randFruitRange2;
var randFruitRange3;



//reload the whole page (home button)
function reload() {
    document.location.reload(true);
}

//mute sound or unmute sound
function muteAudio() {
    if (document.getElementById("backgroundMusic").muted === false) {
        document.getElementById("correctAnswer").muted = true;
        document.getElementById("wrongAnswer").muted = true;
        document.getElementById("backgroundMusic").muted = true;
        
        document.getElementById("one").muted = true;
        document.getElementById("two").muted = true;
        document.getElementById("three").muted = true;
        document.getElementById("four").muted = true;
        document.getElementById("five").muted = true;
        document.getElementById("six").muted = true;
        document.getElementById("seven").muted = true;
        document.getElementById("eight").muted = true;
        document.getElementById("nine").muted = true;
        
        document.getElementById("muteAudio").style.backgroundImage = "url(Assets/Buttons/Unmute.png)";
    } else {
        document.getElementById("correctAnswer").muted = false;
        document.getElementById("wrongAnswer").muted = false;
        document.getElementById("backgroundMusic").muted = false;
        
        document.getElementById("one").muted = false;
        document.getElementById("two").muted = false;
        document.getElementById("three").muted = false;
        document.getElementById("four").muted = false;
        document.getElementById("five").muted = false;
        document.getElementById("six").muted = false;
        document.getElementById("seven").muted = false;
        document.getElementById("eight").muted = false;
        document.getElementById("nine").muted = false;
        
        document.getElementById("muteAudio").style.backgroundImage = "url(Assets/Buttons/Mute.png)";
    }
}

//hide intro animation when it ends or is skipped
function hideIntro() {
    document.getElementById("introAnimation").style.visibility = "hidden";
    document.getElementById("tutorial").play();
}

function hideTutorial() {
    document.getElementById("tutorial").style.visibility = "hidden";
    
    if (document.getElementById("tutorial").style.visibility === "hidden") {
        document.getElementById("skipVid").style.visibility = "hidden";
        document.getElementById("one").play();
    }
}

//return jelly to default
function resetJellyState() {
    document.getElementById("jellyDefault").style.visibility = "visible";
    
    document.getElementById("jellyHappy").style.visibility = "hidden";
    document.getElementById("jellyHappy").style.animationPlayState = "paused";
    document.getElementById("jellyHappy").style.WebkitAnimationPlayState = "paused";
    document.getElementById("jellySad").style.visibility = "hidden";
    document.getElementById("jellySad").style.animationPlayState = "paused";
    document.getElementById("jellySad").style.WebkitAnimationPlayState = "paused";
}

//animation for correct answer
function correctAnswer() {
    document.getElementById("correctAnswer").play();
    
    document.getElementById("jellyDefault").style.visibility = "hidden";
    document.getElementById("jellyHappy").style.visibility = "visible";
    document.getElementById("jellyHappy").style.animationPlayState = "running";
    document.getElementById("jellyHappy").style.WebkitAnimationPlayState = "running";
}

//animation for wrong answer
function wrongAnswer() {
    document.getElementById("wrongAnswer").play();
    
    document.getElementById("jellyDefault").style.visibility = "hidden";
    document.getElementById("jellySad").style.visibility = "visible";
    document.getElementById("jellySad").style.animationPlayState = "running";
    document.getElementById("jellySad").style.WebkitAnimationPlayState = "running";
}

//button to start playing game
function startPlay() {
    document.getElementById("startGameBG").style.visibility = "hidden";
    document.getElementById("startPlay").style.visibility = "hidden";
    document.getElementById("title1").style.visibility = "hidden";
    document.getElementById("title2").style.visibility = "hidden";
    document.getElementById("gameEnd").style.visibility = "hidden";
    document.getElementById("replay").style.visibility = "hidden";
    
    document.getElementById("introAnimation").play();
    document.getElementById("backgroundMusic").volume = 0.1;
    document.getElementById("backgroundMusic").play();
    
    document.getElementById("muteAudio").style.backgroundImage = "url(Assets/Buttons/Mute.png)";
    
    
    //random generation of fruits to display
    randFruitRange1 = Math.floor(Math.random() * (15 - 0) + 0);
    randFruitRange2 = Math.floor(Math.random() * (20 - 15) + 15);
    randFruitRange3 = Math.floor(Math.random() * (45 - 30) + 30);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[0] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
}

//skip intro animation
function skipVideo() {
    if (document.getElementById("introAnimation").paused) {
        document.getElementById("tutorial").pause();
        document.getElementById("tutorial").style.visibility = "hidden";
        document.getElementById("skipVid").style.visibility = "hidden";
        setTimeout(function() {
        document.getElementById("one").play();
        }, 500);
    } else {
        document.getElementById("introAnimation").pause();
        document.getElementById("introAnimation").style.visibility = "hidden";
        document.getElementById("tutorial").play();
    }
}

//stage 2 of game
function stage2() {
    document.getElementById("step1").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (15 - 0) + 0);
    randFruitRange2 = Math.floor(Math.random() * (25 - 20) + 20);
    randFruitRange3 = Math.floor(Math.random() * (45 - 30) + 30);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[1] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("two").play();
    }, 4000);
}

//stage 3 of game
function stage3() {
    document.getElementById("step2").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (5 - 0) + 0);
    randFruitRange2 = Math.floor(Math.random() * (30 - 15) + 15);
    randFruitRange3 = Math.floor(Math.random() * (45 - 30) + 30);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[2] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("three").play();
    }, 4000);
}

//stage 4 of game
function stage4() {
    document.getElementById("step3").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (15 - 0) + 0);
    randFruitRange2 = Math.floor(Math.random() * (30 - 25) + 25);
    randFruitRange3 = Math.floor(Math.random() * (45 - 30) + 30);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[3] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("four").play();
    }, 4000);
}

//stage 5 of game
function stage5() {
    document.getElementById("step4").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (10 - 5) + 5);
    randFruitRange2 = Math.floor(Math.random() * (30 - 15) + 15);
    randFruitRange3 = Math.floor(Math.random() * (45 - 30) + 30);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[4] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("five").play();
    }, 4000);
}

//stage 6 of game
function stage6() {
    document.getElementById("step5").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (15 - 0) + 0);
    randFruitRange2 = Math.floor(Math.random() * (30 - 15) + 15);
    randFruitRange3 = Math.floor(Math.random() * (35 - 30) + 30);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[5] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("six").play();
    }, 4000);
}

//stage 7 of game
function stage7() {
    document.getElementById("step6").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (15 - 0) + 0);
    randFruitRange2 = Math.floor(Math.random() * (30 - 15) + 15);
    randFruitRange3 = Math.floor(Math.random() * (40 - 35) + 35);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[6] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("seven").play();
    }, 4000);
}

//stage 8 of game
function stage8() {
    document.getElementById("step7").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (15 - 10) + 10);
    randFruitRange2 = Math.floor(Math.random() * (30 - 15) + 15);
    randFruitRange3 = Math.floor(Math.random() * (45 - 30) + 30);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[7] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("eight").play();
    }, 4000);
}

//stage 9 of game
function stage9() {
    document.getElementById("step8").style.visibility = "visible";
    
    document.getElementById("fruitContainer1").appendChild(document.getElementById("fruit1"));
    document.getElementById("fruit1").style.visibility = "visible";
    document.getElementById("fruitContainer2").appendChild(document.getElementById("fruit2"));
    document.getElementById("fruit2").style.visibility = "visible";
    document.getElementById("fruitContainer3").appendChild(document.getElementById("fruit3"));
    document.getElementById("fruit3").style.visibility = "visible";
    
    randFruitRange1 = Math.floor(Math.random() * (15 - 0) + 0);
    randFruitRange2 = Math.floor(Math.random() * (30 - 15) + 15);
    randFruitRange3 = Math.floor(Math.random() * (45 - 40) + 40);
    
    document.getElementById("number").style.backgroundImage = "url(" + myNumber[8] + ")";
    document.getElementById("fruit1").style.backgroundImage = "url(" + fruitCloud[randFruitRange1] + ")";
    document.getElementById("fruit2").style.backgroundImage = "url(" + fruitCloud[randFruitRange2] + ")";
    document.getElementById("fruit3").style.backgroundImage = "url(" + fruitCloud[randFruitRange3] + ")";
    
    setTimeout(function() {
        document.getElementById("nine").play();
    }, 4000);
}

//show nineth part of house built
function houseStep9() {
    document.getElementById("step9").style.visibility = "visible";
}

//play ending animation
function gameEnd() {
    document.getElementById("gameEnd").style.visibility = "visible";
    
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
            document.getElementById("gameEnd").play();
        } else {
            document.getElementById("gameEnd").style.opacity = op ;
            document.getElementById("gameEnd").style.filter = "alpha(opacity=" + op + ")";
            op += 0.1;
        }
    }, 100);
}

//show play game button at the end of the game
function showButton() {
    document.getElementById("replay").style.visibility = "visible";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function onDrop(ev) {
    ev.preventDefault();
    
    var dropSource = ev.dataTransfer.getData("text");
    
    if (document.getElementById("jellyHappy").style.animationPlayState === "running"
            || document.getElementById("jellyHappy").style.WebkitAnimationPlayState === "running"
            || document.getElementById("jellySad").style.animationPlayState === "running"
            || document.getElementById("jellySad").style.WebkitAnimationPlayState === "running") {
        ev.preventDefault();
    }
    //stage 1
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[0] + '")' && dropSource === "fruit2") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage2();
        setTimeout(resetJellyState, 4000);
    }
    
    //stage 2
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[1] + '")' && dropSource === "fruit2") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage3();
        setTimeout(resetJellyState, 4000);
    }
        
    //stage 3
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[2] + '")' && dropSource === "fruit1") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage4();
        setTimeout(resetJellyState, 4000);
    }
    
    //stage 4
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[3] + '")' && dropSource === "fruit2") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage5();
        setTimeout(resetJellyState, 4000);
    }
    
    //stage 5
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[4] + '")' && dropSource === "fruit1") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage6();
        setTimeout(resetJellyState, 4000);
    }
    
    //stage 6
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[5] + '")' && dropSource === "fruit3") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage7();
        setTimeout(resetJellyState, 4000);
    }
    
    //stage 7
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[6] + '")' && dropSource === "fruit3") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage8();
        setTimeout(resetJellyState, 4000);
    }
    
    //stage 8
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[7] + '")' && dropSource === "fruit1") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        stage9();
        setTimeout(resetJellyState, 4000);
    }
    
    //stage 9
        else if (document.getElementById("number").style.backgroundImage === 'url("' + myNumber[8] + '")' && dropSource === "fruit3") {
        ev.target.appendChild(document.getElementById(dropSource));
        document.getElementById(dropSource).style.visibility = "hidden";
        correctAnswer();
        houseStep9();
        setTimeout(resetJellyState, 4000);
        setTimeout(gameEnd, 4500);
    } else {
        ev.preventDefault();
        wrongAnswer();
        setTimeout(resetJellyState, 3500);
    }
}