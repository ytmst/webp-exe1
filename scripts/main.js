let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/display_monitor_computer.png') {
    myImage.setAttribute ('src','images/display_monitor_computer_broken.png');
  } else {
    myImage.setAttribute ('src','images/display_monitor_computer.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'ようこそ私のホームページへ ' + myName + 'さん';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'こんにちは, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}