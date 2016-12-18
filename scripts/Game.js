/**
 *      Qianglong Mo 2015(SukeBeta)
 */


/**
*  Game
*/
BasicGame.Game = function (game){
    this.create;
    this.nextState;
    this.setCurState;
    this.clearCurState;
    this.start;
};

BasicGame.Game.prototype = {
    state: [],

    curState: 0,

    create: function () {
        //  state
        this.state.push($('.section-loading'));
        this.state.push($('.section-start'));
        this.state.push($('.section-01'));
        this.state.push($('.section-02'));
        this.state.push($('.section-03'));
        this.state.push($('.section-04'));
        this.state.push($('.section-05'));
        this.state.push($('.section-06'));
        this.state.push($('.section-end'));

        var that = this;
        $('.next').click(function (){
            that.nextState();
        });
    },

    update: function (){
      //
    },

    nextState: function (){
        // check next
        if (this.curState < this.state.length-1) {
            this. clearCurState();
            this.curState++;
            this.setCurState(this.curState);
        }
    },

    setCurState: function (curState) {
        if (this.state[curState]) {
            this.curState = curState;
            this. clearCurState();
            this.state[this.curState].addClass('curState');
        }
    },

     clearCurState: function (){
        for (var i = 0; i < this.state.length; i++) {
            if (this.state[i]) this.state[i].removeClass('curState');
        }
    },


    start: function () {
        //  create
        this.create();

        //  start state
        this.setCurState(this.curState);
        var that = this;
        setTimeout(function (){
            that.setCurState(1);
        }, 800);
    }
};

