var shortID = require('shortid');

module.exports = class Player {
    constructor() {        
        this.id = shortID.generate();
        this.teamName = '';
        this.teamIndex = '';
        this.gameover = '';
    }
}