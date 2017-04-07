var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
	var myName = prompt('enter name!');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'wazzup ' + myName;
}
if(!localStorage.getItem('name')){
	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'welcome back ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}