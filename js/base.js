export const showAlert = (text) => {
  alert(text);
}

// document.querySelector('#app').innerHTML = `
//   <h1 class='title'>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

const showAlertBtn = document.getElementById('show-alert');
const titleConstName = document.getElementById('title');
const navBar = document.getElementById('navBar');

showAlertBtn?.addEventListener('click', () => {
  titleConstName.style.color = 'red';

  const isOpen = getComputedStyle(navBar).display;
  navBar.style.display = isOpen === 'block' ? 'none' : 'block';
})



let offset = 0;
const rws = document.querySelector('.rws-line');
document.querySelector ('.buttonLast').addEventListener('click',function(){

offset = offset + 828;
if (offset >= 2484) {
  offset = 0;
}
rws.style.left = -offset + 'px' 
}
)

document.querySelector ('.buttonNext').addEventListener('click',function(){

offset = offset - 828;
if (offset < 0) {
  offset = 828;
}
rws.style.left = -offset + 'px' 
}
)
const x =2;
const y = 3;
console.log('multiple =>', x*y);

//=>LESSON 2

//out.innerHTML ='<i>Hi</i>';
//out.innerText ='<i>Hi</i>';
//document.getElementById('out').innerHTML = 777;
let p;
p = document.getElementById('out');
p = document.querySelector('#out');
p.innerHTML = 555;
console.log('hhhh', p);
let c = 'hello';
let d = 'world';
console.log('mix=>',c+d);


//let year = 1987;
//console.log(2021 - year);

function myYear(birthYear) {
  return 2021 - birthYear;
};

myYear(2010);
console.log('rrfrtt', myYear(2010));

 const myOld = document.getElementById('myOld');
 myOld.innerHTML = myYear(1988);

 //=>LESSON 3
 
 function hello() {
  console.log('les3', 'hello');
  hello2();
 };
 function hello2() {
  console.log('hello-2-2-2-22')
 };
 let btn = document.querySelector('#btn')
 console.log(btn);