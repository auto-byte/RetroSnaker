class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
        // this.head.style.transition = '0.2s ease';
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(x: number) {
        if (this.X === x) {
            return;
        }
        if(x < 0 || x > 295){
            throw new Error("啊噢！");
        }
        this.head.style.left = x + 'px';
    }

    set Y(y: number) {
        if (this.Y === y) {
            return;
        }
        if(y < 0 || y > 290){
            throw new Error("啊噢！");
        }
        this.head.style.top = y + 'px';
    }

    addBody() {
        this.element.insertAdjacentHTML('beforebegin', '<div class="cube"></div>');
    }
}

export default Snake;