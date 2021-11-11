export const avgReview = (reviews) => {
  let avg = 0
  for (let i = 0; i < reviews.length; i++) {
    avg += reviews[i].avgRating
  }
  return (avg / reviews.length).toFixed(2)
}

export const getCity = (address) => {
  // console.log(address)
  const split = address.split(",")
  return split[1]
}

export const specRevAvg = (reviews, revSec) => {
  let avg = 0
  // console.log(revSec)
  // console.log(reviews)
  reviews.forEach(review => {
    avg += review[revSec]
  })
  // console.log(avg/reviews.length)
  return (avg / reviews.length).toFixed(1)
}

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export const bookedDates = (bookings) => {
  const dateArray = [];
  bookings.forEach(booking => {
    const startDate = new Date(booking.startDate.split(',').join(''))
    const endDate = new Date(booking.endDate.split(',').join(''))
    let currentDate = startDate;
    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      // console.log(dateArray)
      currentDate = currentDate.addDays(1);
      // console.log(currentDate)
    }
    // console.log(dateArray)
  })
  return dateArray;
}

export const capitalizeString = (string) => {
  const words = string.split(' ')
  let capitalString = ''
  words.forEach((word, ind) => {
    if (ind === words.length - 1) {
      capitalString += word.charAt(0).toUpperCase() + word.slice(1)

    } else {

      capitalString += word.charAt(0).toUpperCase() + word.slice(1) + ' '
    }
  })
  // console.log(capitalString)
  return capitalString
}

export const errorHandler = (err) => {
  const splitErr = err.split(':')
  console.log(splitErr)
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


  if (splitErr[0] === "price " && splitErr[1] === " This field is required.") {
    return "Please provide a price.";
  }
  if (splitErr[0] === "description " && splitErr[1] === " This field is required.") {
    return "Please provide a description.";
  }
  if (splitErr[0] === "type " && splitErr[1] === " This field is required.") {
    return "Please provide a spot type.";
  }
  if (splitErr[0] === "num_bedrooms " && splitErr[1] === " This field is required.") {
    return "Please provide the number of bedrooms.";
  }
  if (splitErr[0] === "num_beds " && splitErr[1] === " This field is required.") {
    return "Please provide the number of beds.";
  }
  if (splitErr[0] === "num_baths " && splitErr[1] === " This field is required.") {
    return "Please provide the number of bathrooms.";
  }
  if (splitErr[0] === "total_guests " && splitErr[1] === " This field is required.") {
    return "Please provide the maximum occupancy.";
  }
  if (splitErr[0] === "city " && splitErr[1] === " This field is required.") {
    return "Please provide the state that your listing is in.";
  }
  if (splitErr[0] === "st_address " && splitErr[1] === " This field is required.") {
    return "Please provide the address of your listing.";
  }
  if (splitErr[0] === "longitude " && splitErr[1] === " This field is required.") {
    return "Please provide the longitude of your listing.";
  }
  if (splitErr[0] === "latitude " && splitErr[1] === " This field is required.") {
    return "Please provide the latitude of your listing.";
  }
  if (
    splitErr[0] === "name " &&
    splitErr[1] === " Name must be less than 100 characters."
  ) {
    return "Name must be less than 100 characters.";
  }

}

export const preventLetters = (e) => {
  const charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  const charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}

export const stateList = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]

export const checkIfImageExists = (url) => {
  const img = new Image();
  img.src = url;
  let outcome;
  if (img.complete) {
    outcome = true;
  } else {
    img.onload = () => {
      outcome = true;
    };

    img.onerror = () => {
      outcome = false;
    };
  }
  return outcome
}

export const onlyWhiteSpace = (str) => {
  if (!str.replace(/\s/g, "").length) {
    return true
  } else {
    return false
  }

}
