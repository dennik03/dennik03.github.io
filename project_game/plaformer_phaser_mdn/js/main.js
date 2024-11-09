PlayState = {};

/* Урока 2. Подгрузка игровых ассетов  */ 
PlayState.preload = function () {
    this.game.load.image('background', 'images/background.png');
    this.game.load.json('level:1', 'data/level01.json'); // исходники карты 1 уровня
};

/* прорисовка уровня   */ 
PlayState._loadLevel = function (data) {
    console.log(data)
};


PlayState.create = function () {
    this.game.add.image(0, 0, 'background');
    this._loadLevel(this.game.cache.getJSON('level:1'));

};

window.onload = function () {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    game.state.start('play');
};