const cells = document.querySelectorAll('[cells]');
const displayNumber = document.getElementById("showNumber");
const box1 = document.querySelectorAll('[box1]');
const box2 = document.querySelectorAll('[box2]');
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
var player1Name;
var player2Name;
let controlFlag = false;
let condition = true;

function modalclose() {

  //hiding modal box

  player1.innerText = document.getElementById("p1").value;
  player2.innerText = document.getElementById("p2").value;
  if(player1.innerText == '')
   player1.innerText = "player1";
  if(player2.innerText == '')
   player2.innerText = "player2";
   player1Name = player1.innerText;
   player2Name = player2.innerText;
  // checking for manual or automatic
  if(document.getElementById("radio3").checked){
      controlFlag = true;
  }
  if(document.getElementById("radio1").checked) {
    displayNumber.style.padding = "9vh 0px 0px 0vw";
    displayNumber.style.fontSize = "10vh";
    for(let i = 0; i < 90 ; i++)
    {
      document.getElementById("showNumber").style.padding = "0px 0px 0px 0px";
      document.getElementById("showNumber").style.fontSize = "x-large";
      setTimeout(function() {
        generator();
    }, 2300 * i);
    }
  }
  else {
    document.getElementById("btn").style.display = "block";
  }
  document.getElementById("modal").style.display = "none";
 }

  //filling numbers 1 to 90
  let arr = [];
  for(let x = 0; x  < 90 ; x++){
    cells[x].innerHTML = x+1;
    arr.push(true);
  }

//taking and placing random positions
let positiona1 = [];
let positiona2 = [];
let positiona3 = [];
while(positiona1.length < 5){
  let x = Math.floor((Math.random() * 9)  + 1);
  if(!(positiona1.includes(x)))
    positiona1.push(x);
  else
    continue;
}
while(positiona2.length < 5){
    let y = Math.floor((Math.random() * 9)  + 1);
    if(!(positiona2.includes(y)))
      positiona2.push(y);
    else
      continue;
}
while(positiona3.length < 5){
    let z = Math.floor((Math.random() * 9)  + 1);
    if(!(positiona3.includes(z)))
      positiona3.push(z);
    else
      continue;
}
positiona1.sort();
positiona2.sort();
positiona3.sort();

function randomNumber(min, max) {
   return Math.floor((Math.random() * (max - min + 1))  + min)
}

for(let i = 0; i < 5; i++ ){
  switch(positiona1[i]){
    case 1:document.getElementById("a1").innerHTML = randomNumber(1,3);break;
    case 2:document.getElementById("a2").innerHTML = randomNumber(11,13);break;
    case 3:document.getElementById("a3").innerHTML = randomNumber(21,23);break;
    case 4:document.getElementById("a4").innerHTML = randomNumber(31,33);break;
    case 5:document.getElementById("a5").innerHTML = randomNumber(41,43);break;
    case 6:document.getElementById("a6").innerHTML = randomNumber(51,53);break;
    case 7:document.getElementById("a7").innerHTML = randomNumber(61,63);break;
    case 8:document.getElementById("a8").innerHTML = randomNumber(71,73);break;
    case 9:document.getElementById("a9").innerHTML = randomNumber(81,83);break;
  }
  switch(positiona2[i]){
    case 1:document.getElementById("a10").innerHTML = randomNumber(4,8);break;
    case 2:document.getElementById("a11").innerHTML = randomNumber(14,18);break;
    case 3:document.getElementById("a12").innerHTML = randomNumber(24,28);break;
    case 4:document.getElementById("a13").innerHTML = randomNumber(34,38);break;
    case 5:document.getElementById("a14").innerHTML = randomNumber(44,48);break;
    case 6:document.getElementById("a15").innerHTML = randomNumber(54,58);break;
    case 7:document.getElementById("a16").innerHTML = randomNumber(64,68);break;
    case 8:document.getElementById("a17").innerHTML = randomNumber(74,78);break;
    case 9:document.getElementById("a18").innerHTML = randomNumber(84,88);break;
  }
  switch(positiona3[i]){
    case 1:document.getElementById("a19").innerHTML = randomNumber(9,10);break;
    case 2:document.getElementById("a20").innerHTML = randomNumber(19,20);break;
    case 3:document.getElementById("a21").innerHTML = randomNumber(29,30);break;
    case 4:document.getElementById("a22").innerHTML = randomNumber(39,40);break;
    case 5:document.getElementById("a23").innerHTML = randomNumber(49,50);break;
    case 6:document.getElementById("a24").innerHTML = randomNumber(59,60);break;
    case 7:document.getElementById("a25").innerHTML = randomNumber(69,70);break;
    case 8:document.getElementById("a26").innerHTML = randomNumber(79,80);break;
    case 9:document.getElementById("a27").innerHTML = randomNumber(89,90);break;
  }
}

 positionb1 = [];
 positionb2 = [];
 positionb3 = [];
