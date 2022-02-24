const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = []
    const morse = []
    let result = ''
    for(let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }

    for(let i = 0; i < arr.length; i++) {
        if(!arr[i].includes('*')) {
            morse[i] = ''
            for(let n = 0; n < 10; n += 2) {
                if(arr[i].slice(n, n + 2) == 10) {
                    morse[i] += '.'
                } else if(arr[i].slice(n, n + 2) == 11) {
                    morse[i] += '-'
                }
            }
        } else {
            morse[i] = 'sp'
        }
        
    }

    for(let el of morse) {
        if(el == 'sp') {
            result += ' '
        } else {
            result += MORSE_TABLE[el]
        }
    }

    return result
}

module.exports = {
    decode
}