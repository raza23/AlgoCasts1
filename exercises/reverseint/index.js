// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var n_str = Math.abs(n).toString();
  var number = parseInt(
    n_str
      .split("")
      .reverse()
      .join("")
  );
  return number * Math.sign(n);
}

module.exports = reverseInt;
sadmsjkadmk;
