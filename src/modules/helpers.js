"use strict";

const slicer = (str, num) => {
  return str.trim().length > num
    ? str.trim().substring(0, num).trim() + "..."
    : str.trim();
};

const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

// /*//  ВЫЗОВ ФУНКЦИИ 'animate':
// animate({
//   duration: 1000,
//   timing(timeFraction) {
//     return timeFraction;
//   },
//   draw(progress) {
//     elem.style.width = progress * 100 + "%";
//   },
// });
// */

const blockBody = () => {
  const body = document.body;
  body.style.overflow = "hidden";
  const bodyScroll = calcScroll();
  body.style.marginRight = `${bodyScroll}px`;
};

const unBlockBody = () => {
  const body = document.body;
  body.style.overflow = "auto";
  body.style.marginRight = `0`;
};


export { slicer, animate, blockBody, unBlockBody };
