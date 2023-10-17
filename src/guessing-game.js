class GuessingGame {
    constructor() {
        this.minRange = null;
        this.maxRange = null;
        this.guessingNumber = null;
    }

    setRange(minRange, maxRange) {
        this.minRange = minRange;
        this.maxRange = maxRange;
    }

    guess() {
        this.guessingNumber = Math.ceil((this.minRange + this.maxRange) / 2);
        return this.guessingNumber;
    }

    lower() {
        this.maxRange = this.guessingNumber;
    }
    
    greater() {
        this.minRange = this.guessingNumber;
    }
}

module.exports = GuessingGame;