while(positionb1.length < 5){
  let x = Math.floor((Math.random() * 9)  + 1);
  if(!(positionb1.includes(x)))
    positionb1.push(x);
  else
    continue;
}
while(positionb2.length < 5){
    let y = Math.floor((Math.random() * 9)  + 1);
    if(!(positionb2.includes(y)))
      positionb2.push(y);
    else
      continue;
}
while(positionb3.length < 5){
    let z = Math.floor((Math.random() * 9)  + 1);
    if(!(positionb3.includes(z)))
      positionb3.push(z);
    else
      continue;
}
positionb1.sort();
positionb2.sort();
positionb3.sort();



for(let i = 0; i < 5; i++ ){
  switch(positionb1[i]){
    case 1:document.getElementById("b1").innerHTML = randomNumber(1,3);break;
    case 2:document.getElementById("b2").innerHTML = randomNumber(11,13);break;
    case 3:document.getElementById("b3").innerHTML = randomNumber(21,23);break;
    case 4:document.getElementById("b4").innerHTML = randomNumber(31,33);break;
    case 5:document.getElementById("b5").innerHTML = randomNumber(41,43);break;
    case 6:document.getElementById("b6").innerHTML = randomNumber(51,53);break;
    case 7:document.getElementById("b7").innerHTML = randomNumber(61,63);break;
    case 8:document.getElementById("b8").innerHTML = randomNumber(71,73);break;
    case 9:document.getElementById("b9").innerHTML = randomNumber(81,83);break;
  }
  switch(positionb2[i]){
    case 1:document.getElementById("b10").innerHTML = randomNumber(4,8);break;
    case 2:document.getElementById("b11").innerHTML = randomNumber(14,18);break;
    case 3:document.getElementById("b12").innerHTML = randomNumber(24,28);break;
    case 4:document.getElementById("b13").innerHTML = randomNumber(34,38);break;
    case 5:document.getElementById("b14").innerHTML = randomNumber(44,48);break;
    case 6:document.getElementById("b15").innerHTML = randomNumber(54,58);break;
    case 7:document.getElementById("b16").innerHTML = randomNumber(64,68);break;
    case 8:document.getElementById("b17").innerHTML = randomNumber(74,78);break;
    case 9:document.getElementById("b18").innerHTML = randomNumber(84,88);break;
  }
  switch(positionb3[i]){
    case 1:document.getElementById("b19").innerHTML = randomNumber(9,10);break;
    case 2:document.getElementById("b20").innerHTML = randomNumber(19,20);break;
    case 3:document.getElementById("b21").innerHTML = randomNumber(29,30);break;
    case 4:document.getElementById("b22").innerHTML = randomNumber(39,40);break;
    case 5:document.getElementById("b23").innerHTML = randomNumber(49,50);break;
    case 6:document.getElementById("b24").innerHTML = randomNumber(59,60);break;
    case 7:document.getElementById("b25").innerHTML = randomNumber(69,70);break;
    case 8:document.getElementById("b26").innerHTML = randomNumber(79,80);break;
    case 9:document.getElementById("b27").innerHTML = randomNumber(89,90);break;
  }
}



let check1 = [];
let check2 = [];

for(let s = 0 ; s < 27; s++){
  check1[s] = false;
  check2[s] = false;
}

