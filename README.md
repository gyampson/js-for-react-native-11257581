Student ID: [11257581]

This project consists of three JavaScript files:

* **arrayManipulation.js:**
    * Contains a function `processArray` that takes an array of numbers and returns a new array where even numbers are squared and odd numbers are tripled.
    * Additionally, it includes a function `formatArrayStrings` that modifies an array of strings based on corresponding processed numbers from `processArray`:
        * Capitalizes strings for even numbers.
        * Converts strings to lowercase for odd numbers.
* **userInfo.js:**
    * Contains a function `createUserProfiles` that takes two arrays: original names and modified names (from `formatArrayStrings`).
    * It returns an array of objects, each representing a user profile with:
        * `originalName` (original name)
        * `modifiedName` (modified name)
        * `id` (auto-incremented starting from 1)
