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
        this.head.style.left = x + 'px';
    }

    set Y(y: number) {
        this.head.style.top = y + 'px';
    }

    addBody() {
        this.element.insertAdjacentHTML('beforebegin', '<div class="cube"></div>');
    }
}

export default Snake;