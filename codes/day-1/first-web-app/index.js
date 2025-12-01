function callMe() {
  window.alert("hello...");
}
var para = window.document.getElementById("textPara");
para.addEventListener("click", callMe);
//para.innerText="Learning Angular"
para.innerHTML = "<b>Learning Angular</b>";
//message="Learning Angular"
//{{message}}
var secondPara = document.getElementById('secondPara')
secondPara.style.backgroundColor = 'grey'
secondPara.style.marginLeft = '0px';
secondPara.style.fontFamily = 'consolas'

var newPara = document.createElement('p')
newPara.id = 'thirdPara'
newPara.innerText = "provides facilities to make HTTP requests"
newPara.style.fontFamily = 'consolas'

// document.body.appendChild(document.createElement('br'))
// document.body.appendChild(newPara)

document.body.append(document.createElement('br'),newPara)

// function attacheParaEventHandler() {
//   var para = window.document.getElementById("textPara");
//   para.addEventListener("click", callMe);
//   //para.innerText="Learning Angular"
//   para.innerHTML = "<b>Learning Angular</b>";
// }
// window.addEventListener("DOMContentLoaded", attacheParaEventHandler);
