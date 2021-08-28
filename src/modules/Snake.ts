class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
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

    addHead(x: number, y: number) {
        this.head.insertAdjacentHTML('beforebegin', '<div class="cube"></div>');
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
        this.X = x;
        this.Y = y;
    }

    moveBody() {
        for( let i = this.bodies.length - 1; i > 0; i--) {
            let item = this.bodies[i] as HTMLElement;
            let pre = this.bodies[i-1] as HTMLElement;
            item.style.top = pre.style.top;
            item.style.left = pre.style.left;
        }
    }
}

export default Snake;