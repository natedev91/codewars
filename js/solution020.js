// Is it a palindrome??

// Write a function that checks if a given string (case insensitive) is a palindrome.

// function isPalindrome(str) {
// 	// your code here
// 	return str.toLowerCase() == Array.from(str).reverse().join('').toLowerCase()
// }

const isPalindrome = str => str.toLowerCase() == Array.from(str).reverse().join('').toLowerCase()

console.log(isPalindrome('a'))
console.log(isPalindrome('Abba'))
console.log(isPalindrome('Madam'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('Turkey'))