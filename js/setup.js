// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var Rand_WIZARD_NAMES = Math.floor(Math.random() * WIZARD_NAMES.length);
console.log( WIZARD_NAMES[Rand_WIZARD_NAMES] );

var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var Rand_WIZARDS_SURNAME = Math.floor(Math.random() * WIZARDS_SURNAME.length);
console.log( WIZARDS_SURNAME[Rand_WIZARDS_SURNAME] );

var WIZARDS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var Rand_WIZARDS_COLOR = Math.floor(Math.random() * WIZARDS_COLOR.length);
console.log( WIZARDS_COLOR[Rand_WIZARDS_COLOR] );

var WIZARS_EYES = ['#black', '#red', '#blue', '#yellow', '#green'];
var Rand_WIZARS_EYES = Math.floor(Math.random() * WIZARS_EYES.length);
console.log( WIZARS_EYES[Rand_WIZARS_EYES] );


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(241, 43, 107)'

  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(215, 210, 55)'
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(101, 137, 164)'
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(127, 127, 127)'
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
