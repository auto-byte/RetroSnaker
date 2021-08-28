import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class Control {
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;
    direction: string;
    keyMap: any;
    alive: boolean;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.direction = 'right';
        this.keyMap = {
            "ArrowRight": "right",
            "ArrowLeft": "left",
            "ArrowUp": "up",
            "ArrowDown": "down"
        }
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        document.querySelector('button').addEventListener('click', this.start.bind(this));
        this.alive = false;
        this.food.change();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = this.keyMap[event.key] || this.direction;
    }

    start() {
        if (!this.alive) {
            this.alive = true;
            this.run();
        } else {
            this.alive = false;
        }
        console.log("start")
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
            case "right":
                x += 10;
                break;
            case "left":
                x -= 10;
                break;
            case "up":
                y -= 10;
                break;
            case "down":
                y += 10;
                break;
        }

        if (!this.eatFood(x, y)) {
            try {
                this.snake.moveBody();
                this.snake.X = x;
                this.snake.Y = y;
            } catch (error) {
                alert("啊噢");
                this.alive = false;
            }
        }
        if (this.alive) {
            setTimeout(this.run.bind(this), 100 - this.scorePanel.level);
        }
    }

    eatFood(x: number, y: number): boolean {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addHead(x, y);
            return true;
        }
        return false;
    }
}

export default Control;