//  generating numbers
function generator(){
 if(condition){
  while(true){
    let a = Math.floor((Math.random() * 90)  + 1);
    for(let v = 0; v < 27; v++){
      if(a == box1[v].innerText)
       {
         if(controlFlag){
           box1[v].style.backgroundColor= "#8D5524";
           check1[v] = true;
         }
         else {
           box1[v].addEventListener('click' , () => {
             box1[v].style.backgroundColor= "#8D5524";
             check1[v] = true;
           })
         }
         // checking lines
         firstfive();
         line1Check();
         line2Check();
         line3Check();
         // checking winner
         checkWinner();
       }
    }
    for(let v = 0; v < 27; v++){
      if(a == box2[v].innerText)
       {
         if(controlFlag){
           box2[v].style.backgroundColor= "#8D5524";
           check2[v] = true;
         }
         else {
           box2[v].addEventListener('click' , () => {
             box2[v].style.backgroundColor= "#8D5524";
             check2[v] = true;
           })
         }
         firstfive();
         line1Check();
         line2Check();
         line3Check();
         checkWinner();
       }
    }

    if(arr[a-1])
    {
      displayNumber.innerHTML = a;
      var msg = new SpeechSynthesisUtterance(a);
      window.speechSynthesis.speak(msg);
      cells[a-1].style.backgroundColor= "#8D5524";
      arr[a-1] = false;
      break;
    }
  }
 }
}

let f1 = true;
function firstfive() {
  let a1 = 0 , b1 = 0;
  for(let p = 0;p < 27;p++){
   if(check1[p])
      a1++;
   if(check2[p])
      b1++;
   }
   if(f1){
     if(a1 >= 5){
       player1.innerHTML = `${player1Name} completed first five`;
       f1 = false;
     }
     if(b1 >= 5){
       player2.innerHTML = `${player2Name} completed first five`;
       f1 = false;
     }
   }
}
let  g1 = true;
function line1Check() {
  let a1 = 0 , b1 = 0 ;
     for(let p = 0;p < 9;p++){
      if(check1[p])
         a1++;
      if(check2[p])
         b1++;
      }
      if(g1){
        if(a1 == 5){
          player1.innerHTML = `${player1Name} completed 1st line`;
          g1 = false;
        }
        if(b1 == 5){
          player2.innerHTML = `${player2Name} completed 1st line`;
          g1 = false;
        }
      }
    }

let g3 = true;
function line2Check() {
  let a2 = 0 , b2 = 0;
  for(let p = 9;p < 18;p++){
      if(check1[p])
         a2++;
      if(check2[p])
         b2++;
     }
      if(g3){
        if(a2 == 5){
          player1.innerHTML = `${player1Name} completed 2nd line`;
          g3 = false;
        }
        if(b2 == 5){
          player2.innerHTML = `${player2Name} completed 2nd line`;
          g3 = false;
        }
      }
    }
let g5 = true;
function line3Check() {
  let a3 = 0 , b3 = 0;
  for(let p = 18;p < 27;p++){
      if(check1[p])
         a3++;
      if(check2[p])
         b3++;
    }
    if(g5){
      if(a3 == 5){
        player1.innerHTML = `${player1Name} completed 3rd line`;
        g5 = false;
      }
      if(b3 == 5){
        player2.innerHTML = `${player2Name} completed 3rd line`;
        g5 = false;
        }
     }
   }


function checkWinner() {
  let count1 = 0 , count2 = 0;
  for(let p = 0;p < 27;p++){
    if(check1[p])
       count1++;
    if(count1 >= 15){
      player1.innerHTML = `${player1Name} winner`;
      document.getElementById("winnerTitle").innerText =  `congratulations ${player1Name} you are a winner`;
      document.getElementById("winner").style.display = "block";
      condition = false;
    }
    if(check2[p])
       count2++;
    if(count2 >= 15){
      player2.innerHTML = `${player2Name} winner`;
      document.getElementById("winnerTitle").innerText =  `congratulations ${player2Name} you are a winner`;
      document.getElementById("winner").style.display = "block";
      condition = false;
    }
  }
}
