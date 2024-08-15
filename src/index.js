module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    function convert1000(n) {
        if (n < 10) return ones[n];
        if (n < 20) return teens[n - 10];
        if (n < 100) {
            return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
        }
        if (n < 1000) {
            return ones[Math.floor(n / 100)] + ' hundred' + (n % 100 !== 0 ? ' ' + convert1000(n % 100) : '');
        }
    }

    function convert(n) {
        if (n < 1000) return convert1000(n);
        if (n < 1000000) {
            return convert1000(Math.floor(num / 1000)) + ' thousand' + (num % 1000 !== 0 ? ' ' + convert1000(num % 1000) : '');
        }
        if (num < 1000000000) {
            return convert1000(Math.floor(num / 1000000)) + ' million' + (num % 1000000 !== 0 ? ' ' + convert1000(num % 1000000) : '');
        }
        if (num < 1000000000000) {
            return convert1000(Math.floor(num / 1000000000)) + ' billion' + (num % 1000000000 !== 0 ? ' ' + convert1000(num % 1000000000) : '');
        }
    }

    return convert(number).trim();

}
