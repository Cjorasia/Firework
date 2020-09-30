let t = 0;
let c = document.querySelector(
  "canvas"
); /* returns first element that matches a specified CSS selector(s) in the document */

let $ = c.getContext(
  "2d"
); /*obtain the rendering context and its drawing functions */
c.width = window.innerWidth;
c.height = window.innerHeight;
$.fillStyle = "hsla(0,0%,0%,1)";

/* event listener syntax= element.addEventListener(event, function, useCapture); */
/* attaches an event handler to the specified element */

window.addEventListener(
  "resize",
  function () {
    c.width = window.innerWidth; /*Get the current frame's height and width */
    c.height = window.innerHeight;
  },
  false
);

const draw = () => {
  $.globalCompositeOperation =
    "source -over"; /*sets or returns how a source (new) image are drawn onto a destination (existing) image */
  $.fillStyle = "hsla( 0, 0%, 0%, .1)";
  $.fillRect(0, 0, c.width, c.height);
  let foo = Math.sin(t) * 2 * Math.PI;
  for (let i = 0; i < 400; ++i) {
    let r = 400 * Math.sin(i * foo);
    $.globalCompositeOperation = " ";
    $.fillStyle = "hsla(" + i + 12 + ",100%, 60%, 1)";
    $.beginPath();
    $.arc(
      Math.sin(i) * r + c.width / 2,
      Math.cos(i) * r + c.height / 2,
      1.5,
      0,
      Math.PI * 2
    );
    $.fill();
  }
  t += 0.000005;
  return (t %= 2 * Math.PI);
};

const run = () => {
  window.requestAnimationFrame(run); /* reccursion */
  draw();
};
run();
