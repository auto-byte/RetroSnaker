import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class Control {
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
    }

    init() {
        this.food.change();
    }
}

export default Control;