
 
  const botumOn = document.querySelector('[data-start]');
  const botumOff = document.querySelector('[data-stop]');
  let intervalId = null;

  botumOn.addEventListener('click', startColorChange);
  botumOff.addEventListener('click', stopColorChange);
  
  botumOn.classList.add('btn');
  botumOff.classList.add('btn');

  function startColorChange(){
    botumOn.disabled = true;
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
  function stopColorChange(){
    botumOn.disabled = false;
    clearInterval(intervalId);
  }

 function changeBackgroundColor(){
  const randomColor = getRandomHexColor();
  botumOn.style.backgroundColor = randomColor;
  botumOff.style.backgroundColor = randomColor;
 }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };