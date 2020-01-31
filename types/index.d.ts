
interface DeepCombination0 extends Iterable<[never]> {
  addDimention<T1>(items: T1[]): DeepCombination1<T1>;
}
export declare function createCombinator(): DeepCombination0


interface DeepCombination1<T1> extends Iterable<[T1]> {
  addDimention<T2>(items: T2[]): DeepCombination2<T1, T2>;
}
export declare function createCombinator<T1>(init: [T1[]]): DeepCombination1<T1>


interface DeepCombination2<T1, T2> extends Iterable<[T1, T2]> {
  addDimention<T3>(items: T3[]): DeepCombination3<T1, T2, T3>;
}
export declare function createCombinator<T1, T2>(init: [T1[], T2[]]): DeepCombination2<T1, T2>


interface DeepCombination3<T1, T2, T3> extends Iterable<[T1, T2, T3]> {
  addDimention<T4>(items: T4[]): DeepCombination4<T1, T2, T3, T4>;
}
export declare function createCombinator<T1, T2, T3>(init: [T1[], T2[], T3[]]): DeepCombination3<T1, T2, T3>


interface DeepCombination4<T1, T2, T3, T4> extends Iterable<[T1, T2, T3, T4]> {
  addDimention<T5>(items: T5[]): DeepCombination5<T1, T2, T3, T4, T5>;
}
export declare function createCombinator<T1, T2, T3, T4>(init: [T1[], T2[], T3[], T4[]]): DeepCombination4<T1, T2, T3, T4>


interface DeepCombination5<T1, T2, T3, T4, T5> extends Iterable<[T1, T2, T3, T4, T5]> {
  addDimention<T6>(items: T6[]): DeepCombination6<T1, T2, T3, T4, T5, T6>;
}
export declare function createCombinator<T1, T2, T3, T4, T5>(init: [T1[], T2[], T3[], T4[], T5[]]): DeepCombination5<T1, T2, T3, T4, T5>


interface DeepCombination6<T1, T2, T3, T4, T5, T6> extends Iterable<[T1, T2, T3, T4, T5, T6]> {
  addDimention<T7>(items: T7[]): DeepCombination7<T1, T2, T3, T4, T5, T6, T7>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6>(init: [T1[], T2[], T3[], T4[], T5[], T6[]]): DeepCombination6<T1, T2, T3, T4, T5, T6>


interface DeepCombination7<T1, T2, T3, T4, T5, T6, T7> extends Iterable<[T1, T2, T3, T4, T5, T6, T7]> {
  addDimention<T8>(items: T8[]): DeepCombination8<T1, T2, T3, T4, T5, T6, T7, T8>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[]]): DeepCombination7<T1, T2, T3, T4, T5, T6, T7>


interface DeepCombination8<T1, T2, T3, T4, T5, T6, T7, T8> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8]> {
  addDimention<T9>(items: T9[]): DeepCombination9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[]]): DeepCombination8<T1, T2, T3, T4, T5, T6, T7, T8>


interface DeepCombination9<T1, T2, T3, T4, T5, T6, T7, T8, T9> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9]> {
  addDimention<T10>(items: T10[]): DeepCombination10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[]]): DeepCombination9<T1, T2, T3, T4, T5, T6, T7, T8, T9>


interface DeepCombination10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]> {
  addDimention<T11>(items: T11[]): DeepCombination11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[]]): DeepCombination10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>


interface DeepCombination11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]> {
  addDimention<T12>(items: T12[]): DeepCombination12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[]]): DeepCombination11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>


interface DeepCombination12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]> {
  addDimention<T13>(items: T13[]): DeepCombination13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[]]): DeepCombination12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>


interface DeepCombination13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13]> {
  addDimention<T14>(items: T14[]): DeepCombination14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[]]): DeepCombination13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>


interface DeepCombination14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14]> {
  addDimention<T15>(items: T15[]): DeepCombination15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[], T14[]]): DeepCombination14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>


interface DeepCombination15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15]> {
  addDimention<T16>(items: T16[]): DeepCombination16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[], T14[], T15[]]): DeepCombination15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>


interface DeepCombination16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]> {
  addDimention<T17>(items: T17[]): DeepCombination17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[], T14[], T15[], T16[]]): DeepCombination16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>


interface DeepCombination17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17]> {
  addDimention<T18>(items: T18[]): DeepCombination18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[], T14[], T15[], T16[], T17[]]): DeepCombination17<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>


interface DeepCombination18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18]> {
  addDimention<T19>(items: T19[]): DeepCombination19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[], T14[], T15[], T16[], T17[], T18[]]): DeepCombination18<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>


interface DeepCombination19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19]> {
  addDimention<T20>(items: T20[]): DeepCombination20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[], T14[], T15[], T16[], T17[], T18[], T19[]]): DeepCombination19<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>


interface DeepCombination20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> extends Iterable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20]> {
  addDimention<T21>(items: T21[]): DeepCombinationAmbiguous;
}
export declare function createCombinator<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(init: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[], T11[], T12[], T13[], T14[], T15[], T16[], T17[], T18[], T19[], T20[]]): DeepCombination20<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>


interface DeepCombinationAmbiguous extends Iterable<unknown[]> {
  addDimention(items: unknown[]): DeepCombinationAmbiguous;
}
export declare function createCombinator(init?: any[][]): DeepCombinationAmbiguous
export {};