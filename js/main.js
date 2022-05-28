document.addEventListener("DOMContentLoaded", () => {
  console.log("yes");

  const str = 'Alla';
  console.log('str =>', str);

  const num = 2;
  console.log('nub =>', num);

  const bool = true // false
  console.log('bool =>', bool);

  function Sum(num1, num2) {
    return num1 + num2;
  }

  console.log('result', Sum(2, 5));


  function Minus(num1, num2) {
    return num1 - num2;
  }
  console.log(`result`, Minus(7,4))
  

  const hi = document.querySelector('.hi');
  console.log(hi);
  hi.innerHTML = Minus(7,4);
  

});