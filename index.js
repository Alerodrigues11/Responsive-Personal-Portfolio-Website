/*==================== MENU SHOW Y HIDDEN ====================*/
const navOptions = document.getElementById('nav-options'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navOptions.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose) {
  navClose.addEventListener('click', () => {
    navOptions.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navOptions = document.getElementById('nav-options')
    // When we click on each nav__link, we remove the show-menu class
    navOptions.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ADJUSTING FORMS SUBMIT ====================*/

// Adding an event listener to the form
const meuFormulario = document.querySelector('#my-form');

meuFormulario.addEventListener('submit', function (event) {
  event.preventDefault(); // block default sending

  const formData = new FormData(this);

  formData.append('...', '...');

  // Building an object with the form's data
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Sending the request using FEACTH API
  fetch('https://api.staticforms.xyz/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Sua mensagem foi enviada com sucesso!');
      this.reset();
    } else {
      alert('Ocorreu um erro ao enviar a mensagem');
    }
  })
  .catch(error => {
    alert('Ocorreu um erro de rede');
  });
});
