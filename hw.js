console.log('///////////////////////Mixin_1/////////////////////////')
class Thing {
    constructor() {
        this.a = 'a';
        this.b = 'b';
    } 
}

const Mixin_1 = clss => class extends clss {
        doSomething() {
            return 'done';
        }
}

const Mixin_2 = function(clss) {
    return class extends clss {
        doSomething_2() {
            return 'done_2';
        }
    }
}

class Foo extends Mixin_1(Mixin_2(Thing)) {
    constructor(c) {
        super();
        this.c = c;
    }
}


const foo = new Foo(123)

console.log(foo.c)
console.log(foo.doSomething())
console.log(foo.doSomething_2())

console.log('///////////////////////Mixin_2/////////////////////////')

class Thing_2 {
    constructor() {
        this.a = 'a';
        this.b = 'b';
    }
}

const myMixin = {

    doSomething() {

         return 'done';
    },

    doSomething_2() {

        return 'done_2';
    }
}

Object.assign(Thing.prototype, myMixin);

class Foo_2 extends Thing {
    constructor(c) {
        super();
        this.c = c;
    }
}

const foo_2 = new Foo_2(256);
console.log(foo_2.c);
console.log(foo.doSomething());
console.log(foo.doSomething_2());



console.log('///////////////////////////////////////////////')

class Foo_1 {
    static f() {
        return 'Hello, i\'m static method! =)';
    }
}
console.log(Foo_1.f())

///////////////////////////////////////////////

function* fib() {
    let a = 0 , b = 1;
    while (true) {
        [a, b] = [b, a + b]
        yield a;
    }
}

for (let n of fib() ) {

    if(n > 9) {
        break;
    }

    console.log(n)
}

console.log('/////////////////////Iterator//////////////////////////');
let str = '165rbrpaopapa';

let it = str[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

const idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id++, done = false;
                return {value,done}
            }
        }
    }
}
let a = idGenerator[Symbol.iterator]();

console.log(a.next().value, '!');
console.log(a.next().value, '!');
console.log(a.next().value, '!');

for (let i of idGenerator) {
    if(i > 5) break;
    console.log(i, 'for...of');
}


console.log('/////////////////////Generatop//////////////////////////');

function* gen(a,b) {
    let i = 0;

    function f() {
        i++;
        return a + b + ' => i = ' + i;
    }

    while(true) yield f();
}

let g = gen(1,2);

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())




