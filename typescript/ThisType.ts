/**
 * 上下文“this”类型的标记
 */

interface ThisType<T> { }

interface Cat {
    name: string;
    age: number;
}
const obj1: ThisType<Person> = {
  mimi() {
    this.name // string
  }
}
