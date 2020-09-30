// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*"){
  return function(adjective){
    return `You are ${symbol}${adjective}${symbol}!`
  }
}

// const wrapAdjective = (symbol = "*") => (adjective) => {
//   return `You are ${symbol}${adjective}${symbol}!`
// }

const Calculator = {
  function calculate(operation){
    return function (a,b) {return a `${operation}` b}
  }
  add: calculate()
  // subtract: function (a,b) {return a-b},
  // multiply: function (a,b) {return a*b},
  // divide: function (a, b) {return a/b}
}
