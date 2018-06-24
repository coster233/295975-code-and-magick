'use strict';

var userDialog = document.querySelector('.setup');
var similarWizardContainer = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');

var WIZARD_NAMES = [
  'Иван ',
  'Хуан Себастьян ',
  'Мария ',
  'Кристоф ',
  'Виктор ',
  'Юлия ',
  'Люпита ',
  'Вашингтон '
];

var WIZARDS_SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARDS_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARS_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

userDialog.classList.remove('hidden');
similarWizardContainer.classList.remove('hidden');

function getRandomArrayElement(array) {
  var randomNumber = Math.floor(Math.random() * (array.length));
  return array[randomNumber];
}


var getRandomWizards = function (numberWizards) {
  var randomWizards = [];
  for (var i = 0; i < numberWizards; i++) {
    randomWizards.push({
      name: getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARDS_SURNAME),
      coatColor: getRandomArrayElement(WIZARDS_COLOR),
      eyesColors: getRandomArrayElement(WIZARS_EYES)
    });
  }
  return randomWizards;
};

var wizards = getRandomWizards(4);
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randerWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(randerWizard(wizards[i]));
  similarList.appendChild(fragment);
}

//module4-task1
//открытие и закрытие окна
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// валидация имени персонажа
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

//изменене цвета

var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userWizard = setup.querySelector('.wizard');
var wizardCoat = userWizard.querySelector('.wizard-coat');
var wizardEyes = userWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomArrayElement(WIZARDS_COLOR);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomArrayElement(WIZARS_EYES);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = getRandomArrayElement(WIZARD_FIREBALL_COLOR);
});
