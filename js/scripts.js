$(document).ready(function() {
  $('#palindromeForm').submit(function(event) {
    event.preventDefault();
    var palindromeInput = $('input#wordInput').val();
    var splitPalindrome = palindromeInput.split("");
    var reversedJoinedPalindrome = splitPalindrome.reverse().join("");

    if (palindromeInput === reversedJoinedPalindrome) {
      alert("Is a Palindrome");
    } else {
      alert("Not a palindrome!")
    }
  });
});
