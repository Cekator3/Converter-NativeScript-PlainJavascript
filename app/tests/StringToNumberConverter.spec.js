import
{
    convertStringToNumber
} from "~/Model/StringToNumberConverter";

describe('Correct numbers converting test', testCorrectNumbersConverting);
describe('Numbers with too many decimal delimiters and exponents converting test', testConvertingNumbersWithTooManyDecimalDelimiters);
describe('Numbers with latin symbols converting test', testConvertingNumbersWithLatinSymbols);

function testCorrectNumbersConverting()
{
    let inputs =
    [
        '123',
        '0',
        '',
        '.....,,,',
        '123e15',
        '123.14',
        '123.',
        '..123...',
        'eeeeeee',
        '123eeee',
        '0000000.000000',
        '0.1e1',
        '0.e1'
    ]
    let expectedOutputs =
    [
        123,
        0,
        0,
        0,
        123e15,
        123.14,
        123,
        123,
        0,
        123,
        0,
        1,
        0
    ]
    for (let i = 0; i < inputs.length; i++)
    {
        it(inputs[i] + ' must be converted to ' + expectedOutputs[i], function ()
        {
            let result = convertStringToNumber(inputs[i]);
            expect(result).toEqual(expectedOutputs[i]);
        });
    }
}

function testConvertingNumbersWithTooManyDecimalDelimiters()
{
    let inputs =
    [
        '123..0',
        '0.1.2',
        '0eeeeee15'
    ]
    for (let i = 0; i < inputs.length; i++)
    {
        it(inputs[i] + ' must throw an exception', function ()
        {
            expect(function() { convertStringToNumber(inputs[i]) }).toThrow();
        });
    }
}

function testConvertingNumbersWithLatinSymbols()
{
    let inputs =
    [
        '124ars13',
    ]
    for (let i = 0; i < inputs.length; i++)
    {
        it(inputs[i] + ' must throw an exception', function ()
        {
            expect(function() { convertStringToNumber(inputs[i]) }).toThrow();
        });
    }
}
