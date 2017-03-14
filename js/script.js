var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var preview = document.getElementById('preview')
var html = document.getElementById('html')

var update = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  var text = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '! </h1>' +
  '<p>' + description + '</p>' +
  '<p> If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a> or give me a call at <a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'

  preview.innerHTML = text
  html.textContent = text
}

firstNameInput.addEventListener('input', update)
lastNameInput.addEventListener('input', update)
descriptionInput.addEventListener('input', update)
emailInput.addEventListener('input', update)
phoneInput.addEventListener('input', update)
