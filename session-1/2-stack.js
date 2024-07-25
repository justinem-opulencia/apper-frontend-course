class Stack {
    constructor() {
        this.currentStack = []
    }

    push(item) {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                if (typeof item[i] === 'string') {
                  this.currentStack.push(item[i]);
                }
            }
            return
        }
        else if (typeof item !== 'string') {
            console.log('Item is not of type string.')
            return
        }
        this.currentStack.push(item);
    }

    pop() {
        if (this.currentStack.length === 0) {
            console.log('Stack is currently empty.')
            return
        }
        return this.currentStack.pop();
    }

    check() {
        console.log(this.currentStack)
    }
}

const stack = new Stack()

console.log('======STACK======')
stack.push('Milk')
stack.push('Eggs')
stack.check() // ['Milk', 'Eggs']
stack.pop()
stack.check() // ['Milk']
stack.pop()
stack.check() // []
stack.pop() // 'Stack is currently empty.'

stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Ice Cream”]
stack.pop()
stack.check()  // []
stack.pop()  // 'Stack is currently empty.'