// type one text in the typwriter
// keeps calling itself until the text is finished
function typeWriter(text, element, i, fnCallback) {
  if (i < text.length) {
    element.innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    setTimeout(function () {
      typeWriter(text, element, i + 1, fnCallback);
    }, 100);
  } else {
    setTimeout(fnCallback, 700);
  }
}

function startTextAnimation(textArray, i, element) {
  if (textArray[i] === undefined) {
    setTimeout(function () {
      startTextAnimation(textArray, 0, element);
    }, 1000);
    return;
  }

  if (i < textArray[i].length) {
    typeWriter(textArray[i], element, 0, function () {
      startTextAnimation(textArray, i + 1, element);
    });
    return;
  }
}

export { startTextAnimation };
