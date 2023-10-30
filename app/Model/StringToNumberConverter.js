/**
 * @file A subsystem for converting a string to number
 */

function isDigitDelimiter(chr)
{
    return (chr === '.') || (chr === ',');
}

function isDigit(chr)
{
    return (chr >= '0') && (chr <= '9');
}

function isExponent(chr)
{
    return (chr === 'e') || (chr === 'E');
}

function isPartOfDigit(chr)
{
    return isDigitDelimiter(chr) || isDigit(chr) || isExponent(chr);
}

function countDecimalDelimiters(str)
{
    let result = 0;
    for (let chr of str)
        if (isDigitDelimiter(chr))
            result++;
    return result;
}

function countExponents(str)
{

    let result = 0;
    for (let chr of str)
        if (isExponent(chr))
            result++;
    return result;
}

function trimNotDigitsSymbols(str)
{
    let start = 0;
    let end = str.length - 1;
    while ((!isDigit(str[start])) && (start < end))
        start++;
    while ((!isDigit(str[end])) && (start < end))
        end--;
    if (start < end)
        return '';
    return str.substring(start, end + 1);
}

export class TooManyDecimalDelimitersInNumberFoundException extends Error
{
    number;
    amountOfDecimalDelimiters;
    constructor(number, amountOfDecimalDelimiters)
    {
        super('Found ' + amountOfDecimalDelimiters + ' decimal delimiters in ' + number);
        this.number = number;
        this.amountOfDecimalDelimiters = amountOfDecimalDelimiters
    }
}

export class FoundNotDigitSymbolException extends Error
{
    number;
    unexpectedSymbol;
    positionOfUnexpectedSymbol;
    constructor(number, unexpectedSymbol, positionOfUnexpectedSymbol)
    {
        super('Found unexpected symbol ' + unexpectedSymbol + ' found while trying to parse ' + number + ' at position ' + positionOfUnexpectedSymbol);
        this.number = number;
        this.unexpectedSymbol = unexpectedSymbol;
        this.positionOfUnexpectedSymbol = positionOfUnexpectedSymbol;
    }
}

export class TooManyExponentsInNumberFoundException extends Error
{
    number;
    amountOfExponents;
    constructor(number, amountOfExponents)
    {
        super('Found ' + amountOfExponents + ' exponents in ' + number);
        this.number = number;
        this.amountOfExponents = amountOfExponents
    }
}

/**
 * Converts string to number
 * @throws FoundNotDigitSymbolException
 * @throws TooManyDecimalDelimitersInNumberFoundException
 * @param {string} str
 * @returns {number}
 */
export function convertStringToNumber(str)
{
    let temp = trimNotDigitsSymbols(str);
    if (temp === '')
        throw new TooManyDecimalDelimitersInNumberFoundException(str, str.length);
    str = temp;
    for (let i = 0; i < str.length; i++)
        if ((!isDigit(str[i])) && (!isDigitDelimiter(str[i])))
            throw new FoundNotDigitSymbolException(str, str[i], i + 1);
    let amountOfDecimalDelimiters = countDecimalDelimiters(str);
    if (amountOfDecimalDelimiters > 1)
        throw new TooManyDecimalDelimitersInNumberFoundException(str, amountOfDecimalDelimiters);
    let amountOfExponents = countExponents(str);
    if (amountOfExponents > 1)
        throw new TooManyExponentsInNumberFoundException(str, amountOfExponents);
    return +str;
}
