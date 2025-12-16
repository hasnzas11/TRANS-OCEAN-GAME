function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5d9i2a9KErA":
        Script1();
        break;
      case "6cFjxVXuiXs":
        Script2();
        break;
      case "5ywwaKcPnb8":
        Script3();
        break;
      case "6YvK8QPqX3J":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6gXAposF1sU');
const duration = 750;
const easing = 'ease-out';
const id = '6LV4tenVid8';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6gXAposF1sU');
const duration = 750;
const easing = 'ease-out';
const id = '6h42tEax664';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6HuWw5y5slO');
const duration = 750;
const easing = 'ease-out';
const id = '5WFZtjIeC8J';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
