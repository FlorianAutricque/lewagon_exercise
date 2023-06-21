const submit = document.querySelector(".button-level");
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const checkBox = document.querySelector('#infos');
const emailErrorMessage = document.getElementById('email-error');
const checkboxErrorMessage = document.getElementById('checkbox-error');

submit.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  if (emailInput.value.trim() !== '' && checkBox.checked) {
    const successMessage = `
      <div class="success">
        <h3><span style="color: #1D9D75">Success!</span></h3>
        <h3>You're all set.</h3>
      </div>
    `;

    form.innerHTML = successMessage;
    emailErrorMessage.style.display = 'none';
    checkboxErrorMessage.style.display = 'none';
  } else {
    if (emailInput.value.trim() === '') {
      emailErrorMessage.textContent = 'Please fill in the email.';
      emailErrorMessage.style.display = 'block';
    } else {
      emailErrorMessage.style.display = 'none';
    }

    if (!checkBox.checked) {
      checkboxErrorMessage.textContent = 'Please tick the checkbox.';
      checkboxErrorMessage.style.display = 'block';
    } else {
      checkboxErrorMessage.style.display = 'none';
    }
  }
});

emailInput.addEventListener('input', function() {
  if (emailInput.value.trim() !== '') {
    emailErrorMessage.style.display = 'none';
  }
});

checkBox.addEventListener('change', function() {
  if (checkBox.checked) {
    checkboxErrorMessage.style.display = 'none';
  }
});
