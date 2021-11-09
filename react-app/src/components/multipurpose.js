export const checkIfImageExists = (url) => {
  const image = new Image();
  image.src = url;
  let outcome;
  if (image.complete) {
    outcome = true;
  } else {
    image.onload = () => {
      outcome = true;
    };

    image.onerror = () => {
      outcome = false;
    };
  }
  return outcome
}
