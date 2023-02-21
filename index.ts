let a = 6;
let b = 8;
console.log(a+b)

function print (a: number, b: number) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b)
}

print(a, b);