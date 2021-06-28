
const MQueue = {
    items: [],
    get: function () {
        return this.items
    },
    enQueue: function (item) {
        this.items.unshift(item)
    },
    deQueue: function () {
        this.items.pop()
    },
    size: function () {
        return this.items.length
    },
    peek: function () {
        return this.items[this.items.length - 1]
    },

    isEmpty() {
        return this.items.length === 0
    }
}

let queue = Object.create(MQueue);
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
console.log(queue.toString())
console.log(queue.get())
queue.deQueue()
console.log(queue.get())
console.log(queue.isEmpty())