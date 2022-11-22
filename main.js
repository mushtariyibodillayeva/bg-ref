window.onload = function () {
  getRandNum = () => {
    return Math.floor(Math.random() * 16).toString(16);
  };
  getColor = () => {
    body.style.background =
      "#" + Array.from({ length: 6 }).map(getRandNum).join("");
  };
  var body = document.querySelector("body");
  body.addEventListener("load", getColor());
};
