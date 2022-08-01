const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
const btn4 = document.getElementById("four");
const btn5 = document.getElementById("five");
const btn6 = document.getElementById("six");
const btn7 = document.getElementById("seven");
const btn8 = document.querySelector("button");
const btn9 = document.getElementById("nine");
const btn10 = document.getElementById("ten");

btn1.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
});


btn2.addEventListener('click',() => alert("Hej, to łaskocze. Hi hi hi"));


const increaseCounter = (e) => {
  const textContent = e.target.textContent.trim();
  const splittedTextContent = textContent.split(':');
  let counter = splittedTextContent[1];
  const newTextContent = `${e.type} counter: ${++counter}`;
  e.target.textContent = newTextContent;
};

const addListeners = child => {
  const textCount = child.lastChild;
  const textContent = textCount.textContent.trim();
  const splittedTextContent = textContent.split(' ');
  const event = splittedTextContent[0];
  child.lastChild.addEventListener(event, increaseCounter);
};

const gridChildren = [...document.getElementsByClassName('counter')];
gridChildren.forEach(addListeners);

const kolor = () =>{
    let newBg = document.getElementById("two").style.backgroundColor;
  if (newBg === "pink") {
    document.getElementById("two").style.backgroundColor = "lightblue";
    document.getElementById("three").style.backgroundColor = "lightblue";
  } else {
    document.getElementById("two").style.backgroundColor = "pink";
    document.getElementById("three").style.backgroundColor = "pink";
  }
};


btn5.addEventListener('click', kolor);


btn6.addEventListener('dblclick', () => {
  let newBg = document.getElementById("six").style;
  btn6.classList.toggle("invert");
});


btn7.addEventListener('mouseover', () => {
  btn7.classList.toggle("changeSize");
});
btn7.addEventListener('mouseleave', () => {
  btn7.classList.toggle("changeSize");
});


let text = document.querySelector("h3");
btn8.addEventListener('click', () => {
  text.classList.toggle("visibility");
});

let modal = document.getElementById("myModal");


btn9.addEventListener('click', () => {
  modal.style.display = "block";
});
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


btn10.addEventListener('click', () => {
  document.body.classList.toggle("font");
});

const add = () => {
  if (!document.getElementById("cntr").innerHTML.includes("youtube")) {
    if (window.innerWidth > 1000) {
      const new11 = document.createElement("section");
      new11.id = "eleven";
      new11.className = "item";
      new11.innerHTML =
        "<a href='https://www.youtube.com/watch?v=5I5V8VZ3OOA' target='_blank' rel='noopener noreferrer'>kliknij mnie :)</a>";
      document.getElementById("cntr").appendChild(new11);
    }
  } else {
    if (window.innerWidth <= 1000) {
      const die = document.getElementById("eleven");
      die.remove();
    }
  }
};

window.addEventListener('load', add);
window.addEventListener('resize', add);
