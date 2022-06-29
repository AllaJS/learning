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



console.log('Alla');