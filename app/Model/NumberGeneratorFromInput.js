/**
 * @file Subsystem for generating number from inputs: digits, decimal delimiters, etc...
 */

let inputsOfNumberGenerator = '';

/**
 * Returns entered to generator elements
 * @return {string}
 */
export function getRawInput()
{
    return inputsOfNumberGenerator;
}

/**
 * Returns number generated from entered to generator elements
 * @return {number}
 */
export function generateNumberFromInputs()
{
    return parseFloat(inputsOfNumberGenerator);
}

/**
 * Removes all elements of entered number
 * @return {void}
 */
export function clearAllInputsFromNumberGenerator()
{
    inputsOfNumberGenerator = '';
}

/**
 * Removes last element of entered number
 * @return {void}
 */
export function deleteLastInputFromNumberGenerator()
{
    inputsOfNumberGenerator = inputsOfNumberGenerator.slice(0, -1);
}

function isDecimalDelimiter(chr)
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

function countDecimalDelimiters(str)
{
   let result = 0;
   for (let chr of str)
       if (isDecimalDelimiter(chr))
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

function AppendExponentToInputsOfNumberGenerator()
{
    if (inputsOfNumberGenerator === '')
        return;
    if (countExponents(inputsOfNumberGenerator) === 0)
        inputsOfNumberGenerator += 'e';
}

function AppendDecimalDelimiterToInputsOfNumberGenerator()
{
    if (inputsOfNumberGenerator === '')
        return;
    if (countDecimalDelimiters(inputsOfNumberGenerator) === 0)
        inputsOfNumberGenerator += '.';
}

function AppendDigitToInputsOfNumberGenerator(chr)
{
    if (inputsOfNumberGenerator !== '0')
        inputsOfNumberGenerator += chr;
}

export class GivenSymbolCannotBeContainedInNumberException extends Error
{
    givenSymbol;
    constructor(givenSymbol)
    {
        super("Can't add symbol" + givenSymbol +  " to number, because this part can't be contained in a number");
        this.givenSymbol = givenSymbol;
    }
}

export class StringGivenButCharExpectedException extends Error { }

/**
 * Adds new element to number
 * @param {string} symbol
 * @return {void}
 */
export function addSymbolToNumberGeneratorFromInput(symbol)
{
    if (symbol === '')
        return;
    if (symbol.length > 1)
        throw new StringGivenButCharExpectedException;
    if (isExponent(symbol))
    {
        AppendExponentToInputsOfNumberGenerator();
        return;
    }
    if (isDecimalDelimiter(symbol))
    {
        AppendDecimalDelimiterToInputsOfNumberGenerator();
        return;
    }
    if (isDigit(symbol))
    {
        AppendDigitToInputsOfNumberGenerator(symbol);
        return;
    }
    throw new GivenSymbolCannotBeContainedInNumberException;
}
