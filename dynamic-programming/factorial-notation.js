/**
 * If n is a positive integer, n factorial denoted by n! is a product of
 * all positive integers less than or equal to n. It is defined by
 * n! = n * (n-1) * (n-2)* ... *(2)*(1)
 *
 * As a special case: 0!=1
 *
 * Example: 5!=5*4*3*2*1=120
 */

/**
 * Traditional Recursive solution
 * @param n
 * @returns {number}
 */
function factorialByRecursive(n) {
    if (n === 0) return 1
    else {
        if ( n === 1) return 1
        else {
            return n * factorialByRecursive(n-1)
        }
    }
}

function factorialByTabulationBottomUp(n) {
    if (n === 0) return 1

    let fac = []
    fac[0] = 1
    for (let i = 1; i <= n; i++) {
      fac[i] = i * fac[i-1]
    }

    return fac[n];
}

let cache = [1]

function factorialByMemoizationTopDown(n) {
    if (n === 0 || n === 1) return 1

    //If we can find the cache, at n position return it
    if (cache[n]) return cache[n]

    return (cache[n] = n * factorialByMemoizationTopDown(n-1))
}

console.log('\n>>Tradition Recursive<<')
console.log(factorialByTabulationBottomUp(4))//24
console.log(factorialByTabulationBottomUp(5))//120
console.log(factorialByTabulationBottomUp(8))//40320
console.log(factorialByTabulationBottomUp(10))//3628800
console.log('\n>>factorialByTabulationBottomUp<<')
console.log(factorialByTabulationBottomUp(0))
console.log(factorialByTabulationBottomUp(1))
console.log(factorialByTabulationBottomUp(2))
console.log(factorialByTabulationBottomUp(3))
console.log(factorialByTabulationBottomUp(4))//24
console.log(factorialByTabulationBottomUp(5))//120
console.log(factorialByTabulationBottomUp(8))//40320
console.log(factorialByTabulationBottomUp(10))//3628800
console.log('\n>>factorialByMemoizationTopDown<<')
console.log(factorialByMemoizationTopDown(4))//24
console.log(factorialByMemoizationTopDown(5))//120
console.log(factorialByMemoizationTopDown(8))//40320
console.log(factorialByMemoizationTopDown(10))//3628800