var DS = {};

//http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348
DS.Stack = function(){
    this._size = 0;
    this._storage = {}
}

DS.Stack.prototype.push = function(data) {
    // increases the size of our storage
    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[this._size++] = data;
};

DS.Stack.prototype.top = function() {
    if (this._size) {
        return this._storage[this._size - 1];
    } else {
        console.log("Stack is empty!");
        return undefined;
    }
};

DS.Stack.prototype.pop = function() {
    if (this._size) {
        var size = this._size - 1,
            deletedData = this._storage[size];
        delete this._storage[size];
        this._size--;
        return deletedData;
    } else {
        console.log("Stack is empty!");
        return undefined;
    }
};

DS.Stack.prototype.clear = function() {
    this._size = 0;
    this._storage = {};
};
