const setApproval = (rating) => {
  try {
    if (rating === 0) {
      return "bad";
    } else if (rating > 0 && rating <= 3) {
      return "average";
    } else if (rating >= 4) {
      return "good";
    }
  } catch (error) {
    console.log(error);
  }
};

const firstUpper = (rawValue) => {
  try {
    return rawValue
      .split(" ")
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ");
  } catch (error) {
    console.log(error);
  }
};

const setLower = (value) => {
  const newValue = value.toLowerCase();
  return newValue;
};

const changeItem = (value, updatedValue) => {
  value = updatedValue;
  return value;
};

module.exports = {
  setApproval,
  firstUpper,
  changeItem,
  // setActor,
  // setRating,
  setLower,
};
