[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

### Analysis

The asymtotic runtime of my algorithm in terms of comparisons is $\Theta(n^2)$, because in the flip() function I make at most 2 comparisons to ensure I reverse the correct number of elements. The main while loop that will check it's condition after every loop, this is n. In the while loop I make 2 comparisons in a for loop (that loops over the input) when finding the max unsorted element. One to verify if the current element is already sorted and the other to see if that element is larger than the max element. So $n(n + n)$. Still in the while loop but outside the for loop I call flip() twice. Each time it makes two comparisons in a for loop, so $n(n + n)$. This gives us $n^2 + n^2 + n^2 + n^2$ so over all we get $\Theta(n^2)$ <br/> 
<br/> 
The asymtotic runtime of my algorithm in terms of flips is $\Theta(n)$, because I call flip() twice for every element in the array. The first flip() gets the current max to the front of the array and then the second flip() puts it into it's sorted location, so 2n, where n is the input size. Since we are looking at the runtime analysis we can drop the leading coefficient. Giving us with $\Theta(n)$ <br/> 
<br/> 
My flip() function has one for loop in it that loops over every element in the array, so run time of n. <br/> 
My pancake sort funtion has a while loop that loops until we have sorted every element in the array, in each loop of the while we will sort one element so the while loop has a complexity of n. In the while loop I have a for loop that loops to find the max element we havn't sorted, so at it's worst it will loop over the whole array, n. After the for loop I call flip() twice, once to get the max to the front of the array and then a second to get it into the correct place. Each of the flip()'s has a complexity of n. Over all the $\Theta(n^2)$ <br/>
<br/>


