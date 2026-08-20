document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputName = form.querySelector('input[type="text"]');
      const button = form.querySelector('button[type="submit"]');
      const name = inputName ? inputName.value.trim() : '';

      if (button) {
        button.textContent = name ? `Gracias, ${name}!` : 'Mensaje enviado';
      }

      form.reset();
    });
  }
});
