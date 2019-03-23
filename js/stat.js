var renderStatistics = function (ctx, names, times) {

  // Строим облако c текстом
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 30);
  ctx.fillText('Cписок Результатов:', 110, 50);
  // Строим гистограмму
  buildHistogrames(ctx, names, times);
};

// Функция возвращает наибольшее время
var getLongestTime = function (times) {
  var longestTime = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > longestTime) {
      longestTime = times[i];
    }
  }
  return Math.round(longestTime);
};

// Функция возвращает высоты гистограмм
var getHistogramesHeight = function(names, times) {
  var longestTime = getLongestTime(times);
  var histogramesHeight = [];
  var HEIGHT = 150;

  for (var i = 0; i < times.length; i++) {
    var currentHeight = Math.round((times[i] / longestTime) * HEIGHT);
    histogramesHeight.push(currentHeight);
  }
  return histogramesHeight;
};

// Функция строит гистрограммы
var buildHistogrames = function(ctx, names, times) {
  var xPosition = 120;
  var yPosition = 240;
  var weight = 40;
  var distance = 50;
  var heights = getHistogramesHeight(names, times);


  for (var i = 0; i < times.length; i++) {
    //  Округляем время
    times[i] = Math.round(times[i]);
    // Строим гистрограммы
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.random() * 100;
      ctx.fillStyle = 'hsl(240, ' + saturation + '%, 50%)';
    }
    ctx.fillRect(xPosition, yPosition, weight, heights[i] * -1);


    // Указываем имена игроков
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], xPosition, yPosition + 20);

    // Указываем время игроков
    ctx.fillText(times[i], xPosition, yPosition - heights[i] - 20);


    // Указываем новое значение x-position с учетом ширины и расстояния между гистограммами
    xPosition += weight + distance;
  }
}

