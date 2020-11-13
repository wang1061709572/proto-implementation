/**
 * 从T中排除null和undefined
 */

type nonNullable<T> = T extends null | undefined ? never : T;
