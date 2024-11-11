//Function Declaration
function calculateArea(width, height) {
    return width * height;
  }
  
  console.log("Result (Function Declaration):", calculateArea(5, 10));

//Function Expression
const calculateAreaExpression = function(width, height) {
    return width * height;
  };
  
  console.log("Result (Function Expression):", calculateAreaExpression(5, 10));

//Arrow Function
const calculateAreaArrow = (width, height) => width * height;

console.log("Result (Arrow Function):", calculateAreaArrow(5, 10));