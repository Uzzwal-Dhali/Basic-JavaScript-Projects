window.onload = () => {
  main();
}

function main() {
  const button = document.querySelector(".button");
  const container = document.querySelector(".container");
  const display = document.getElementById("display");
  const copy = document.getElementById("copy");

  button.addEventListener("click", function() {
    const bgColor = generateColor();
    container.style.background = bgColor;
    display.value = bgColor;
  });

  copy.addEventListener('click', function() {
    navigator.clipboard.writeText(display.value);
    this.innerHTML = "Coppied";
  });
}

function generateColor() {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);

  return `#${red}${green}${blue}`;
}
