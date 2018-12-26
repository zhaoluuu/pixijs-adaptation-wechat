import '/libs/weapp-adapter';
import * as PIXI from '/libs/pixi.min';

const { pixelRatio, windowWidth, windowHeight } = wx.getSystemInfoSync()

var app=new PIXI.Application({
  width: windowWidth ,
  height: windowHeight,
  view: canvas
});
app.renderer.plugins.interaction.mapPositionToPoint = (point, x, y) => {
  point.x = x 
  point.y = y 
}


var bg = new PIXI.Sprite.fromImage("http://www.yyfun001.com/res/bg_01.png");
app.stage.addChild(bg);

bg.width = windowWidth;
bg.height=windowHeight;

bg.interactive=true;
bg.on("pointerdown",function(event){
  var position=event.data.getLocalPosition(app.stage);
  console.log(position.x,position.y);

})