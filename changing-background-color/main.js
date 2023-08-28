window.onload = () => {
  main();
}

function main() {
  const button = document.querySelector(".button");
  const container = document.querySelector(".container");

  button.addEventListener("click", function() {
    const bgColor = generateColor();
    container.style.background = bgColor;
  });
}

function generateColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
