
/**
 * Encapsulates the navigation menu toggle logic for mobile view.
 * Adds the onToggleMenu function to the global window object.
 *
 * Usage:
 * - The menu icon calls window.onToggleMenu() on click.
 * - Toggles menu visibility and icon image.
 */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.getElementById('menuIcon');
  let menuOpen = false;

  /**
   * Toggles the mobile navigation menu and icon image.
   * @global
   */
  window.onToggleMenu = function () {
    menuOpen = !menuOpen;
    navLinks.classList.toggle('top-[9%]');
    menuIcon.src = menuOpen
      ? './assets/svg/close-svgrepo-com.svg'
      : './assets/svg/burger-simple-svgrepo-com.svg';
  };
});
