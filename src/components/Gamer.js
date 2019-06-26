class Gamer {

    getScore(name) {
        var value = localStorage.getItem(name);
        return value;
    }

    setScore(name, score) {
        let personalScore = this.getScore(name);
        let wins;

        personalScore > 0 ? wins = +personalScore : wins = 0;
        
        localStorage.setItem(name, `${wins += 1}`)
    }

    resetScore(name) {
        localStorage.removeItem(name);
    }
}

export default Gamer;
