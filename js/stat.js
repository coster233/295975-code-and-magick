'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var NAME_X = 130;
var NAME_X_GAP = 100;
var NAME_Y = 250;
var PILLAR_X = 130;
var PILLAR_X_GAP = 100;
var PILLAR_Y = 90;
var PILLAR_WIDTH = 40;
var PILLAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, NAME_X_GAP + GAP, 2 * GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, NAME_X_GAP, GAP, '#fff');

  ctx.fillStyle = '#000'
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', NAME_X, 3 * GAP);
  ctx.fillText('Список результатов:', NAME_X, 5 * GAP);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

for (var i = 0; i < players.length; i++) {
  ctx.fillText(players[i], NAME_X + (i * NAME_X_GAP), NAME_Y);
  ctx.fillRect(PILLAR_X + (i * PILLAR_X_GAP), PILLAR_Y, PILLAR_WIDTH, (PILLAR_HEIGHT * times[i]) / maxTime);
}
};
