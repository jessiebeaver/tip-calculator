var billEle = document.body.querySelector(".bill");
var tipEle = document.body.querySelector(".tip");
var totalEle = document.body.querySelector(".total");

var firstPrompt = Number(prompt("How much is the bill?"));

billEle.innerHTML="Your bill is $"+firstPrompt;
tipEle.innerHTML="The tip is $"+firstPrompt*1.07*0.05;
totalEle.innerHTML="Your total taxed bill plus tip is $"+firstPrompt*1.0535;