
/**
 * Loads translation JSON for the specified language.
 * @param {string} lang - Language code (e.g., 'en', 'es').
 * @returns {Promise<Object>} Translation key-value pairs.
 */
async function loadTranslations(lang) {
  const res = await fetch(`src/js/i18n/${lang}.json`);
  return await res.json();
}


/**
 * Applies translations to all elements with the data-i18n attribute.
 * @param {Object} translations - Translation key-value pairs.
 */
function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}


/**
 * Sets the current language, applies translations, and updates icon state.
 * @param {string} lang - Language code to set.
 */
async function setLanguage(lang) {
  const translations = await loadTranslations(lang);
  applyTranslations(translations);
  localStorage.setItem('lang', lang);
  updateLangIcon(lang);
}


/**
 * Updates the visual state of the language icon based on the current language.
 * @param {string} lang - Current language code.
 */
function updateLangIcon(lang) {
  const icon = document.getElementById('lang_icon');
  if (!icon) return;
  if (lang === 'es') {
    icon.style.filter = 'drop-shadow(0 0 6px #2563eb)'; // sombra azul para español
  } else {
    icon.style.filter = 'none'; // sin sombra para inglés
  }
}

/**
 * Initializes language selection and icon toggle on page load.
 */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en';
  setLanguage(lang);
  const langToggle = document.getElementById('lang_toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = localStorage.getItem('lang') || 'en';
      const newLang = currentLang === 'en' ? 'es' : 'en';
      setLanguage(newLang);
    });
  }
});
