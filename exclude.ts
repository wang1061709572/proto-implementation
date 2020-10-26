type T = Exclude<2 | 3, 1 | 3>

type getFun<T extends Object> = {
    [K in keyof T]: T[K] extends Function ? T[K]: String
};

let testObj: Object = {
    name: 'John',
    sayName() {
        console.log(this.name);
    }
}

function ssa() {};
let y = 'asd';

type TY = {
    name: Readonly<'sss'>,
    gg: getFun<{
        ssa: Function
        y: String
    }>
}

let aq: TY = {
    name: 'sss',
    gg: {
        ssa() {},
        y: '123'
    }
}

function foo(x: TY): Array<TY> {
  return [x];
}
type fn = ReturnType<typeof foo>;
