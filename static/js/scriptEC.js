var boardBackgrounds = ['https://cdnb.artstation.com/p/assets/images/images/021/056/145/large/haoning-wu-lab-full.jpg?1570207096', 'https://art.ngfiles.com/images/656000/656013_frybrix_frankenstein-lab.jpg?f1540912570']

var scope = document.querySelector('.scope');
var board = document.querySelector('.board');
var wally = document.createElement('div');
var startBtn = document.getElementById('startBtn');
var menu = document.querySelector('.menu');
var timeBox = document.querySelector('.time-box');
var time = "Your time: 0s";
var timeInterval;
var gameStart = false;

var difficultSelect = document.querySelector('.difficult-select');
var difficultLVL = 'medium';
var scoreBox = document.querySelector('.score-box');
var score = 0;

startBtn.addEventListener('click', function(){
  startGame()
})

board.addEventListener('mousemove', function(e){
    scope.style.transform = 'translateY('+(e.clientY-0)+'px)';
    scope.style.transform += 'translateX('+(e.clientX-0)+'px)';
},false);


wally.addEventListener('click', function(){
  location.href = "/hisNave/"
});

function showScore(){
  score = 0;
  score = time;
  scoreBox.style.display = 'block';
  scoreBox.innerHTML = "Your score: " + score + "s";
}

function startGame(){
  settings();
  gameStart = true;
  setMenuHide();
  setBoardVisible();
  setScopeVisible();
  createBoardBg();
  createWally();
  countTime();
}

function backToMenu(){
  gameStart = false;
  clearInterval(timeInterval);
  setBoardHide();
  setScopeHide();
  setMenuVisible();
  showScore()
}

function setMenuHide(){
  menu.style.display = 'none';
  return;
}

function setMenuVisible(){
  menu.style.display = 'flex';
  return;
}

function setBoardVisible(){
  board.style.display = 'block';
  return;
}

function setBoardHide(){
  board.style.display = 'none';
  return;
}

function setScopeVisible(){
  scope.style.display = 'block';
  return;
}

function setScopeHide(){
  scope.style.display = 'none';
  return;
}

function createBoardBg(){
  var randomBgNumber = Math.floor(Math.random() * boardBackgrounds.length) + 0
  var randomBg = boardBackgrounds[randomBgNumber]
  board.style.backgroundImage = "url(" + randomBg + ")";
}

function countTime(){
  time = 0;
  timeBox.innerHTML = time
  timeInterval = setInterval(function(){
    time ++;
    timeBox.innerHTML = "Your time: " + time + "s";
  }, 1000)
}

function settings(){
  difficultLVL = difficultSelect.options[difficultSelect.selectedIndex].value
  switch(difficultLVL) {
    case "easy":
        scope.style.top = '-150px';
        scope.style.left = '-150px';
        scope.style.width = '300px';
        scope.style.height = '300px';
        break;
    case "medium":
        scope.style.top = '-100px';
        scope.style.left = '-100px';
        scope.style.width = '200px';
        scope.style.height = '200px';
        break;
    case "hard":
        scope.style.top = '-75px';
        scope.style.left = '-75px';
        scope.style.width = '150px';
        scope.style.height = '150px';
        break;
    }
}

function createWally(){
  wally.classList.add('wally');
  board.appendChild(wally);
  
  var boardCoordInfo = board.getBoundingClientRect();
  var WallyCoordInfo = wally.getBoundingClientRect();
  
  wallyRandomX = Math.random() * (boardCoordInfo.width - WallyCoordInfo.width - 50);
  wallyRandomY = Math.random() * (boardCoordInfo.height - WallyCoordInfo.height - 50);
  wallyRotate = Math.floor(Math.random() * 360) + 1
  
  wally.style.top = wallyRandomY + 'px';
  wally.style.left = wallyRandomX + 'px';
  wally.style.transform = "rotate("+ wallyRotate +"deg)";
  wally.style.display = 'block';
};