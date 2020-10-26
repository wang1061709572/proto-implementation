function SuperType(name) {
    this.name = name;
    this.sayName = () => {
        console.log(this.name);
    }
}

function SubType() {
    SuperType.call(this, 'John');
    this.age = 12;
    this.sayAge = () => {
        console.log(this.age);
    };
}

let instance = new SubType();

instance.sayName();
instance.sayAge();

