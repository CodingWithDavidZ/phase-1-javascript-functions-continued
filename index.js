function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (location = "go to the office") {
  return `This Monday, I will ${location}.`;
};

//write function called wrapAdjective
let wrapAdjective = function (flair = "*") {
  //write innerFunction that takes single param and defaults to "special"
  return function (argument = "special") {
    //return string "You are..." where ... is param
    return `You are ${flair}${argument}${flair}!`;
    //it should take a param string that should default to "*"
  };
};
