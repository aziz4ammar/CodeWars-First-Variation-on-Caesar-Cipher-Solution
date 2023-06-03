function movingShift(s, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const isUpperCase = char === char.toUpperCase();
  
      if (/[a-zA-Z]/.test(char)) {
        const index = alphabet.indexOf(char.toLowerCase());
        const newIndex = (index + i + shift) % 26;
        const shiftedChar = isUpperCase
          ? alphabet[newIndex].toUpperCase()
          : alphabet[newIndex];
        result += shiftedChar;
      } else {
        result += char;
      }
    }
  
    const splitLength = Math.ceil(result.length / 5);
    const splitResult = [
      result.slice(0, splitLength),
      result.slice(splitLength, splitLength * 2),
      result.slice(splitLength * 2, splitLength * 3),
      result.slice(splitLength * 3, splitLength * 4),
      result.slice(splitLength * 4),
    ];
  
    return splitResult;
  }
  
  function demovingShift(arr, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const joinedArr = arr.join("");
    let result = "";
  
    for (let i = 0; i < joinedArr.length; i++) {
      const char = joinedArr[i];
      const isUpperCase = char === char.toUpperCase();
  
      if (/[a-zA-Z]/.test(char)) {
        const index = alphabet.indexOf(char.toLowerCase());
        let newIndex = index - (i + shift);
  
        while (newIndex < 0) {
          newIndex += 26;
        }
  
        const shiftedChar = isUpperCase
          ? alphabet[newIndex].toUpperCase()
          : alphabet[newIndex];
        result += shiftedChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage
  const encrypted = movingShift("I should have known that you would have a perfect answer for me!!!", 1);
  console.log(encrypted);
  // Output: ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
  const decrypted = demovingShift(encrypted, 1);
  console.log(decrypted);
  // Output: "I should have known that you would have a perfect answer for me!!!"  