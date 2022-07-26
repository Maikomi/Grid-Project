const btn1 = document.getElementById('one');
// btn1.onclick = () => {document.getElementById('one').style.backgroundColor = "red"}

btn1.onclick = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('one').style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}


const btn2 = document.getElementById('two');
btn2.onclick = () => alert('Hej, to łaskocze. Hi hi hi');


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
  console.log(newBg);
  btn6.classList.toggle('invert');
}
