//http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348
let DS = {};

DS.Stack = class Stack {
    constructor() {
        this._size = 0;
        this._storage = [];
    }

    push(data) {
        this._storage[this._size++] = data;
    }

    top() {
        if (this._size) {
            return this._storage[this._size - 1];
        } else {
            console.log("Stack is empty!");
            return undefined;
        }
    }

    pop () {
        if (this._size) {
            let size = this._size - 1,
                deletedData = this._storage[size];
            delete this._storage[size];
            this._size--;
            return deletedData;
        } else {
            console.log("Stack is empty!");
            return undefined;
        }
    }

    clear() {
        this._size = 0;
        this._storage = {};
    }
};