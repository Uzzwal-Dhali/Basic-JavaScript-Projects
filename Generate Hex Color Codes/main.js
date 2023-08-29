window.onload = () => {
  main();
}

function main() {
  const generate = document.querySelector(".generate");
  const container = document.querySelector(".container");
  const display = document.getElementById("display");
  const copy = document.getElementById("copy");

  generate.addEventListener("click", function() {
    const bgColor = generateColor();
    container.style.background = bgColor;
    display.value = bgColor;
    copy.innerHTML = "Copy";
  });

  copy.addEventListener('click', function() {
    navigator.clipboard.writeText(display.value);
    this.innerHTML = "Coppied";
    generateToastMsg(`${display.value} copied successfully!`);
  });
}

function generateColor() {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);

  return `#${red}${green}${blue}`;
}

function generateToastMsg(msg) {
  const div = document.createElement('div');
  div.className = 'toast toast-in';
  div.innerHTML = msg;

  div.addEventListener('click', function() {
    div.classList.remove('toast-in');
    div.classList.add('toast-out');

    div.addEventListener('animationend', function() {
      div.remove();
    });
  });

  document.body.appendChild(div);
}
