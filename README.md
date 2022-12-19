This Repo is where I will be posting all the Code Wars Katas that I have completed. I will post the answers that I posted in the JS answer file(answers.js) and the questions numbered and ranked on this page.

1. Name - Multiply, Rank - 8
    Q: This code does not execute properly. Try to figure out why.

        function multiply(a, b){
             a * b
            }

2. Name - String end with, Rank - 7
    Q: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
    ```
    Examples:

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
    ```

3. Name - Merge two sorted arrays into one, Rank - 8
    Q: You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order.       Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

4. Name - Pull your words together, man!, Rank - 7
    Q: Your friend Robbie has successfully created an AI that is capable of communicating in English!

    Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:
    ```
    ["this","is","a","sentence"]    
    ```
    
    Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

    Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his       code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

    Your function should:
    ```
    Capitalise the first letter of the first word.
    Add a period (.) to the end of the sentence.
    Join the words into a complete string, with spaces.
    Do no other manipulation on the words.
    ```

5. Name - Remove All The Marked Elements of a List, Rank - 7
    Q: Define a method/function that removes from a given array of integers all the values contained in a second array.
    ```
    Examples (input -> output):
    * [1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3] -> [2, 2, 4]
    * [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6 ,7 ,8]
    * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
    ```
6. Name - If you can't sleep, just count sheep!!, Rank - 8
    Q: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no       negative integers.

7. Name - Parse nice int from char problem, Rank - 8 
    Q: You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

    Write a program that returns the girl's age (0-9) as an integer.

    Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the         string is always a number.

8. Name - Convert a string to an array, Rank - 8
    Q: Write a function to split a string and convert it into an array of words.

9. Name - Count Odd Numbers below n, Rank - 8
    Q: Given a number n, return the number of positive odd numbers below n

10. Name - Simple string characters, Rank - 7
    Q: In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers     and special characters, as follows.
    ```
    Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
    --the order is: uppercase letters, lowercase, numbers and special characters.
    ```
11. Name - Odd-heavy Array, Rank - 6
    Q: An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

    eg.
    ```
    Array [11,4,9,2,8] is odd-heavy 
    because:- its odd elements [11,9] are greater than all the even elements [4,2,8]
    ```
    ```
    Array [11,4,9,2,3,10] is not odd-heavy
    because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
    write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

12. Name - Break camelCase, Rank - 6
    Q. Complete the solution so that the function will break up camel casing, using a space between words.

    ex.
    ```
        "camelCasing"  =>  "camel Casing"
        "identifier"   =>  "identifier"
        ""             =>  ""
    ```