function palindrome(str) {
    
    ////regular expresion to remove !alphaneumeric characters
 const regX = /[^A-Za-z0-9]/g;
 
    ///set all to uppercase form and if not alphaneumeric then replace with ''
 str = str.toUpperCase().replace(regX, '');

 //console.log(str)
 
 const L = str.length;
 const limit = L/2;
 
 for (let i = 0; i < limit; i++) {
   if (str[i] !== str[L - 1 - i]) {
       return false;
   }
 }
 return true;
}
// //-----test case ---
// console.log(palindrome("eye")) //output--->true
// console.log(palindrome("_eye")) //output--->true
// console.log(palindrome("race car")) //output--->true
// console.log(palindrome("not a palindrome")) //output--->false
// console.log(palindrome("A man, a plan, a canal. Panama")) //output--->true
// console.log(palindrome("never odd or even")) //output--->false
// console.log(palindrome("nope")) //output--->true
// console.log(palindrome("almostomla")) //output--->false
// console.log(palindrome("My age is 0, 0 si ega ym.")) //output--->true
// console.log(palindrome("1 eye for of 1 eye.")) //output--->false
// console.log(palindrome("0_0 (: /-\ :) 0-0")) //output--->true
// console.log(palindrome("five|\_/|four")) //output--->false
