// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// solution

let reverseVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  string = string.split("");
  let i = string.length - 1;
  let j = 0;

  while (i > j) {
    if (vowels.includes(string[i]) && vowels.includes(string[j])) {
      const temp = string[i];
      string[j] = string[i];
      string[i] = temp;
      j++;
      i--;
    } else if (!vowels.includes(string[i])) {
      i--;
    } else if (!vowels.includes(string[j])) {
      j++;
    }
  }

  return string.join("");
};

const data = reverseVowels("le3@etcode");
// console.log(data);

const reverse = (string) => {
  string = string.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let begin = 0;
  let last = string.length;
  while (begin < last) {
    if (
      vowels.includes(string[last].toLowerCase()) &&
      vowels.includes(string[begin].toLowerCase())
    ) {
      [string[last], string[begin]] = [string[begin], string[last]];
      
      last--;
      begin++;
    } else if (!vowels.includes(string[last].toLowerCase())) {
      last--;
    } else if (!vowels.includes(string[begin].toLowerCase())) {
      begin++;
    }
  }
  return string.join("");
};

const ans = reverse("hello");
console.log(ans);
