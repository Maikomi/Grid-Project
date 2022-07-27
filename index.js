const btn1 = document.getElementById('one');
// btn1.onclick = () => {document.getElementById('one').style.backgroundColor = "red"}

btn1.onclick = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}


const btn2 = document.getElementById('two');
btn2.onclick = () => alert('Hej, to łaskocze. Hi hi hi');


let mssg = document.querySelector('p');


const btn3 = document.getElementById('three');
let count = 0;
btn3.onmouseenter = () => {count++;};
btn3.onclick = () => { mssg.textContent = 'Mouseenter events count: ' + count;
count = 0;}


const btn4 = document.getElementById('four');
let counter = 0;
btn4.onmouseleave = () => {counter++;};
btn4.onclick = () => { mssg.textContent = 'Mouseleave events count: ' + counter;
counter = 0;}


const btn5 = document.getElementById('five');
btn5.onclick = () => {
    let newBg = document.getElementById('two').style.backgroundColor;
    if(newBg === 'red') {
      document.getElementById('two').style.backgroundColor = "blue";
      document.getElementById('three').style.backgroundColor = "blue";
    } else {
      document.getElementById('two').style.backgroundColor = "red";
      document.getElementById('three').style.backgroundColor = "red";
    }
}

const btn6 = document.getElementById('six');
btn6.ondblclick = () => {
  let newBg = document.getElementById('six').style;
  btn6.classList.toggle('invert');
}

const btn7 = document.getElementById('seven');
btn7.onmouseover = () => { btn7.classList.toggle('changeSize')};
btn7.onmouseleave = () => { btn7.classList.toggle('changeSize')};


const btn8 = document.querySelector('button');
let text = document.querySelector('h3');
btn8.onclick = () => {text.classList.toggle('visibility')};


let modal = document.getElementById("myModal");
const btn9 = document.getElementById("nine");

btn9.onclick = () => {modal.style.display = "block";}
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const btn10 = document.getElementById('ten');
btn10.onclick = () =>{
  document.body.classList.toggle('font');
  console.log(document.body.classList);
}


const new11 = document.createElement("div");
const btn11 = document.getElementById('add');
btn11.onclick = () =>{
  new11.id = "el";
  new11.className = "item";
document.getElementById('cntr').appendChild(new11)
}


window.onresize = () => {
  console.log(window);
}
