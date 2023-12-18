function Palindrome(test) {
    const chaineTraitee = test.toLowerCase().replace(/\s/g, '');

    return chaineTraitee === chaineTraitee.split('').reverse().join('');
}

console.log(Palindrome("gag"));
console.log(Palindrome("kayak"));
console.log(Palindrome("php"));
console.log(Palindrome("radsar"));