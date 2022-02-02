/*
Instructions
In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

Start by creating a function called decoder that has a single parameter called code.

Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

Here are a few more examples:

'0h2xce5ngbrdy' => 'hey'
'3vdfn' => 'n'
'0r' => 'r'
'2bna0p1mp2osl0e' => 'apple'
'0y4akjfe0s' => 'yes'
*/

function decoder(code) {
    const chars = []
    let i = 0
    while (i < code.length) {
        i += +code[i] + 1
        chars.push(code[i])
        i += 1
    }
    return chars.join('')
}

// function runDecoder(code) {
//     console.log("code:", code, "   decoded:", decoder(code))
// }

// runDecoder('0h2xce5ngbrdy')  // hey
// runDecoder('3vdfn')  // n
// runDecoder('0r')  // r
// runDecoder('2bna0p1mp2osl0e')  // apple
// runDecoder('0y4akjfe0s')  // yes

function testDecoder(code, desired) {
    const decoded = decoder(code)
    console.log("code:", code, "  decoded:", decoded, "  desired:", desired, "  passed:", decoded == desired)
}

testDecoder('0h2xce5ngbrdy','hey')
testDecoder('3vdfn', 'n')
testDecoder('0r', 'r')
testDecoder('2bna0p1mp2osl0e', 'apple')
testDecoder('0y4akjfe0s', 'yes')