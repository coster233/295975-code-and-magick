'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
var CLOUD_ROW = 100;
var OFFSET = 10;
var NAME_ROW = 130;
var NAME_ROW_OFFSET = 100;
var NAME_COLUMN = 250;
var PILLAR_ROW = 130;
var PILLAR_ROW_COLUMN = 100;
var PILLAR_COLUMN = 240;
var PILLAR_WIDTH = 40;
var PILLAR_HEIGHT = -150;

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_ROW + OFFSET, 2 * OFFSET, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_ROW, OFFSET, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', NAME_ROW, 3 * OFFSET);
  ctx.fillText('Список результатов:', NAME_ROW, 5 * OFFSET);


  var maxTime = getMaxElement(times);



players.forEach(function(players, i){
  ctx.fillStyle = '#000';
  ctx.fillText(players, NAME_ROW + (i * NAME_ROW_OFFSET), NAME_COLUMN);
  ctx.fillText(Math.round(times[i]), NAME_ROW + (i * NAME_ROW_OFFSET), (PILLAR_HEIGHT * times[i]) / maxTime + 220);
  if (players === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }
  ctx.fillStyle = ('rgba(0, 0, 255, ' + 0.2 * (i + 1) + ')');
  ctx.fillRect(PILLAR_ROW + (i * PILLAR_ROW_COLUMN), PILLAR_COLUMN, PILLAR_WIDTH, (PILLAR_HEIGHT * times[i]) / maxTime);
});
};
