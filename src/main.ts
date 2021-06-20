import add from './math';

console.log('Teste');

const a = 10;

console.log(a);

let b: number;
b = 10;

console.log(b);

function generictest<T>(a: T): T {
  return a;
}

console.log('oba');
console.log(generictest<string>('test'));

console.log(add(1, 2));
