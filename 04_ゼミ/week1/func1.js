const f1 = function (n) {
  return n * 3 + 1
}

const f2 = function (n) {
  return 10 ** n
}

const f3 = function (n) {
  return f1(n) + f2(n)
}

console.log(f1(3))
console.log(f2(3))
console.log(f3(3))
