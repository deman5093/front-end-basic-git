const translations = {
  en: {
    legal: "you legal solutions provider",
    consistent: "Consistent",
    customerOriented: "Customer oriented",
    innovative: "Innovative",
    businessOriented: "Business oriented",
    ivf: "IVF",
    address: "Kyiv, Mechnikova str, 14/1",
    home: "Home",
    about: "About us",
    services: "Services",
    contact: "Contact",
    ideaTitle: "We turn the idea of legal services",
    servicesTitle: "What can we do better than others?",
    team: "Team",
    ideaText: "Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine."
  },
  uk: {
    legal: "ваш постачальник юридичних рішень",
    consistent: "Послідовний",
    customerOriented: "Орієнтований на клієнта",
    innovative: "Інноваційний",
    businessOriented: "Орієнтований на бізнес",
    ivf: "ЕКО",
    address: "Київ, вул. Мечникова, 14/1",
    home: "Головна",
    about: "Про нас",
    services: "Послуги",
    contact: "Контакти",
    ideaTitle: "Ми перетворюємо ідею юридичних послуг",
    servicesTitle: "Що ми можемо зробити краще за інших?",
    team: "Команда",
    ideaText: "багато років досвіду та практики, адвокати компанії супроводжують складні проекти та досягають низки важливих рішень для галузі. Багато з них формують практику застосування морського права в Україні."
  },
  ru: {
    legal: "ваш поставщик юридических решений",
    consistent: "Последовательный",
    customerOriented: "Ориентированный на клиента",
    innovative: "Инновационный",
    businessOriented: "Ориентированный на бизнес",
    ivf: "ЭКО",
    address: "Киев, ул. Мечникова, 14/1",
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    contact: "Контакты",
    ideaTitle: "Мы превращаем идею юридических услуг",
    servicesTitle: "Что мы можем сделать лучше других?",
    team: "Команда",
    ideaText: "многие годы опыта и практики, адвокаты компании сопровождают сложные проекты и достигают ряда важных решений для отрасли. Многие из них формируют практику применения морского права в Украине."
  }
};function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = translations[lang][key];
  });
 
  localStorage.setItem('selectedLanguage', lang);
}


document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLang);
});

