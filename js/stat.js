var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_X = 140;
var BAR_Y = 240;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var NAME_Y = 260;
var MAX_TINE_Y = 230;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // Рисует белое облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // Рисует тень облако

  ctx.fillStyle = '#000';
  ctx.font = "16px 'PT Mono'";
  ctx.fillText('Ура вы победили!', 120, 42);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    var maxTime = times[i] > maxTime ? times[i] : maxTime;
  }

  var interval = 0;
  for (var i = 0; i < names.length; i++) {
    var randomNumber = Math.round(Math.random() * 100);
    ctx.fillStyle = names[i] == 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,100%,' + randomNumber + '%)';
    ctx.fillRect(BAR_X + interval, BAR_Y, BAR_WIDTH, -(MAX_BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), BAR_X + interval, MAX_TINE_Y - ((MAX_BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillText(names[i], BAR_X + interval, NAME_Y);
    interval += 90;

  }

}
