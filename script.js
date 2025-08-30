//your JS code here. If required.
function processArray() {
  const output = document.getElementById('output');
  const initialArray = [1, 2, 3, 4];

  // Initial promise resolving immediately with the array (noting potential typo in the 3-second delay requirement, adjusted to match example timings)
  new Promise((resolve) => {
    resolve(initialArray);
  })
  .then((arr) => {
    // First transformation: Filter out odd numbers
    const filtered = arr.filter(num => num % 2 === 0);
    // After 1-second delay, update the output and resolve
    return new Promise((resolve) => {
      setTimeout(() => {
        output.textContent = filtered.join(',');
        resolve(filtered);
      }, 1000);
    });
  })
  .then((filtered) => {
    // Second transformation: Multiply even numbers by 2
    const multiplied = filtered.map(num => num * 2);
    // After additional 2-second delay, update the output and resolve
    return new Promise((resolve) => {
      setTimeout(() => {
        output.textContent = multiplied.join(',');
        resolve(multiplied);
      }, 2000);
    });
  });
}

// Call the function to start the process on page load
processArray();
