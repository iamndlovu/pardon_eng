document.getElementById('footer_year').textContent = new Date().getFullYear();

//select DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.list-item')

menuBtn.addEventListener('click', () => {
  if(menuBtn.classList.contains('close')) hideMenu()
  else showMenu();
  
//show menu
  function showMenu() {
    menuBtn.classList.add('close');
    document.querySelectorAll('.btn-line').forEach(line => line.classList.add('close'));
    menu.classList.add('show');
    navItems.forEach(item => {
      item.classList.add('show')
      item.addEventListener('click', hideMenu);
    });
  }
//hide menu
  function hideMenu() {
    menuBtn.classList.remove('close');
    document.querySelectorAll('.btn-line').forEach(line => line.classList.remove('close'));
    menu.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
  }
});