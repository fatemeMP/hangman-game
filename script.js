const secretWord = ["dream" , "eyes" , "advertisment" , "squid game" ,"that" ,"love" ,"sound"];

let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;


function selectedRandomItem () {
    randomItem = secretWord[Math.floor(Math.random() * secretWord.length)];
    document.getElementById("letters").addEventListener("click" , buttonHandler);
    window.addEventListener("keydown" ,keyHandler);
    console.log(randomItem);
}


function setUnderScores () {
    let splitedWord = randomItem.split("");
    let mapWord = splitedWord.map( letter => (clicked.indexOf(letter) >= 0 ? letter : "_" ));
    result = mapWord.join("");
    document.getElementById("clue").innerHTML = `<p> ${result}</p>`;
}

function win() {
    if (result === randomItem){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src ="assets/winner.png";
    }
}

function lose() {
    if(mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p> random word is : ${randomItem} </p>`;
    }
}

function updatePicture () {
    const image = document.getElementById("image").querySelector("img");
    image.src=`assets/hangman${mistakes}.png`;
}


function letterHandler(letter){
     letter = letter.toLowerCase();
     clicked.indexOf(letter) === -1 ? clicked.push(letter) : null ;
     document.getElementById(letter.toUpperCase()).className = "used";
     if(randomItem.indexOf(letter) >= 0 ){   //age kalameyi ke karbar entekhab karde tooye click bud
        setUnderScores ();
        win ();
     }else if(randomItem.indexOf(letter) === -1 ){   //kalameye entekhabi karbar too click nist
        mistakes++;
        lose();
        updatePicture ();
     }
}

function buttonHandler(event){
    letterHandler(event.target.id);
  
}

function keyHandler(event){
    letterHandler(event.key);
  
}

selectedRandomItem();
setUnderScores ();