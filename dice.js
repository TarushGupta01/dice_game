const rand1 = Math.floor(Math.random()*6)+1;
const rand2 = Math.floor(Math.random()*6)+1;
const ig1 = "dice" + rand1 + ".png";
const ig2 = "dice" + rand2 + ".png";

document.querySelector(".img1").setAttribute("src",ig1);
document.querySelector(".img2").setAttribute("src",ig2);

if(rand1 > rand2)  {
  document.querySelector(".he").innerText = "Player1 Wins!"
} else if(rand1 < rand2)  {
  document.querySelector(".he").innerText = "Player2 Wins!"
} else {
  document.querySelector(".he").innerText = "Draw!";
}
