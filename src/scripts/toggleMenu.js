function toggleMenu() {
  const openMenuButton = document.querySelector('#open-navigation');
  const closeMenuButton = document.querySelector('#close-navigation');

  const navigation = document.querySelector('#navigation');
  const pageContentContainer = document.querySelector('#page-content');


  openMenuButton.addEventListener('click', () => {
    navigation.classList.add('menu-active');
    pageContentContainer.classList.add('menu-active');
  });

  closeMenuButton.addEventListener('click', () => {
    navigation.classList.remove('menu-active');
    pageContentContainer.classList.remove('menu-active');
  });
}