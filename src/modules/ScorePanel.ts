class ScorePanel {
    score: number = 0;
    level: number = 1;
    maxLevel: number = 10;
    upScore: number = 10;
    upScoreStep: number = 5;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor(maxLevel: number = 10) {
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
    }

    addScore() {
        this.scoreEle.innerHTML = 'SCORE:' + ++this.score + '';
    }

    levelUp() {
        if (this.level >= this.maxLevel) {
            return;
        }
        this.levelEle.innerHTML = ++this.level + '';
        this.upScore += this.upScoreStep;
    }

}

export default ScorePanel;