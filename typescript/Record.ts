/**
 * 构造一个具有一组属性K(类型T)的类型
 */

type record<K extends keyof any, T> = {
    [P in K]: T
}

type petsGroup = 'dog' | 'cat';
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'wangcai',
        age:2
    },
    cat:{
        name:'xiaobai',
        age:3
    },
}
