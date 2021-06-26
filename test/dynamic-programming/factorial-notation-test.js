const fn = require("../../dynamic-programming/factorial-notation");

console.log('\n>>Tradition Recursive<<')
console.log(fn.factorialByTabulationBottomUp(4))//24
console.log(fn.factorialByTabulationBottomUp(5))//120
console.log(fn.factorialByTabulationBottomUp(8))//40320
console.log(fn.factorialByTabulationBottomUp(10))//3628800
console.log('\n>>fn.factorialByTabulationBottomUp<<')
console.log(fn.factorialByTabulationBottomUp(0))
console.log(fn.factorialByTabulationBottomUp(1))
console.log(fn.factorialByTabulationBottomUp(2))
console.log(fn.factorialByTabulationBottomUp(3))
console.log(fn.factorialByTabulationBottomUp(4))//24
console.log(fn.factorialByTabulationBottomUp(5))//120
console.log(fn.factorialByTabulationBottomUp(8))//40320
console.log(fn.factorialByTabulationBottomUp(10))//3628800
console.log('\n>>fn.factorialByMemoizationTopDown<<')
console.log(fn.factorialByMemoizationTopDown(4))//24
console.log(fn.factorialByMemoizationTopDown(5))//120
console.log(fn.factorialByMemoizationTopDown(8))//40320
console.log(fn.factorialByMemoizationTopDown(10))//3628800