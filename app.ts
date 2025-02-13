const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000;
const ONE_TRILLION = 1000000000000;
const ONE_QUADRILLION = 1000000000000000;
const MAX = 9007199254740992;

const LESS_THAN_TWENTY: string[] = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_LESS_THAN_HUNDRED: string[] = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

function toWords(number: number | string, asOrdinal?: boolean): string {
    const num = parseInt(number as string, 10);
    if (!isFinite(num)) {
        throw new TypeError(`Not a finite number: ${number} (${typeof number})`);
    }

    const words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words.join(' ');
}

function generateWords(number: number, words?: string[]): string[] {
    if (number === 0) {
        return words ? words : ['zero'];
    }

    if (!words) {
        words = [];
    }

    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }

    let word: string;

    if (number < 20) {
        word = LESS_THAN_TWENTY[number];
    } else if (number < ONE_HUNDRED) {
        const remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
        }
    } else if (number < ONE_THOUSAND) {
        word = generateWords(Math.floor(number / ONE_HUNDRED)).join(' ') + ' hundred';
    } else if (number < ONE_MILLION) {
        word = generateWords(Math.floor(number / ONE_THOUSAND)).join(' ') + ' thousand';
    } else if (number < ONE_BILLION) {
        word = generateWords(Math.floor(number / ONE_MILLION)).join(' ') + ' million';
    } else if (number < ONE_TRILLION) {
        word = generateWords(Math.floor(number / ONE_BILLION)).join(' ') + ' billion';
    } else if (number < ONE_QUADRILLION) {
        word = generateWords(Math.floor(number / ONE_TRILLION)).join(' ') + ' trillion';
    } else if (number <= MAX) {
        word = generateWords(Math.floor(number / ONE_QUADRILLION)).join(' ') + ' quadrillion';
    }

    words.push(word);
    return generateWords(number % (number < ONE_HUNDRED ? TEN : (number < ONE_THOUSAND ? ONE_HUNDRED : (number < ONE_MILLION ? ONE_THOUSAND : (number < ONE_BILLION ? ONE_MILLION : (number < ONE_TRILLION ? ONE_BILLION : ONE_QUADRILLION))))), words);
}

// не совсем понял что делать с:
// Не удается найти имя "makeOrdinal". Вы имели в виду "asOrdinal"? и 
// Переменная "word" используется перед назначением.