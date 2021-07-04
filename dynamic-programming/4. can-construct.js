/**
 * https://www.youtube.com/watch?v=oBt53YbR9Kk&t=6219s
 * Time:
 *
 * Space:
 *
 * @param target
 * @param strings
 * @returns {boolean|null|*[]}
 */
function canConstructStringBruteForce(target, strings) {
    if (target === '') return true

    for (const string of strings) {
       if (target.startsWith(string)) {
           let remainder = target.substring(string.length)
           if(canConstructStringBruteForce(remainder, strings)) {
               return true
           }
       }
    }

    return null
}

/**
 * Time:
 *
 * Space:
 *
 * @param target
 * @param strings
 * @param memo
 * @returns {boolean|null|*[]}
 */
function canConstructMemoization(target, strings, memo = {}) {
    if (target === '') return true
    if (target in memo) return memo[target]

    for (const string of strings) {
        if (target.startsWith(string)) {
            let remainder = target.substring(string.length)
            let canConstruct = canConstructMemoization(remainder, strings, memo)
            if (canConstruct) {
                memo[target] = canConstruct
                return memo[target]
            }
        }
    }
    memo[target] = null
    return null
}

console.log(canConstructStringBruteForce('abcdef', ['ab','dd', 'c','def'])) //
console.log('-----')
console.log(canConstructMemoization('abcdef', ['ab','dd', 'c','def'])) //
console.log(canConstructMemoization('aaaaaaaaaaaaaaaaaaaaaaaaf', ['a','af', 'c','def'])) //