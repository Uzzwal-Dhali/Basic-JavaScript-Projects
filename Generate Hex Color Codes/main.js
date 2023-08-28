window.onload = () => {
  main();
}

function main() {
  const button = document.querySelector(".button");
  const container = document.querySelector(".container");
  const display = document.getElementById("display");

  button.addEventListener("click", function() {
    const bgColor = generateColor();
    container.style.background = bgColor;
    display.value = bgColor;
  });
}

function generateColor() {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);

  return `#${red}${green}${blue}`;
}
