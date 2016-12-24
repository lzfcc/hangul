"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348
var DS = {};

DS.Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);

        this._size = 0;
        this._storage = [];
    }

    _createClass(Stack, [{
        key: "push",
        value: function push(data) {
            this._storage[this._size++] = data;
        }
    }, {
        key: "top",
        value: function top() {
            if (this._size) {
                return this._storage[this._size - 1];
            } else {
                console.log("Stack is empty!");
                return undefined;
            }
        }
    }, {
        key: "pop",
        value: function pop() {
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
        }
    }, {
        key: "clear",
        value: function clear() {
            this._size = 0;
            this._storage = {};
        }
    }]);

    return Stack;
}();