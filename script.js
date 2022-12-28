document.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
  if (event.keyCode === 39 || event.keyCode === 37) {
    let currentNumber = location.href.match(/.*\/(\d+)\.html/i)[1];

    location.href = location.href.replace(currentNumber + ".html", String(Number(currentNumber) + (event.keyCode === 39 ? 1 : -1)) + ".html");
  }
});