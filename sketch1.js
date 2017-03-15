'use strict';
/* esversion: 6 */
const util1 = require('./utils1');
const $ = require('./jquery3.1.1');

var canvas = $('#practice_pad');
var ctx = canvas.getContext('2d');
const PI = Math.PI;
const TAU = 2 * Math.PI;

var height = canvas.height();
var width = canvas.width();
console.log(`Height: ${canvas.height()}\nWidth: ${canvas.width()}`);


var ball = {
    x: width / 4,
    y: height / 6,
    radius: 25,
    color: 'blue',
    draw: function() {
        ctx = $('#practice_pad');
        ctx.clearRect(0,0, width, height);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, TAU, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.color);
        ctx.requestAnimationFrame();
    }
}

var setBackgroundColor = {
    x: 0,
    y: 0,
    wi: util1.getWidth(),
    hi: util1.getHeight(),
    color: util1.rgba(0,0,0,["F3", "F3", "F3"]),
    draw: function() {
        ctx = $('#practice_pad');
        ctx.clearRect(0,0, width, height);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.wi, this.hi);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

setBackgroundColor.draw();
ball.draw();