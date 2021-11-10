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

export const errorHandler = (err) => {
  const splitErr = err.split(':')
  if (splitErr[0] === "name " && splitErr[1] === " This field is required.") {
    return "Please provide a name."
  }
  if (splitErr[0] === "password " && splitErr[1] === " This field is required.") {
    return "Please provide a password."
  }
  if (splitErr[0] === "password " && splitErr[1] === " Password was incorrect.") {
    return "Password was incorrect."
  }
  if (splitErr[0] === "email " && splitErr[1] === " This field is required.") {
    return "Please provide an email."
  }
  if (splitErr[0] === "email " && splitErr[1] === " Email address is already in use.") {
    return "Email address is already in use."
  }
  if (splitErr[0] === "pass") {
    return "Passwords do not match."
  }
  if (splitErr[1] === " Email provided not found.") {
    return "Invalid email."
  }
  if (splitErr[1] === " No such user exists.") {
    return "Invalid password."
  }
}
