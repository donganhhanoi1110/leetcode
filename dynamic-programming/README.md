## Dynamic Programming
Dynamic Programming is mainly an optimization over plain recursion.
Wherever we see a recursive solution that has repeated calls for same inputs,
we can optimize it using Dynamic Programming.
The idea is to simply store the results of subproblems, so that we do not have to 
re-compute them when needed later. This simple optimization reduces time complexities from
exponential to polynomial.

Example, if we write simple recursive solution for Fibonacci Numbers, we get exponential time complexity
and if we optimize it by storing solutions of subproblems, time complexity reduces to linear.

##Basic concept
### Tabulation vs Memoization
* **Tabulation**: Bottom Up
* **Memoization**: Top Down
### Overlapping subProblems
### Optimal Substructure property

##Steps to solve a dynamic programming
1. Identify if it is a Dynamic Programming problem
2. Decide a state expression with the least parameters.
3. Formulate state relationship
 
       Make it work
          visualize the problem as a tree
          implement the tree using recursion
          test it
       Make it efficient 
         add a memo (memoization) object
         add a base case to return memo values
         store return values into the memo
      
4. Do tabulation ( or add memoization)