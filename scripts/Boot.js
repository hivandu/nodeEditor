/**
 *      Qianglong Mo 2015(SukeBeta)
 */

var BasicGame = {};

BasicGame.Boot = function (){};

BasicGame.Boot.prototype = {
    init: function (){
        var winWidth = document.getElementsByTagName('body')[0].clientWidth,
            fontSize = '12px';

        if (winWidth > 540){
            fontSize = 24;
        }
        else {
            fontSize = 22;
        }

        document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
        console.log(winWidth, fontSize);
    }
};