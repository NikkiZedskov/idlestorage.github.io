
// Email subscription
let form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbxh6vIYFs6h45Yy4oJqnUecnBpliciYPmgBvXXfi_XsTmCkC0ya43QKAGdltvy-ygM2Hw/exec', 
  {
    method: "POST",
    body: data
  })
  .then(res => res.text())
  .then(data => console.log(data));
})


// Email subscription for second form because of error with querySelectorAll
let form2 = document.getElementById('second-form');

form2.addEventListener('submit', e => {
  e.preventDefault();
  let data = new FormData(form2);
  fetch('https://script.google.com/macros/s/AKfycbxh6vIYFs6h45Yy4oJqnUecnBpliciYPmgBvXXfi_XsTmCkC0ya43QKAGdltvy-ygM2Hw/exec', 
  {
    method: "POST",
    body: data
  })
  .then(res => res.text())
  .then(data => console.log(data));
})


// Clear form after 'submit'
document.addEventListener('submit', function (event) {

	// Prevent default form submit
	event.preventDefault();

	// Clear the form fields
	// event.target is the thing that triggered the event, in this case, the form
	event.target.reset();

});


// Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');

hiddenElement.forEach((el) => observer.observe(el));

// Image Animation
const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('up');
      } else {
        entry.target.classList.remove('up');
      }
  });
});

const downElement = document.querySelectorAll('.down');

downElement.forEach((el) => observe.observe(el));


// Mobile Navigatin and toggle
const primaryNav = document.querySelector(".primary-nav-wrapper");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Popup
const closePopup = document.getElementById('close-popup');
const popup = document.getElementById('popup-message');

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});


// Display: block, if log in button is clicked
logIn.addEventListener('click', event => {

})

// Display: none, if click is detected outside of element
document.addEventListener('click', function(event) {
  
  if (event.target.closest('.box'))return

  BaseAudioContext.classList.add('js-is-hidden')
})