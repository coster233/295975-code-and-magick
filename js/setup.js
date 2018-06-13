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
   const randomNumber = Math.floor(Math.random() * (array.length));
   return array[randomNumber];
 };


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
