export function Character() {
    this.canvas;
    this.context;
    this.images = {};
    this.totalResources = 6;
    this.numResourcesLoaded = 0;
    this.fps = 30;
    this.x = 40;
    this.y = 150;
    this.breathInc = 0.1;
    this.breathDir = 1;
    this.breathAmt = 0;
    this.breathMax = 2;
    this.breathInterval = setInterval(updateBreath, 1000 / fps);
    this.maxEyeHeight = 14;
    this.curEyeHeight = maxEyeHeight;
    this.eyeOpenTime = 0;
    this.timeBtwBlinks = 4000;
    this.blinkUpdateTime = 200;
    this.blinkTimer = setInterval(updateBlink, blinkUpdateTime);
    this.fpsInterval = setInterval(updateFPS, 1000);
    this.numFramesDrawn = 0;
    this.curFPS = 0;
}

Character.prototype.prepareCanvas = function (canvasDiv, canvasWidth, canvasHeight)
{
    // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('width', canvasWidth);
    this.canvas.setAttribute('height', canvasHeight);
    this.canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);

    if(typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d"); // Grab the 2d canvas context
    // Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
    //     context = document.getElementById('canvas').getContext("2d");

    loadImage("leftArm");
    loadImage("legs");
    loadImage("torso");
    loadImage("rightArm");
    loadImage("head");
    loadImage("hair");
}