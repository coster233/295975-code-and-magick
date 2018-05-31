
var fireballSize = 50;
var wizardSpeed = 3;
var wizardWidth = 70;
var getFireballSpeed = function(left) {
  if (left) {
    return 5;
  }
  else {
    return 2;
  }
};

function getWizardHeight () {
  return 1.337 * wizardWidth;
}

function getWizardX(width) {
  console.log(width);
  return width / 3;
};

 function getWizardY(height) {
   console.log(height);
   return height - 120;
 };
