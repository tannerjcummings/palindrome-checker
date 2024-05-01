const checkButton = document.getElementById('check-btn');
        const textInput = document.getElementById('text-input');
        const resultElement = document.getElementById('result');

//Check function
const checkForPalindrome = (input) => {
    const originalInput = input;
    if(input === ''){
        alert('Please input a value');
        return;
    }

//Turn into lowercase
 const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

//Display result
result.innerHTML = resultMsg.value;
} //End function

//Button submit
checkButton.addEventListener('click', () => {
  checkForPalindrome(textInput.value);
  textInput.value = '';
});

//Enter key submits check button
textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(textInput.value);
    textInput.value = '';
  }
});