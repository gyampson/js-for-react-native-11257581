function processArray(arr) {
  return arr.map((num) => (num % 2 === 0 ? num * num : num * 3));
}
function processArray(arr) {}

function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) =>
    processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
  );
}
