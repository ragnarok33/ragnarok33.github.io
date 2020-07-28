let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/oak.jpg') {
        myImage.setAttribute('src','images/oak2.jpg');
    } else {
        myImage.setAttribute('src','images/oak.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    }
    else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Oaks are cool ' + myName;
    }  
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Oaks are cool ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}