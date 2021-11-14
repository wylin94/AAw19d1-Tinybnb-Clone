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

export const specRevAvg = (reviews, revSec) => {
  let avg = 0
  reviews?.forEach(review => {
    avg += review[revSec]
  })
  return (avg / reviews?.length).toFixed(1)
}

export const onlyWhiteSpace = (str) => {
  if (!str.replace(/\s/g, "").length) {
    return true
  } else {
    return false
  }
}

export const avgReview = (reviews) => {
  let avg = 0
  for (let i = 0; i < reviews?.length; i++) {
    avg += reviews[i].avgRating
  }
  return (avg / reviews?.length).toFixed(2)
}
