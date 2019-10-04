import Gamer from './Gamer'

class Player extends Gamer {

    constructor(name) {
        super();
        this.name = name;
        this.score = null;
        this.isActive = null;
    }
}

export default Player;
