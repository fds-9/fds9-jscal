// 아름다운 코드
// const opEl = document.querySelectorAll('.op-main')
const displayEl = document.querySelector('.display')
const acEl = document.querySelector('.op-ac')
const negEl = document.querySelector('.op-neg')
const percentEl = document.querySelector('.op-percentEl')
const divideEl = document.querySelector('.op-divideEl')
const multiEl = document.querySelector('.op-multi')
const minusEl = document.querySelector('.op-minus')
const plusEl = document.querySelector('.op-plus')
const eqlEl = document.querySelector('.op-eql')
const dotEl = document.querySelector('.num-dot')
const num1El = document.querySelector('.num-1')
const num2El = document.querySelector('.num-2')
const num3El = document.querySelector('.num-3')
const num4El = document.querySelector('.num-4')
const num5El = document.querySelector('.num-5')
const num6El = document.querySelector('.num-6')
const num7El = document.querySelector('.num-7')
const num8El = document.querySelector('.num-8')
const num9El = document.querySelector('.num-9')
const num0El = document.querySelector('.num-0')

let str = '';
let result = 0;
const arr = [];
const operator = [];

// plusEl.addEventListener('click',() => {
//    str += '+';
//   result  += pa
// });
// negEl.addEventListener('click',() => {
//   str += '-';
//  displayEl.textContent = str; 
// });
// plusEl.addEventListener('click',() => {
//   str += '+';
//  displayEl.textContent = str; 
// });

//ac
acEl.addEventListener('click',() => {
  str = '';
  result  = 0;
 displayEl.textContent = '0'; 
});
//number
num1El.addEventListener('click',() => {
  str += '1';
 displayEl.textContent = str; 
});

num2El.addEventListener('click',() => {
  str += '2';
 displayEl.textContent = str; 
});
num3El.addEventListener('click',() => {
  str += '3';
 displayEl.textContent = str; 
});
num4El.addEventListener('click',() => {
  str += '4';
 displayEl.textContent = str; 
});
num5El.addEventListener('click',() => {
  str += '5';
 displayEl.textContent = str; 
});
num6El.addEventListener('click',() => {
  str += '6';
 displayEl.textContent = str; 
});
num7El.addEventListener('click',() => {
  str += '7';
 displayEl.textContent = str; 
});
num8El.addEventListener('click',() => {
  str += '8';
 displayEl.textContent = str; 
});
num9El.addEventListener('click',() => {
  str += '9';
 displayEl.textContent = str; 
});
num0El.addEventListener('click',() => {
  if ( str.length >= 1 ){
    str += '0';
    displayEl.textContent = str; 
  }
});

dotEl.addEventListener('click',() => {
  str += '.';
  displayEl.textContent = str;
});
//+/-
// negEl.addEventListener('click',() => {
//   if(str[0] === '-'){
//     str = str.slice(1, str.length);
//   } else if (str[0] !== '-' && str !== ''){
//     str = '-' + str ;
//   } 
//   displayEl.textContent = str;
// });

// minusEl.addEventListener('click',() => {
//   let firstNum = parseFloat(str);
//   result -= parseFloat(str);
//   str = "";
// });

plusEl.addEventListener('click',() => {
  arr.push(parseFloat(str));
  str = "";
  operator.push("+");
});
minusEl.addEventListener('click',() => {
  arr.push(parseFloat(str));
  str = "";
  operator.push("-");
});
divideEl.addEventListener('click',() => {
  arr.push(parseFloat(str));
  str = "";
  operator.push("/");
});
multiEl.addEventListener('click',() => {
  arr.push(parseFloat(str));
  str = "";
  operator.push("*");
});
eqlEl.addEventListener('click',() => {
  function calcResult(operator) {

    switch (operator) {
      case '+':
        result += arr[i];
        break;
      case '−':
        result -= arr[i];
        break;
      case '*':
        result *= arr[i];
        break;
      case '/':
        result /= arr[i];
        break;
    }
    return result;
   }
  displayEl.textContent = result;
});

