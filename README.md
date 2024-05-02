# This Repo is where I will be posting all the Code Wars Katas that I have completed. I will post the answers that I posted in the JS answer file(answers.js) and the questions numbered and ranked on this page.

## Update I will be updating the answers to make them Type safe using TypeScript.

1. Name - Multiply, Rank - 8
    Q: This code does not execute properly. Try to figure out why.

        function multiply(a, b){
             a * b
            }

2. Name - String end with, Rank - 7
    Q: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

    ```text
    Examples:

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
    ```

3. Name - Merge two sorted arrays into one, Rank - 8
    Q: You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order.       Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

4. Name - Pull your words together, man!, Rank - 7
    Q: Your friend Robbie has successfully created an AI that is capable of communicating in English!

    Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

    ```text
        ["this","is","a","sentence"]    
    ```

    Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

    Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his       code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

    Your function should:
    ```text
    Capitalise the first letter of the first word.
    Add a period (.) to the end of the sentence.
    Join the words into a complete string, with spaces.
    Do no other manipulation on the words.
    ```

5. Name - Remove All The Marked Elements of a List, Rank - 7
    Q: Define a method/function that removes from a given array of integers all the values contained in a second array.
    ```text
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
    Q: In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
    ```text
    Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
    --the order is: uppercase letters, lowercase, numbers and special characters.
    ```
11. Name - Odd-heavy Array, Rank - 6
    Q: An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

    eg.
    ```text
    Array [11,4,9,2,8] is odd-heavy 
    because:- its odd elements [11,9] are greater than all the even elements [4,2,8]
    ```

    ```text
    Array [11,4,9,2,3,10] is not odd-heavy
    because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
    write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.
    ```

12. Name - Break camelCase, Rank - 6
    Q. Complete the solution so that the function will break up camel casing, using a space between words.

    ex.
    ```text
        "camelCasing"  =>  "camel Casing"
        "identifier"   =>  "identifier"
        ""             =>  ""
    ```

13. Name - Is your period late?, Rank 8
    Q. In this kata, we will make a function to test whether a period is late.Our function will take three parameters:
    ```text
    last - The Date object with the date of the last period
    today - The Date object with the date of the check
    cycleLength - Integer representing the length of the cycle in days
    ```
    Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

14. Name - Determine offspring sex, Rank 8
    Q. Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
    ```text
    If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
    ```

15. Name - Find Nearest square number, Rank 8
    Q. Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n. If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

16. Name - Remove String Spaces, Rank 8
    Q. Write a function that removes the spaces from the string, then return the resultant string.
    ```text
    Ex.
    "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
    "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
    "8aaaaa dddd r     " -> "8aaaaaddddr"
    ```

17. Name - Simple Change Machine, Rank 8
    Q. Your task is to create a change machine. The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

18. Name - Divide and Conquer, Rank 7
    Q. Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers. Return as a number.

19. Name - All Star Code Challenge, Rank 8
    Q. Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.
    ```text
    ("Hello", "o")  ==>  1
    ("Hello", "l")  ==>  2
    ("", "z")       ==>  0
    ```

20. Name - Simple Pig Latin, Rank 5
    Q. Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
    ```text
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
    ```

21. Name - Decreasing Inputs, Rank 7
    Q. You will create a function named add. It will return the sum of all the arguments. The inputs will gradually decrease with their index as parameter to the function.
    ```text
    add(3,4,6); 
    returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
    ```
22. Name - Convert number to reversed array of digits, Rank 8
    Q. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
    ```text
    35231 => [1,3,2,5,3]
    0 => [0]
    ```
23. Name - Insert dashes, Rank 7
    Q. Write a function insert_dash(num) that will insert dashes ('-') between each two odd digits in num.

24. Name - Power of Two, Rank 7
    Q. Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two.

    ```text
    isPowerOfTwo(1024) // -> true
    isPowerOfTwo(4096) // -> true
    isPowerOfTwo(333)  // -> false
    ```

25. Name - Mexican Wave, Rank 6
    Q. In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

    ```text
    wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    ```

26. Name - Greet Me, Rank 7
    Q. Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
    ```text
    "riley" --> "Hello Riley!"
    "JACK"  --> "Hello Jack!"
    ```
27. Name - Hello World - Without Strings, Rank 7
    Q. You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

    You cannot use the following:
    ```text
    "Hello, World!"
    'Hello, World!'
    `Hello, World!`
    ```
28. Name - Remove First and Last Character, Rank 8
    Q. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

29. Name - Remove Exclamation Marks From String, Rank 7
    Q. Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
    ```text
    remove("Hi!") === ""
    remove("Hi! Hi!") === ""
    remove("Hi! Hi! Hi!") === ""
    remove("Hi Hi! Hi!") === "Hi"
    remove("Hi! !Hi Hi!") === ""
    remove("Hi! Hi!! Hi!") === "Hi!!"
    remove("Hi! !Hi! Hi!") === "!Hi!"
    ```

30. Name - Remove First and Last Character Part Two, Rank 8
    Q. You are given a string containing a sequence of character sequences separated by commas. Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
    ```text
    "1,2,3"      =>  "2"
    "1,2,3,4"    =>  "2 3"
    "1,2,3,4,5"  =>  "2 3 4"

    ""     =>  NULL
    "1"    =>  NULL
    "1,2"  =>  NULL
    ```
31. Name - Nast digits of a number, Rank 7
    Q. Your job is to implement a function which returns the last D digits of an integer N as a list.
    ```text
    N = 1
    D = 1
    result = [1]

    N = 1234
    D = 2
    result = [3, 4]

    N = 637547
    D = 6
    result = [6, 3, 7, 5, 4, 7]
    ```
32. Name - Twice as old, Rank 8
    Q. Your function takes two arguments:
    ```text
    1. current father's age (years)
    2. current age of his son (years)
    ```
    Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
