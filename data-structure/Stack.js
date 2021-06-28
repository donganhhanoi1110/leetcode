
const MStack = {
    items: [],
    get: function () {
        return this.items
    },
    pushItem: function (item) {
        this.items.push(item)
    },
    popItem: function () {
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

let stack1 = Object.create(MStack);
stack1.pushItem(1)
stack1.pushItem(2)
stack1.pushItem(3)
console.log(stack1.toString())
console.log(stack1.get())
stack1.popItem()
console.log(stack1.get())
console.log(stack1.isEmpty())