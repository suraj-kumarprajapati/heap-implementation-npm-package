// implement max heap data structure in js
class MaxHeap {

    #arr;
    #size;

    constructor() {
        this.#arr = [];
        this.#size = 0;
    }

    // get size of max heap
    getSize() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    // peek
    peek() {
        if (this.#size === 0) {
            throw new Error("No Element Present in heap");
        }

        return this.#arr[0];
    }

    // push items in the heap
    add(data) {
        this.#arr[this.#size] = data;
        this.#size += 1;

        // heapify up
        let ind = this.#size - 1;
        let parent = this.#getParent(ind);
        while (ind > 0 && this.#arr[parent] < this.#arr[ind]) {
            this.#swap(ind, parent);
            ind = parent;
            parent = this.#getParent(ind);
        }
    }

    // remove item from the max heap
    poll() {
        if (this.#size === 0) {
            throw new Error("No Element Present in heap");
        }

        const deletedItem = this.#arr[0];
        this.#arr[0] = this.#arr[this.#size - 1];
        this.#arr.pop();
        this.#size -= 1;

        // heapify down
        let ind = 0;
        while (true) {
            let largest = ind;
            let leftChildInd = 2 * ind + 1;
            let rightChildInd = 2 * ind + 2;

            if (leftChildInd < this.#size && this.#arr[leftChildInd] > this.#arr[largest]) {
                largest = leftChildInd;
            }

            if (rightChildInd < this.#size && this.#arr[rightChildInd] > this.#arr[largest]) {
                largest = rightChildInd;
            }

            if (largest !== ind) {
                this.#swap(largest, ind);
                ind = largest;
            } else {
                break;
            }
        }

        return deletedItem;
    }

    // get the parent of ind
    #getParent(ind) {
        return Math.floor((ind - 1) / 2);
    }

    // swap values
    #swap(i, j) {
        const temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }
}

// implement min heap data structure in js
class MinHeap {

    #arr;
    #size;

    constructor() {
        this.#arr = [];
        this.#size = 0;
    }

    // get size of min heap
    getSize() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    // peek
    peek() {
        if (this.#size === 0) {
            throw new Error("No Element Present in heap");
        }

        return this.#arr[0];
    }

    // push items in the heap
    add(data) {
        this.#arr[this.#size] = data;
        this.#size += 1;

        // heapify up
        let ind = this.#size - 1;
        let parent = this.#getParent(ind);
        while (ind > 0 && this.#arr[parent] > this.#arr[ind]) {
            this.#swap(ind, parent);
            ind = parent;
            parent = this.#getParent(ind);
        }
    }

    // remove item from the min heap
    poll() {
        if (this.#size === 0) {
            throw new Error("No Element Present in heap");
        }

        const deletedItem = this.#arr[0];
        this.#arr[0] = this.#arr[this.#size - 1];
        this.#arr.pop();
        this.#size -= 1;

        // heapify down
        let ind = 0;
        while (true) {
            let smallest = ind;
            let leftChildInd = 2 * ind + 1;
            let rightChildInd = 2 * ind + 2;

            if (leftChildInd < this.#size && this.#arr[leftChildInd] < this.#arr[smallest]) {
                smallest = leftChildInd;
            }

            if (rightChildInd < this.#size && this.#arr[rightChildInd] < this.#arr[smallest]) {
                smallest = rightChildInd;
            }

            if (smallest !== ind) {
                this.#swap(smallest, ind);
                ind = smallest;
            } else {
                break;
            }
        }

        return deletedItem;
    }

    // get the parent of ind
    #getParent(ind) {
        return Math.floor((ind - 1) / 2);
    }

    // swap values
    #swap(i, j) {
        const temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }
}

// export the classes
module.exports = {
    MinHeap,
    MaxHeap
};
