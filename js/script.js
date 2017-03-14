var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var preview = document.getElementById('preview')
var html = document.getElementById('html')

var updatePreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  preview.innerHTML = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '! </h1>' +
  '<p>' + description + '</p>' +
  '<p> If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a> or give me a call at <a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'
}

var updateHTML = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  html.textContent = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '! </h1>' +
  '<p>' + description + '</p>' +
  '<p> If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a> or give me a call at <a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'
}

firstNameInput.addEventListener('input', function () {
  updateHTML()
  updatePreview()
  console.log('oh nice to meet you ' + firstNameInput.value)
})

lastNameInput.addEventListener('input', function () {
  updateHTML()
  updatePreview()
})

descriptionInput.addEventListener('input', function () {
  updateHTML()
  updatePreview()
})

emailInput.addEventListener('input', function () {
  updateHTML()
  updatePreview()
})

phoneInput.addEventListener('input', function () {
  updateHTML()
  updatePreview()
})
